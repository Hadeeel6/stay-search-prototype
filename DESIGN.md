---
name: Stay Search
description: The user's Figma stay-search mock, working; one blue, navy anchors, white cards on cool grey, a live recoloured map.
colors:
  brand-navy: "#0b2a5b"
  brand-deep: "#154a9e"
  brand-hover: "#1a56b8"
  brand-blue: "#2067da"
  brand-200: "#b5cef5"
  brand-100: "#dce8fb"
  brand-50: "#eef4fd"
  on-brand: "#ffffff"
  ink: "#1e1e1e"
  ink-neutral: "#303030"
  ink-muted: "#757575"
  ink-secondary: "#4b5563"
  surface: "#ffffff"
  surface-2: "#f5f5f5"
  neutral-fill: "#e3e3e3"
  page: "#f5f7fa"
  border: "#d9d9d9"
  border-strong: "#757575"
  border-neutral: "#767676"
  positive: "#0e7c3a"
  positive-bg: "#cff7d3"
  positive-ink: "#02542d"
  danger: "#900b09"
  warning-bg: "#fff1c2"
  warning-ink: "#682d03"
  deal-ink: "#b54708"
  deal-bg: "#fef0e6"
  map-land: "#f2efe9"
  map-water: "#a9cbea"
  map-building: "#e2dcd3"
  map-park: "#cfe5c0"
  photo-scrim: "rgba(18,23,38,.72)"
  modal-backdrop: "rgba(11,42,91,.4)"
typography:
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "56px"
    fontWeight: 700
    lineHeight: "62px"
    letterSpacing: "-0.02em"
  display-mobile:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: "40px"
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  headline-mobile:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "28px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  subheading:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.2
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  price:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "28px"
    fontWeight: 700
    lineHeight: "32px"
    letterSpacing: "-0.01em"
    fontFeature: "\"tnum\""
  card-title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: "24px"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.4
    fontFeature: "\"cv11\", \"ss03\""
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.4
  small:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.4
  wordmark:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "30px"
    fontWeight: 700
    lineHeight: "34px"
    letterSpacing: "-0.03em"
  field-label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: "16px"
    letterSpacing: "0.02em"
  map-label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: "16px"
    letterSpacing: "0.06em"
rounded:
  "100": "4px"
  "200": "8px"
  "400": "16px"
  xl: "24px"
  full: "9999px"
spacing:
  "050": "2px"
  "100": "4px"
  "150": "6px"
  "200": "8px"
  "300": "12px"
  "400": "16px"
  "600": "24px"
  "800": "32px"
  "1200": "48px"
