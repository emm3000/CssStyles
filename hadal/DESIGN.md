---
name: HADAL
description: A hand-cranked paper automaton that lowers the visitor to 10,935 m.
colors:
  board: "#0b1118"
  board-raised: "#111a24"
  board-deep: "#070b10"
  board-ground: "#04070b"
  paper: "#e9e3d6"
  paper-2: "#cbc3b1"
  paper-3: "#9f9683"
  paper-grey: "#b9b3a6"
  ash: "#2a3440"
  ash-hi: "#36424f"
  ink: "#020406"
  ink-text: "#14161a"
  ink-muted: "#4a4740"
  crimson: "#c22e34"
  crimson-btn: "#b3242b"
  crimson-text: "#e4484e"
  crimson-fold: "#8f1f24"
  surface-water: "#2a6377"
  zone-0: "#1d4a5c"
  zone-1: "#163647"
  zone-2: "#10222f"
  zone-3: "#0b161f"
  zone-4: "#06090d"
typography:
  display:
    fontFamily: "Shoulders Stencil, Shoulders Text, sans-serif"
    fontSize: "clamp(3.4rem, 7.2vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.88
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Shoulders Stencil, Shoulders Text, sans-serif"
    fontSize: "clamp(2.6rem, 6vw, 5.25rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.005em"
  title:
    fontFamily: "Shoulders Stencil, Shoulders Text, sans-serif"
    fontSize: "clamp(2.2rem, 4.4vw, 3.75rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "0.01em"
  numeral:
    fontFamily: "Shoulders Stencil, Shoulders Text, sans-serif"
    fontSize: "1.6rem"
    fontWeight: 900
    lineHeight: 1
  label:
    fontFamily: "Shoulders Text, sans-serif"
    fontSize: "1rem"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "0.1em"
  label-sm:
    fontFamily: "Shoulders Text, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 800
    letterSpacing: "0.14em"
  body:
    fontFamily: "Courier Prime, ui-monospace, monospace"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  readout:
    fontFamily: "Courier Prime, ui-monospace, monospace"
    fontSize: "1.05rem"
    fontWeight: 700
    fontFeature: "tnum"
rounded:
  none: "0px"
  slot-mark: "2px"
  pin: "50%"
spacing:
  s1: "4px"
  s2: "8px"
  s3: "12px"
  s4: "16px"
  s5: "24px"
  s6: "32px"
  s7: "48px"
  s8: "72px"
  s9: "112px"
  gutter: "clamp(16px, 4vw, 56px)"
components:
  tab:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-text}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "8px 24px 8px 30px"
    height: "44px"
  tab-crimson:
    backgroundColor: "{colors.crimson-btn}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "8px 24px 8px 30px"
    height: "44px"
  tab-crimson-big:
    backgroundColor: "{colors.crimson-btn}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    padding: "8px 48px 8px 32px"
    height: "56px"
  tab-ash:
    backgroundColor: "{colors.ash}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "8px 24px 8px 30px"
    height: "44px"
  tab-nav:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.ink-text}"
    typography: "{typography.label}"
    padding: "8px 16px 8px 24px"
    height: "44px"
  field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-text}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "12px 16px 12px 28px"
    height: "48px"
  choice:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.ink-text}"
    typography: "{typography.body}"
    padding: "8px 16px 8px 24px"
    height: "44px"
  choice-checked:
    backgroundColor: "{colors.ink-text}"
    textColor: "{colors.paper}"
  keyframe-tab:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.ink-text}"
    padding: "8px 12px"
  keyframe-tab-active:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-text}"
  caption-strip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-text}"
    typography: "{typography.body}"
    padding: "12px 16px 12px 24px"
  depth-mark:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-text}"
    typography: "{typography.label-sm}"
    padding: "2px 8px 1px 10px"
  sheet:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-text}"
    padding: "clamp(32px, 5vw, 72px)"
---

# Design System: HADAL

## Overview

**Creative North Star: "The Abyssal Automaton"**

HADAL is cut and slotted paper laid on an abyssal board. Pulp-white stock forms every figure, tab, label and sheet; paper grey and pressed ash are the secondary stocks; the board underneath is a near-black blue carried by fiber and grain overlays. Depth comes from real cast shadows (filter drop-shadows) under paper that is physically lifted off the board, never from glows or gloss.

