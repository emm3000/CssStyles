(() => {
  const MAX_DEPTH = 10935;
  const TURNS = 8;
  const DEG_PER_M = (TURNS * 360) / MAX_DEPTH;
  const BOUNDS = [0, 200, 1000, 4000, 6000, MAX_DEPTH];
  const ZONES = ["epipelágica", "mesopelágica", "batipelágica", "abisopelágica", "hadal"];
  const BOTTOM_BAR = 1086;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  const automaton = $("#automaton");
  const column = $("#column");
  const crank = $("#crank");
  const figures = $$(".figure", column);
  const keyButtons = $$(".keyframes button");
  const autoplayBtn = $("#autoplay");
  const out = {
    depth: $("#r-depth"),
    pressure: $("#r-pressure"),
    temp: $("#r-temp"),
    light: $("#r-light"),
  };

  const fmt = (n) => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

  function zoneOf(depth) {
    for (let i = 0; i < 5; i++) {
      if (depth < BOUNDS[i + 1] || i === 4) {
        const frac = (depth - BOUNDS[i]) / (BOUNDS[i + 1] - BOUNDS[i]);
        return { index: i, frac: clamp(frac, 0, 1) };
      }
    }
  }

  // Approximate water temperature profile over the Mariana Trench.
  const TEMP = [[0, 29], [200, 20], [1000, 4.5], [4000, 1.5], [6000, 1.6], [MAX_DEPTH, 2.4]];
  function tempAt(depth) {
    for (let i = 1; i < TEMP.length; i++) {
      const [d1, t1] = TEMP[i];
      const [d0, t0] = TEMP[i - 1];
      if (depth <= d1) return t0 + ((depth - d0) / (d1 - d0)) * (t1 - t0);
    }
    return TEMP[TEMP.length - 1][1];
  }

  function lightAt(depth) {
    if (depth < 200) return "Sol";
    if (depth < 1000) return "Penumbra";
    if (depth < MAX_DEPTH - 1) return "Ninguna";
    return "Solo tus focos";
  }

  let depth = 0;

  function render() {
    const crankDeg = depth * DEG_PER_M;
    const rad = (crankDeg * Math.PI) / 180;
    const swing = Math.sin(rad * 2);
    const { index, frac } = zoneOf(depth);

    const pos = clamp(index + frac - 0.5, 0, 4);
    column.style.setProperty("--col-y", `${(-pos / 5) * 100}%`);

    automaton.style.setProperty("--crank", `${crankDeg}deg`);
    automaton.style.setProperty("--progress", (depth / MAX_DEPTH).toFixed(4));
    automaton.style.setProperty("--bob", `${(Math.sin(rad) * 4).toFixed(2)}px`);
    automaton.style.setProperty("--tilt", `${(Math.sin(rad * 0.5) * 2).toFixed(2)}deg`);
    automaton.style.setProperty("--lamp", (clamp((depth - 150) / 850, 0, 1) * 0.16).toFixed(3));

    figures.forEach((fig, i) => {
      const active = i === index;
      fig.classList.toggle("is-active", active);
      fig.style.setProperty("--swing", active ? swing.toFixed(3) : "0");
    });

    keyButtons.forEach((btn, i) => btn.setAttribute("aria-current", String(i === index)));

    const pressure = 1.013 + (depth / MAX_DEPTH) * (BOTTOM_BAR - 1.013);
    out.depth.textContent = fmt(depth);
    out.pressure.textContent = fmt(pressure);
    out.temp.textContent = tempAt(depth).toFixed(1).replace(".", ",");
    out.light.textContent = lightAt(depth);

    crank.setAttribute("aria-valuenow", String(Math.round(depth)));
    crank.setAttribute("aria-valuetext", `${fmt(depth)} metros, zona ${ZONES[index]}`);
  }

  function setDepth(next) {
    depth = clamp(next, 0, MAX_DEPTH);
    render();
  }

  // ---- Crank drag: angle delta around the hub becomes depth ----
  let dragging = false;
  let lastAngle = 0;

  function angleFrom(event) {
    const r = crank.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    return (Math.atan2(event.clientY - cy, event.clientX - cx) * 180) / Math.PI;
  }

  crank.addEventListener("pointerdown", (event) => {
    stopTween();
    stopAutoplay();
    dragging = true;
    lastAngle = angleFrom(event);
    crank.setPointerCapture(event.pointerId);
    event.preventDefault();
  });

  crank.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    const a = angleFrom(event);
    let delta = a - lastAngle;
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;
    lastAngle = a;
    setDepth(depth + delta / DEG_PER_M);
  });

  const endDrag = () => { dragging = false; };
  crank.addEventListener("pointerup", endDrag);
  crank.addEventListener("pointercancel", endDrag);

  crank.addEventListener("keydown", (event) => {
    const { index } = zoneOf(depth);
    const step = event.shiftKey ? 500 : 100;
    let target = null;
    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown": target = depth + step; break;
      case "ArrowLeft":
      case "ArrowUp": target = depth - step; break;
      case "PageDown": target = BOUNDS[Math.min(index + 1, 4)] + 1; break;
      case "PageUp": target = depth > BOUNDS[index] + 1 ? BOUNDS[index] : BOUNDS[Math.max(index - 1, 0)]; break;
      case "Home": target = 0; break;
      case "End": target = MAX_DEPTH; break;
      default: return;
    }
    event.preventDefault();
    stopAutoplay();
    if (event.key === "PageDown" || event.key === "PageUp" || event.key === "Home" || event.key === "End") {
      tweenTo(target);
    } else {
      stopTween();
      setDepth(target);
    }
  });

  // ---- Tweened turns: the crank still drives everything ----
  let tween = 0;
  function stopTween() { cancelAnimationFrame(tween); tween = 0; }

  function tweenTo(target) {
    stopTween();
    target = clamp(target, 0, MAX_DEPTH);
    if (reduceMotion.matches) { setDepth(target); return; }
    const from = depth;
    const distance = Math.abs(target - from);
    const duration = clamp(500 + distance * 0.16, 600, 2200);
    const start = performance.now();
    const ease = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));
    const step = (now) => {
      const t = clamp((now - start) / duration, 0, 1);
      setDepth(from + (target - from) * ease(t));
      if (t < 1) tween = requestAnimationFrame(step);
      else tween = 0;
    };
    tween = requestAnimationFrame(step);
  }

  function zoneMid(i) {
    return i === 4 ? MAX_DEPTH : (BOUNDS[i] + BOUNDS[i + 1]) / 2;
  }

  keyButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      stopAutoplay();
      tweenTo(zoneMid(Number(btn.dataset.goto)));
    });
  });

  $$(".goto").forEach((btn) => {
    btn.addEventListener("click", () => {
      stopAutoplay();
      const target = zoneMid(Number(btn.dataset.goto));
      $("#bajada").scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth", block: "start" });
      setTimeout(() => tweenTo(target), reduceMotion.matches ? 0 : 450);
      crank.focus({ preventScroll: true });
    });
  });

  // ---- Autoplay: a steady hand on the crank ----
  let auto = 0;
  let autoLast = 0;
  const AUTO_SPEED = 900; // metres per second

  function stopAutoplay() {
    if (!auto) return;
    cancelAnimationFrame(auto);
    auto = 0;
    autoplayBtn.setAttribute("aria-pressed", "false");
    autoplayBtn.querySelector("span").textContent = "Girar sola";
  }

  function startAutoplay() {
    stopTween();
    if (depth >= MAX_DEPTH - 1) setDepth(0);
    autoplayBtn.setAttribute("aria-pressed", "true");
    autoplayBtn.querySelector("span").textContent = "Parar";
    autoLast = performance.now();
    const step = (now) => {
      const dt = Math.min(now - autoLast, 64) / 1000;
      autoLast = now;
      setDepth(depth + AUTO_SPEED * dt);
      if (depth >= MAX_DEPTH) { stopAutoplay(); return; }
      auto = requestAnimationFrame(step);
    };
    auto = requestAnimationFrame(step);
  }

  autoplayBtn.addEventListener("click", () => (auto ? stopAutoplay() : startAutoplay()));
  if (reduceMotion.matches) autoplayBtn.hidden = true;

  render();

  // ---- Forms ----
  const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  const quick = $("#quick-form");
  const quickEmail = $("#quick-email");
  const quickMsg = $("#quick-msg");
  quick.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = quickEmail.value.trim();
    if (!EMAIL.test(value)) {
      quickEmail.setAttribute("aria-invalid", "true");
      quickMsg.classList.add("is-error");
      quickMsg.textContent = value ? "Ese correo no parece completo. Revisa la parte después de la @." : "Escribe tu correo para pedir el briefing.";
      quickEmail.focus();
      return;
    }
    quickEmail.removeAttribute("aria-invalid");
    quickMsg.classList.remove("is-error");
    quickMsg.textContent = "Perfecto. Completa dos datos más abajo.";
    $("#b-email").value = value;
    $("#briefing").scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth", block: "start" });
    setTimeout(() => $("#b-name").focus({ preventScroll: true }), reduceMotion.matches ? 0 : 600);
  });
  quickEmail.addEventListener("input", () => {
    if (quickEmail.getAttribute("aria-invalid")) {
      quickEmail.removeAttribute("aria-invalid");
      quickMsg.classList.remove("is-error");
      quickMsg.textContent = "";
    }
  });

  const form = $("#brief-form");
  const submit = $("#brief-submit");
  const checks = [
    { el: $("#b-name"), err: $("#b-name-err"), test: (v) => v.length > 1, msg: "Dinos cómo te llamas." },
    { el: $("#b-email"), err: $("#b-email-err"), test: (v) => EMAIL.test(v), msg: "Necesitamos un correo válido para escribirte." },
  ];

  checks.forEach(({ el, err }) => el.addEventListener("input", () => {
    el.removeAttribute("aria-invalid");
    err.textContent = "";
  }));

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let firstBad = null;
    checks.forEach(({ el, err, test, msg }) => {
      const ok = test(el.value.trim());
      el.toggleAttribute("aria-invalid", !ok);
      if (!ok) el.setAttribute("aria-invalid", "true");
      err.textContent = ok ? "" : msg;
      if (!ok && !firstBad) firstBad = el;
    });
    if (firstBad) { firstBad.focus(); return; }

    submit.disabled = true;
    submit.classList.add("is-loading");
    submit.querySelector("span").textContent = "Enviando…";
    setTimeout(() => {
      $("#sent-email").textContent = $("#b-email").value.trim();
      form.hidden = true;
      const sent = $("#sent");
      sent.hidden = false;
      sent.focus();
    }, reduceMotion.matches ? 200 : 1100);
  });
})();