components:
  button-primary:
    backgroundColor: "{colors.brand-blue}"
    textColor: "{colors.on-brand}"
    rounded: "{rounded.200}"
    padding: "12px"
  button-primary-hover:
    backgroundColor: "{colors.brand-hover}"
    textColor: "{colors.on-brand}"
  button-primary-active:
    backgroundColor: "{colors.brand-deep}"
  button-neutral:
    backgroundColor: "{colors.neutral-fill}"
    textColor: "{colors.ink}"
    rounded: "{rounded.200}"
    padding: "12px"
  button-subtle:
    backgroundColor: "transparent"
    textColor: "{colors.ink-neutral}"
    rounded: "{rounded.200}"
    padding: "12px"
  button-subtle-hover:
    backgroundColor: "{colors.surface-2}"
  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.brand-deep}"
    rounded: "{rounded.200}"
    padding: "12px"
  button-link-hover:
    backgroundColor: "{colors.brand-50}"
  button-outline:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.brand-deep}"
    rounded: "{rounded.200}"
    padding: "12px"
  tag:
    backgroundColor: "{colors.brand-50}"
    textColor: "{colors.brand-deep}"
    rounded: "{rounded.200}"
    padding: "8px"
  tag-brand:
    backgroundColor: "{colors.brand-blue}"
    textColor: "{colors.on-brand}"
    rounded: "{rounded.200}"
    padding: "8px"
  tag-neutral:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.200}"
    padding: "8px"
  tag-positive:
    backgroundColor: "{colors.positive-bg}"
    textColor: "{colors.positive-ink}"
    rounded: "{rounded.200}"
    padding: "8px"
  tag-deal:
    backgroundColor: "{colors.deal-bg}"
    textColor: "{colors.deal-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.200}"
    padding: "3px 8px"
  tag-toggle:
    backgroundColor: "{colors.brand-50}"
    textColor: "{colors.ink-secondary}"
    rounded: "{rounded.200}"
    padding: "8px"
  tag-toggle-hover:
    backgroundColor: "{colors.brand-100}"
  tag-toggle-selected:
    backgroundColor: "{colors.brand-blue}"
    textColor: "{colors.on-brand}"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.200}"
    padding: "0 16px"
    height: "40px"
  stepper-button:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-neutral}"
    rounded: "{rounded.full}"
    width: "32px"
    height: "32px"
  switch:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.full}"
    width: "40px"
    height: "24px"
  switch-on:
    backgroundColor: "{colors.brand-blue}"
  score-badge:
    backgroundColor: "{colors.brand-navy}"
    textColor: "{colors.on-brand}"
    typography: "{typography.label}"
    rounded: "{rounded.200}"
    padding: "4px 8px"
  hotel-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.400}"
    padding: "16px"
  price-pin:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.brand-navy}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "5px 9px"
  price-pin-selected:
    backgroundColor: "{colors.brand-blue}"
    textColor: "{colors.on-brand}"
  landmark-chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.100}"
    padding: "4px 8px"
  landmark-chip-anchor:
    backgroundColor: "{colors.brand-navy}"
    textColor: "{colors.on-brand}"
  quiz-option:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.400}"
    padding: "20px"
  quiz-option-selected:
    backgroundColor: "{colors.brand-50}"
  product-tab:
    backgroundColor: "transparent"
    textColor: "{colors.ink-secondary}"
    typography: "{typography.body}"
    padding: "12px 16px 14px"
  product-tab-selected:
    textColor: "{colors.brand-deep}"
  option-chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-neutral}"
    typography: "{typography.small}"
    rounded: "{rounded.full}"
    padding: "0 12px"
    height: "32px"
  option-chip-selected:
    backgroundColor: "{colors.brand-50}"
    textColor: "{colors.brand-deep}"
  search-bar:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.full}"
    height: "68px"
  search-bar-active:
    backgroundColor: "{colors.surface-2}"
  search-segment:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "0 24px"
  search-segment-active:
    backgroundColor: "{colors.surface}"
  search-button:
    backgroundColor: "{colors.brand-blue}"
    textColor: "{colors.on-brand}"
    rounded: "{rounded.full}"
    height: "52px"
    width: "52px"
  search-popover:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
  calendar-day:
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: "40px"
  calendar-day-endpoint:
    backgroundColor: "{colors.brand-blue}"
    textColor: "{colors.on-brand}"
  calendar-range-band:
    backgroundColor: "{colors.brand-100}"
    height: "40px"
  price-toggle:
    backgroundColor: "{colors.neutral-fill}"
    textColor: "{colors.ink-secondary}"
    typography: "{typography.small}"
    rounded: "{rounded.full}"
    padding: "3px"
  price-toggle-thumb:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    height: "32px"
  amenity-tile:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-neutral}"
    typography: "{typography.small}"
    rounded: "{rounded.200}"
    padding: "8px 12px"
    height: "44px"
  amenity-tile-selected:
    backgroundColor: "{colors.brand-50}"
    textColor: "{colors.brand-deep}"
  quiz-applied-note:
    backgroundColor: "{colors.brand-50}"
    textColor: "{colors.brand-navy}"
    typography: "{typography.small}"
    rounded: "{rounded.200}"
  modal:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
    width: "760px"
  compare-drawer:
    backgroundColor: "{colors.surface}"
    width: "820px"
  map-mini-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.400}"
    padding: "8px 16px 8px 8px"
    width: "520px"
  compare-tray:
    backgroundColor: "{colors.surface}"
    height: "65px"
  compare-table:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.400}"
  toast:
    backgroundColor: "{colors.brand-navy}"
    textColor: "{colors.on-brand}"
    rounded: "{rounded.200}"
    padding: "12px 16px"