The system is mechanical. A single crank is the master clock: linkages swing with its angle, strata translate, and nothing in the scene moves on its own timer. Crimson is the only chromatic accent and it is rationed: red is the first color the sea swallows, so it marks only what is moving, what is committed and what has gone wrong.

Type is workshop lettering: stencil caps for display, condensed heavy caps for every label and tab, and a typewriter face for running text and readouts, as if notes were typed onto the board.

**Key Characteristics:**
- Paper on board: light stock figures on a dark fiber ground, with grain multiplied into every paper fill.
- Every control is a notched paper tab with a punched slot mark.
- Lift through drop-shadow filters on the element, never box-shadow on a clipped shape.
- One rationed crimson for motion, commitment and error.
- Stencil, condensed caps and typewriter: three voices, each with one job.
- Crank-driven motion only; reduced motion collapses all transitions.

## Colors

A dark, cold board with warm paper stocks and one rationed crimson.

### Primary
- **Swallowed Crimson** (`crimson`): the moving figure parts in the active zone, the crank knob, the active keyframe number, the brand mark field. Folded faces of crimson parts use **Crimson Fold** (`crimson-fold`).
- **Commitment Crimson** (`crimson-btn`): the fill of commitment tabs (briefing request, final descent), the brand mark, selection, the caret, error rings on fields and error text on paper.
- **Signal Crimson** (`crimson-text`): crimson set as text on the board: the one crimson headline line, error messages on the board, and the text-link hover underline.

### Neutral
- **Abyssal Board** (`board`): the canonical board color; top bar fill. The page body is painted with **Board Ground** (`board-ground`) under blue-tinted fiber and grain, which reads at about the board value.
- **Raised Board** (`board-raised`): the diorama box body.
- **Deep Board** (`board-deep`): punched slot marks, the crank slot track, the hadal-zone well, scrollbar track.
- **Pulp Paper** (`paper`): primary stock for figures, default tabs, fields, the briefing sheet; also the main text color on the board.
- **Paper Grey** (`paper-2`): secondary stock for nav tabs, keyframe tabs, choice chips, the box front, crank arm.
- **Pressed Paper** (`paper-3`): paper shading, the crank plate stroke, the text-link underline at rest.
- **Grey Caption** (`paper-grey`): secondary text on the board: ledes, captions, field labels, footer.
- **Pressed Ash** (`ash`) and **Ash Highlight** (`ash-hi`): ash tabs, seabed silhouette, dashed section rules, scrollbar thumb.
- **Shadow Ink** (`ink`): the deepest cast-shadow tone.
- **Ink Text** (`ink-text`) and **Muted Ink** (`ink-muted`): text on paper; muted ink for terms, ranges, inactive numerals and help copy.

### Tertiary (depth strata)
- **Zone ramp** (`zone-0` to `zone-4`, plus `surface-water` above them): the five ocean strata, stepping from teal-blue to near-black. Used only to paint water by depth: diorama strata, the dive-profile bands, the window ground. Never as UI chrome.

### Named Rules
**The Swallowed Red Rule.** Crimson appears only on what moves, what commits and what fails: active figure parts, the crank knob, the active keyframe numeral, commitment tabs, one headline line, the brand mark, selection and error. Any other crimson is a defect.

**The Depth Means Darker Rule.** Water color is indexed to depth through the zone ramp. Deeper content gets a darker zone, never a lighter or more saturated one.

## Typography

**Display Font:** Big Shoulders Stencil Display, self-hosted as "Shoulders Stencil" (with Shoulders Text, sans-serif)
**Label Font:** Big Shoulders Text, self-hosted as "Shoulders Text" (with sans-serif)
**Body / Readout Font:** Courier Prime (with ui-monospace, monospace)

**Character:** Stencil caps are the painted lettering on the machine. The condensed caps are its stamped labels. Courier Prime is the typed workshop note. All display and label text is uppercase.