---

# Design System: Stay Search

## Overview

**Creative North Star: "The Figma Mock, Working"**

This system is inherited whole from the user's Figma file (SDS variables plus the Brand, Accent and Map collections) and is recorded as the build shipped it. It is a calm, conventional travel-booking interface: white surfaces sitting on a cool page grey, hairline borders, one saturated blue for everything that acts or is selected, and a deep navy that anchors identity and trust marks. Density is moderate and desktop-first (1440px design width); information is set in a single typeface at a small number of sizes so that prices and scores do the shouting.

The map is a first-class surface, not an illustration: a live MapLibre GL JS map with the OpenFreeMap positron style recoloured to the Figma's Map collection (warm land, soft blue water, sand buildings, pale green parks), with the system's own pins, chips and labels drawn on top. Motion is restrained: 150 to 200ms colour and border transitions, short rises for the dialog and drawer, with the in-place results update bar as the single authored moment. The search form borrows a segmented, full-round search bar pattern (Airbnb-style) and renders it in this system's blue and greys.

Imagery is the Figma's own: all five photos (hero and four stay/area photos) are mock image fills taken from the user's Figma file, recorded with their image hashes and uses in `stay-search/assets/PROVENANCE.md`. They are demonstration images, not photos of real properties; any new photo needs a matching provenance entry there.

**Key Characteristics:**
- Inter only, in four working weights (400, 500, 600, 700) with tabular numerals on every figure.
- One blue for action and selection; navy for the wordmark, score badges, landmark anchor, toast and dark map buttons.
- 8px rectangular controls, 16px cards and panels, 24px dialogs and search popovers, full-round search bar, chips, pins and pills.
- Hairline 1px grey borders define containers; shadows are soft and ambient.
- Green appears only for free cancellation, positive ticks and "best" marks.

## Colors

A single cool-blue brand ramp over neutral greys, with a small set of semantic hues held to specific jobs.

### Primary
- **Action Blue** (brand-blue): primary buttons, the round search button, the product-tab underline, selected toggles, chips, amenity tiles and tags, calendar check-in and check-out marks, checked checkboxes and switches, the selected price pin, walking route and route label, focus outlines, slider thumbs, the update bar. If it is blue and saturated, it can be clicked or it is the current choice.
- **Pressed Blue** (brand-hover) and **Deep Blue** (brand-deep): hover and active of the primary button; Deep Blue is also the text colour of link buttons, tinted tags, match percentages and inline links.
- **Brand Navy** (brand-navy): the wordmark, rating score badges, the anchor landmark chip (Taksim Square), price-pin text and outline, the "Updating" pill, the toast and the full-map "Show list" button.
- **Blue Tints** (brand-200, brand-100, brand-50): brand-50 fills tags, toggles, selected chips and amenity tiles, banners, the quiz-applied note, the current header product and selected quiz options; brand-100 is hover on tints, the calendar range band and the slider track; brand-200 is the hover border on cards, amenity tiles and links-as-cards and the quiz teaser border.

### Tertiary
- **Deal** (deal-ink on deal-bg): the price-drop / deal tag on hotel cards only.
- **Positive** (positive; positive-ink on positive-bg): free cancellation lines, calendar low-price dots, positive tags.
- **Warning** (warning-ink on warning-bg) and **Danger** (danger): warning tags; error text and the error border on inputs.

### Neutral
- **Ink** (ink): primary text. **Ink Neutral** (ink-neutral): subtle-button text. **Ink Secondary** (ink-secondary): supporting copy, ledes, list sub-lines, unselected toggle text. **Ink Muted** (ink-muted): placeholders, "per night" notes, review counts, icon tint.
- **Page** (page): the cool grey behind everything. **Surface** (surface) for cards, panels, header and tray; **Surface 2** (surface-2) for alternate table rows, row headers and subtle hovers; **Neutral Fill** (neutral-fill) for neutral buttons and the price-basis toggle track. While a search segment is open the whole search bar dims to Surface 2 so the active segment lifts out in white.
- **Hairline** (border): every container and divider edge. **Border Strong** (border-strong): unchecked checkbox and switch outlines. **Border Neutral** (border-neutral): neutral button and stepper outlines.
- **Map** (map-land, map-water, map-building, map-park): the recoloured basemap; land is also the map container's loading background.
- **Modal Backdrop** (modal-backdrop): translucent navy behind the quiz dialog and the compare drawer.
- **Photo Scrim** (photo-scrim): the translucent dark plate behind the photo-count badge on hotel card photos, taken verbatim from the Figma Hotel Card component.

**The One Blue Rule.** Action Blue is the only saturated colour that means "act" or "selected". Navy identifies; green confirms; nothing else is clickable-looking.

**The Green Means Kept Rule.** Green is reserved for free cancellation, met conditions and "best" marks. It never decorates.

## Typography

**Display Font:** Inter (with system-ui, sans-serif)
**Body Font:** Inter (with system-ui, sans-serif)

**Character:** One neutral grotesque throughout, tuned with the cv11 and ss03 features; hierarchy comes from size and weight steps, never from a second family.

### Hierarchy
- **Display** (700, 56px/62px, -0.02em): the home hero headline only. **Display Mobile** (36px/40px) is its step under 860px; provisional, since the Figma has no mobile frames.
- **Headline** (700, 36px, 1.2, -0.02em): the question title in the Help me choose dialog. **Headline Mobile** (28px) is its step under 860px; provisional for the same reason.
- **Subheading** (400, 20px, 1.2): the Figma "Subheading" token; the hero subline (16px under 860px). The calendar heading, the empty-results and empty-drawer titles, and compare figures in the drawer use the same size at 600 or 700.
- **Title** (600, 24px, 1.2, -0.02em): section headings, the quiz teaser, the compare drawer heading, no-match heading; 24px/30px 700 for the mini map card price and compare-table figures.
- **Price** (700, 28px/32px, -0.01em, tabular): the total on a hotel card.
- **Card Title** (600, 18px/24px): hotel names on result cards; 16px in the compare drawer and the mini map card.
- **Body** (400, 16px, 1.4): default text, field labels, buttons.
- **Label / Small** (600 or 400, 14px, 1.4): metadata, chips, pins, landmark chips, filter group headings, notes.
- **Wordmark** (700, 30px/34px, -0.03em, navy): header only.
- **Field Label** (600, 12px/16px, 0.02em): the small label above each search-bar segment value, popover section heads and calendar weekday initials.
- **Map Label** (600, 12px/16px, 0.06em, uppercase, white halo): neighbourhood names drawn on the map, following cartographic convention. It is a map label, not a heading device.

**The Tabular Figures Rule.** Every price, score, count, date and pin uses tabular numerals so columns and updates do not jitter.

## Layout

Desktop-first at a 1440px design width. Page chrome (header, trip bar, applied-filters bar, sub-bar, tray) aligns to a 1376px content measure with 32px minimum side padding; home content sits in a 1264px measure and the no-match card at 760px. The results view is a three-column grid: 284px filters, a fluid card list, and a sticky 360 to 400px map column, with 24px gaps. The header is 73px tall; the compare tray is a sticky 65px bar at the bottom. Help me choose opens as a centred dialog up to 760px wide; Compare opens as a right-hand drawer up to 820px wide and full height.

Spacing follows the SDS scale (2, 4, 6, 8, 12, 16, 24, 32, 48). 8px separates controls in a row, 12px separates fields, 16px pads cards and separates cards in a list, 24px pads panels and separates major blocks, 32px pads page edges and large cards.

At 1180px the map column drops and an inline "Show map" control appears; at 860px everything stacks to one column with 16px gutters, the search bar becomes a vertical stack of 60px segments in a 16px-radius box with horizontal dividers, popovers become inline, hotel cards stack their photo above details, and the drawer's compare table scrolls horizontally. Mobile layouts are not in the Figma; these breakpoints are the build's provisional answer.

## Elevation & Depth