### Hierarchy
- **Display** (900, clamp 3.4rem to 6rem, 0.88): the hero headline only, stacked one phrase per line, with a two-layer text shadow so it sits on the board as cut paper. On phones it drops to clamp(2.6rem, 12.5vw, 3.6rem).
- **Headline** (900, clamp 2.6rem to 5.25rem, 0.9): section titles, balanced wrapping; ink variant on the paper sheet.
- **Title** (900, clamp 2.2rem to 3.75rem, 0.95): zone names. Smaller stencil titles (1.7rem readout title, 2.2rem block title, 2rem footer wordmark) follow the same 900 caps.
- **Numeral** (900, 1.6rem, 1): keyframe and part numbers and dive years, in stencil.
- **Label** (800, 1rem, 0.1em, uppercase): every tab. Field labels and quick labels run 0.9rem at 0.12em.
- **Label small** (800, 0.72 to 0.78rem, 0.14em, uppercase): data terms over readouts and facts, depth marks.
- **Body** (400, 1.0625rem, 1.6): running text, max 46 to 52ch.
- **Readout** (700, about 1.05rem, tabular figures): live depth, pressure, temperature and light values, and fact values.

### Named Rules
**The Three Voices Rule.** Stencil speaks headings and numerals, condensed caps label things, typewriter explains and measures. Don't set running text in caps or headings in Courier.

**The Tabular Numbers Rule.** Every number that changes or is compared (readouts, depth marks, ranges, times) uses tabular figures.

## Layout

Full-bleed sections with a fluid side gutter (`gutter`) on an 8px-based spacing scale (`s1` to `s9`) that opens up to 72px and 112px between sections. Sections are two-column asymmetric grids in 5:8, 6:5 or 5:6 ratios; zone rows alternate which side holds the figure. Section heads sit over a 2px dashed ash rule. The top bar is sticky, fading from the board into transparency.

The hero is copy on the left (5fr) and the automaton on the right (8fr): a readout tab spanning the top, the diorama box, and a 152px column of keyframe tabs beside it.

Responsive: below 1180px the nav tabs are dropped and the hero stacks; the briefing CTA stays pinned in the top bar. Below 760px the first viewport goes to the headline then the diorama (headline, automaton, lede, email form in that order), the keyframe tabs become a horizontal scroll-snapped strip, the window goes 4:3, all grids collapse to one column, and the hadal zone and keyframe strip bleed to the screen edge.

## Elevation & Depth

Depth is physical paper stacking under a light from above. Paper elements are lifted with `filter: drop-shadow` stacks so the shadow follows the cut silhouette. Containers that are wells (the window, the hadal zone, fields) are pressed in with inset shadows instead. Figures cast large offset blurred shadows onto the back of the diorama, like a paper theatre.

### Shadow Vocabulary
- **Lift small** (`drop-shadow(0 1px 1px rgb(0 0 0 / .45)) drop-shadow(0 5px 8px rgb(0 0 0 / .32))`): default resting state of tabs, strips and keyframe tabs.
- **Lift** (`drop-shadow(0 2px 1px rgb(0 0 0 / .5)) drop-shadow(0 10px 14px rgb(0 0 0 / .38))`): hover and active state of tabs.
- **Pressed** (`drop-shadow(0 1px 1px rgb(0 0 0 / .5))`): tab during press.
- **Sheet lift** (`drop-shadow(0 3px 2px rgb(0 0 0 / .5)) drop-shadow(0 30px 40px rgb(0 0 0 / .55))`): the pinned briefing sheet.
- **Figure cast** (`drop-shadow(14px -10px 10px rgb(0 0 0 / .55)) drop-shadow(0 3px 2px rgb(0 0 0 / .4))`): zone figures and exploded kit parts.
- **Well** (`inset 0 10px 22px rgb(0 0 0 / .55)`, `inset 0 14px 30px rgb(0 0 0 / .6)`): the diorama window and the hadal zone.
- **Field press** (`inset 0 2px 4px rgb(0 0 0 / .18)`): text fields at rest.

### Named Rules
**The Lift Follows The Cut Rule.** Any clipped paper shape is lifted with a drop-shadow filter on the element and painted by its `::before`. Never put box-shadow on a clip-pathed shape; the clip cuts the shadow away.

**The Hover Lifts Rule.** Hover raises paper (2 to 3px translate plus the larger lift) and press pushes it down (1px, short shadow, 80ms). No color shifts on hover.

## Shapes