Depth is mostly border-led: white surfaces with a 1px hairline on the page grey. Shadows are soft, low-contrast and ambient, taken from the SDS shadow set, and are used to lift floating things (popovers, map overlays, the search panel) rather than to style resting cards. Full values live in the sidecar.

### Shadow Vocabulary
- **Shadow 100**: resting hotel cards, the flight swap button; barely there.
- **Shadow 200**: map overlays (pins, landmark chips, legend, neighbourhood card, overlay switch, map controls), the search bar at rest, the price-toggle thumb, and hover on link cards.
- **Shadow 400**: the hero search panel, toast, the full-map mini card and "Show list" button.
- **Shadow 600**: the Help me choose dialog and the compare drawer, over the navy backdrop.
- **Search-bar lifts** (two values outside the SDS set): the active segment floats on a soft 2px/12px shadow, and the search popovers on an 8px/28px shadow; both live in the sidecar.

**The Selection Ring Rule.** Hover and selection on cards and options are shown by switching the border to Action Blue plus a 1px inset ring of the same blue, never by a heavier shadow.

## Shapes

Three radii and full round. 4px for checkboxes, landmark chips, map controls; 8px for every rectangular control (buttons, inputs, tags, toggles, amenity tiles, score badges, photo crops); 16px for cards, panels, the map frame and compare table; full round for the search bar and its segments, the search button, option chips, the price-basis toggle, calendar day marks, round steppers, price pins, switches, the trip pill and legend. The extra-large radius (xl, 24px) is for the Help me choose dialog and the popovers that drop from the search bar; the quiz styling comes from Figma frames 01d to 01f. The calendar range band ends in 20px rounded caps at week edges. Borders are 1px hairlines; the outline button and price pins use 1.5px. A sponsored card is marked with a 1px dashed ink border.

## Components

### Buttons
- **Shape:** gently curved (8px), 12px padding, 40px tall in the search row; small size pads 7px 8px.
- **Primary:** Action Blue fill, white text; hover Pressed Blue, active Deep Blue.
- **Neutral:** Neutral Fill with a Border Neutral outline. **Subtle:** transparent, Ink Neutral text, Surface 2 on hover. **Link:** transparent, Deep Blue text, brand-50 on hover. **Outline:** white with a 1.5px Action Blue border and Deep Blue text.
- **Focus:** 2px Action Blue outline at 2px offset (global). **Disabled:** 50% opacity.
- **Dark map buttons:** "Show list" on the full map uses Brand Navy at 16px radius with Shadow 400.

### Tags, Chips and Toggles
- **Tag:** brand-50 fill, Deep Blue text, 8px padding, 8px radius, optional 16px remove button. Variants: brand (solid blue), neutral, positive, warning, deal (14px 600).
- **Tag Toggle:** filter chips and guest-rating steps. brand-50 fill, Ink Secondary text; hover brand-100; pressed is solid Action Blue with white text.
- **Option Chip:** the per-product chip row under the tabs (stay type, trip type, cabin). 32px full-round, white with a hairline, Ink Neutral 14px; hover darkens the border; pressed is brand-50 with an Action Blue border and Deep Blue 600 text.
- **Count Badge:** 20px round Action Blue badge with 13px 600 white numerals.

### Inputs and Controls
- **Input / Select:** 40px tall, white, 1px hairline, 8px radius, 16px horizontal padding; hover border darkens; focus and open state switch to Action Blue with a 1px inset ring; error uses Danger.
- **Checkbox:** 16px, 4px radius, Border Strong outline; checked fills Action Blue with a white tick.
- **Switch:** 40 by 24px pill; off is white with a grey knob, on is Action Blue with a white knob sliding 16px.
- **Stepper:** 32px round outlined buttons (white, light grey ring, Ink Neutral icon; hover darkens ring and icon to Ink; disabled 30%) around a tabular 500-weight value.
- **Range slider:** brand-100 track, 16px Action Blue thumbs with a 6px translucent halo on hover and focus.
- **Price-basis toggle:** a sliding segmented pill, "Per night / Total stay". Neutral Fill track with 3px inset, a white full-round thumb on Shadow 200 sliding between the two 32px options in 220ms; the chosen label goes Ink 600. "incl. taxes" sits beside it in Ink Muted (hidden under 860px).

### Search Form (signature)
- **Search panel:** white, 16px radius, Shadow 400, padded 16px top and 24px elsewhere.
- **Product tabs:** Hotels & homes, Flights, Flight + Hotel, Activities, Airport transfer, on a hairline. Ink Secondary text with 8px top corners and Surface 2 on hover; the selected tab turns Deep Blue 600 and a 3px Action Blue underline scales in from the centre (200ms). The header nav buttons switch the same product and mark the current one in brand-50 with Deep Blue text.
- **Chip row:** the product's option chips (stay type, trip type, cabin) between the tabs and the bar.
- **Segmented search bar:** a 68px full-round bar, white with a hairline and Shadow 200, split into segments, each a 12px Field Label over a 16px value (Ink Muted when empty). 1px hairline dividers (inset 18px top and bottom) separate segments and fade away next to a hovered or active segment. Opening a segment dims the bar to Surface 2 and lifts that segment out in white on its soft shadow. Flights carry a 32px round swap button between origin and destination that turns 180 degrees on hover.
- **Search button:** a 52px round Action Blue button at the right end; it widens to reveal the word "Search" on hover and whenever a segment is open.
- **Popovers** (destination, dates, guests, and the flight equivalents): white, 24px radius, no border, soft 8px/28px shadow, dropped 12px below the bar and laid over the page beneath. The search panel never grows to contain them. Under 860px they fall back into the flow.
- **Calendar:** two months side by side, centred under the bar, with a 20px 600 heading summarising the range. Days are 40px circular marks (hover draws a 1.5px Ink ring; past days are struck through at 45%). The range is one continuous brand-100 band: check-in and check-out carry half-bands toward the range, the band takes 20px round caps at week edges, and the endpoints are solid Action Blue circles. Hovering after picking check-in previews the band. A footer above a hairline holds flexibility chips (Exact dates, ±1, ±2, ±3 days), the green "Lower prices" dot legend, Clear and Apply. Dates read without weekdays ("Dec 1 – Dec 5").
- **Guests:** rows separated by hairlines, each a 600 name over a muted note with a round stepper at right; Done sits bottom-right.

### Header and Navigation
- White, 1px bottom hairline, 16px by 32px padding, navy wordmark at left with subtle nav buttons that double as product switches; nav hides below 1180px.
- **Trip pill:** full-round summary of the search, hairline border, blue icons, hover brand-50 with brand-200 border.

### Hotel Card
- White, 16px radius, hairline, Shadow 100, 16px padding, photo then details then a 132px right-aligned price column.
- Navy score badge, green free-cancellation line, deal tag, tabular 28px price with two short one-line captions under it ("per night" and the total, or "for 4 nights" and the nightly rate); under 860px the column becomes a full-width row.
- Hover or linked-to-map: Action Blue border with inset ring (The Selection Ring Rule). Sold out greys the photo. The photo-count badge sits bottom-right on the photo, white 14px 600 tabular text on the Photo Scrim.

### Filter Sidebar
- White 16px-radius panel, 284px wide, groups separated by hairlines, 14px 600 group heads with an optional count badge.
- **Amenity tiles:** a two-column grid of 44px tiles (8px radius, hairline, icon plus 14px label in Ink Neutral). Hover brand-200 border; pressed is brand-50 with an Action Blue border and inset ring, Deep Blue 600 text and a blue icon.
- **Quiz-applied note:** after finishing Help me choose, results show a brand-50 8px-radius strip with a blue sparkle icon, "Filters set from your answers", an Edit answers link and a 32px round dismiss.