There are no rounded corners on paper. Every tab, field, choice and keyframe uses an 8-point notched octagon (7px corner cut, `--notch`); the briefing sheet uses the same notch at 14px. Caption strips and labels use one-sided cuts: strips have a swallowtail notch at the right end, and depth marks and time stamps have a pointed left end, like flags. Each control carries a punched slot mark: a 4 by 16px deep-board slot with 2px radius, inset 10 to 12px from the left edge. Circles appear only on mechanical parts: pins, the crank, the slider pin, numbered part discs, the sheet's push pin. Paper fills multiply a grain texture so every surface reads as stock.

## Components

### Buttons (tabs)
Cut paper you pick up off the board.
- **Shape:** notched octagon (7px), slot mark at left, minimum 44px tall.
- **Default:** pulp paper with ink text, label type.
- **Commitment:** commitment crimson with paper text; big variant 56px tall at 1.15rem for the final submit.
- **Ash:** pressed ash with paper text, for secondary navigation actions (view in crank, play, back to top).
- **Hover / Focus:** lift 2px with the larger shadow; press drops 1px. Focus is a 2px dashed outline at 4px offset, paper on the board and ink on the sheet.
- **Disabled / loading:** 0.6 opacity, progress cursor, inline rotating SVG spinner.

### Chips (choices)
- **Style:** paper-grey notched chip with slot mark, typewriter text, 44px tall.
- **State:** checked inverts to ink with paper text and a pressed-paper slot. Focus draws a dashed ink outline around the chip.

### Cards / Containers
- **Diorama box:** raised board with grain, 14px frame, deep inset window and a paper-grey box front carrying two slot marks, the slider track and the crank.
- **Briefing sheet:** pulp paper, 14px notch, pinned with an ink push pin at top center, sheet lift shadow, padding clamp(32px, 5vw, 72px), max 1100px.
- **Caption strip:** pulp paper with a swallowtail right edge; species name in label caps, Latin name in muted italic.

### Inputs / Fields
- **Style:** notched paper field, 48px minimum, slot mark painted at left, field press inset, crimson caret. On the sheet the field stock is a brighter paper.
- **Focus:** inset 3px ink ring, no outline.
- **Error:** inset 3px commitment-crimson ring, with bold crimson message beneath.

### Navigation
- **Style:** sticky top bar; brand tab (crimson notched mark plus stencil wordmark), paper-grey nav tabs at 0.92rem, crimson briefing tab pushed to the right.
- **Mobile:** nav tabs removed below 1180px; brand and CTA remain.

### Keyframe tabs (signature)
A stack of paper-grey notched tabs, one per ocean zone: stencil numeral, label-caps name, tabular range, and a miniature paper silhouette. Hover slides left 3px. The active tab turns pulp paper, slides out 8px and its numeral turns crimson. On phones they become a horizontal snapping strip and the active tab rises 6px.

### Crank (signature)
A pulp paper disc with a dashed pressed-paper ring, a paper-grey arm and a crimson knob, 132px (104px on phones). Drag or keyboard turns it; grab cursor; it drives every moving part on the page.

### Depth marks
Small pulp-paper flags with a pointed left end, label-small caps, tabular figures; used for stratum depths and dive times.

## Do's and Don'ts

### Do:
- **Do** build every new control as a notched paper tab: `clip-path: var(--notch)` on `::before`, fill with grain multiplied into the stock, slot mark at left, lift with `--lift-sm`.
- **Do** keep text on paper in ink (`ink-text`, `ink-muted`) and text on the board in paper (`paper`, `paper-grey`).
- **Do** drive scene motion from the crank value (manual or autoplay) with the `cubic-bezier(.16, 1, .3, 1)` ease, and collapse every transition under reduced motion.
- **Do** separate sections with 2px dashed ash rules and generous `s8` / `s9` spacing.
- **Do** use tabular figures for every live or compared number.

### Don't:
- **Don't** use crimson outside the Swallowed Red Rule's list.
- **Don't** round the corners of paper; radius is only for pins, discs, slots and the crank.
- **Don't** put box-shadow on a clip-pathed element or shift color on hover; lift it.
- **Don't** add ambient or timer-driven scene animation, glows or glowing particle fields. Marine snow is printed as static paper dots in the middle strata only.
- **Don't** use the zone ramp for UI chrome; it paints water by depth.