### Map Overlays (signature)
- **Price Pin:** full-round white pill, 1.5px navy outline, navy 14px 600 tabular price, Shadow 200; hover scales 1.06; selected fills Action Blue with white text and rises above others.
- **Landmark Chip:** white 4px-radius label, 14px 600, Shadow 200; the anchor landmark is Brand Navy with white text.
- **Route Label:** full-round Action Blue pill with white text over a dotted blue walking route. It is placed beside the selected pin at the nearest of 32 offsets (four rings of eight) that clears other pins, landmark chips and the map edges (and the overlay switch strip at the top); with no clear spot it takes the least-overlapping one. It stacks below the price pins (pins 3, route label 2) so a price is never hidden.
- **Legend, overlay switch and neighbourhood card:** white, full-round or 16px, Shadow 200. The legend carries only the 15-minute walk ring; there are no transit lines on the map.
- **Mini card (full-screen map):** a compact stay card centred at the bottom, up to 520px wide: white, 16px radius, Shadow 400, 8px padding with a 104px square photo, 16px 600 name, rating, cancellation line, a 24px tabular price and a 28px round close button at top right.
- **Scale bar:** none. The user removed it; distances are told in walking minutes on cards and the route label instead.
- **Camera padding:** the results map frames its pins with padding of 40px top and 230px bottom, so pins stay clear of the legend and the neighbourhood (About) card.
- **Basemap labels:** the results map hides every basemap label and shows only the system's own pins, chips and neighbourhood labels; the full-screen map keeps road and water names, set in Ink Muted with a white halo, for orientation.
- Hovering a result card selects its pin and draws the walking route; this link is the system's signature interaction.

### Compare Tray and Compare Drawer
- **Tray:** sticky 65px white bar with a top hairline: "Compare (n of 4)", removable tags for the shortlisted stays and a muted note at left, the primary Compare button at right.
- **Drawer:** Compare opens as a right-hand dialog, full height and up to 820px wide, sliding in 40px over 280ms with Shadow 600 on the navy backdrop. A header (24px Title, muted sub-line, round close) over a hairline, a tools row with the "Show differences only" switch, then the scrolling table.
- **Table:** white, 16px radius, hairline, clipped; a 128px row-header column in Ink Secondary then one column per stay with a 104px photo and 16px name; alternate rows on Surface 2; 14px cells, 20px 700 tabular figures; best values set in 600.

### Help me choose Dialog
- A modal dialog, up to 760px wide, 24px radius, Shadow 600, over the translucent navy backdrop; it rises 12px and scales from 98% in 220ms. Inside: a step count and round close in the top row, a 36px Headline question, option cards, then Back and a primary Next/Show stays. Finishing applies the answers as filters and returns to results with the quiz-applied note. The quiz is offered from a teaser panel on home and never forced.

### Quiz Option Card
- White, 16px radius, hairline, 20px padding, 132px minimum height in the dialog, 44px icon tile, 22px radio at top right.
- Hover: brand-200 border. Selected: brand-50 fill, Action Blue border with inset ring, tile turns brand-100 and blue, radio fills blue.

### Banners, Panels and Toast
- **Panel:** white, hairline, 16px radius, 24px padding. **Banner:** brand-50, 16px radius, navy bold line, copy left and action right; under 860px the copy stacks above the action and the dismiss button is pinned to the top-right corner (12px inset). **Toast:** Brand Navy, white 14px text, 8px radius, Shadow 400, rising 12px into place.

## Do's and Don'ts

### Do:
- **Do** keep Inter as the only family and use tabular numerals on every figure.
- **Do** use Action Blue for every primary action and every selected state, and Brand Navy for identity and trust marks (wordmark, scores, anchor landmark).
- **Do** build containers as white surfaces with a 1px hairline (border) on the page grey, at 8px for controls and 16px for cards.
- **Do** show hover and selection with the blue border plus 1px inset ring.
- **Do** keep transitions to 150 to 200ms colour, border and opacity changes (up to 280ms for the dialog, drawer and sliding thumbs), and honour reduced motion.
- **Do** use full-round shapes for the search bar family (bar, segments, search button, chips, steppers, calendar marks) and 8px for rectangular controls.
- **Do** draw map annotations (pins, chips, labels) in the system's own components over the recoloured basemap.

### Don't:
- **Don't** introduce a second saturated action colour.
- **Don't** use green except for free cancellation, met conditions and "best" marks.
- **Don't** add a second typeface or a display face.
- **Don't** lift resting cards with heavy shadows; Shadow 400 and above is for floating layers only.
