---
version: 1
slug: "stay-search-index-html"
primary_target: "stay-search/index.html"
related_targets: []
---

# Surface: stay-search prototype (stay-search/index.html)

Scope: one static page holding the whole search flow from the user's Figma section "Screens" (14 frames). Mode: Operate. Build path: code-led. Audience: usability-test participants on desktop; job: find and shortlist a stay in Istanbul. Constraints: Figma is the visual authority; map is live MapLibre GL JS; demo data only. Unresolved: mobile layouts are not in the Figma.

## Direction contract

THESIS: the Figma mock, working. Every state the frames show is reachable by using the controls, not by switching pictures. Refuses the usual prototype shortcut of linked screenshots.

OWN-WORLD: inherited whole from the Figma. Inter throughout; white surfaces on a cool page grey (#f5f7fa); one blue (#2067da) for primary actions and selection, navy (#0b2a5b) for the wordmark, score badges and the landmark chip; 8px controls, 16px cards, hairline #d9d9d9 borders; tinted blue tags; green only for cancellation and "best" marks.

STORY: the participant searches, optionally answers three questions to get an area, sees results beside a real map, narrows them without losing place, compares a shortlist.

FIRST VIEWPORT: Figma frame 01. Header 73px; photo hero with the 56px headline left at x=120; white search panel 1200 wide holding stay-type toggles, three fields and the "Search stays" button at the right end of the field row.

FORM: pinned by the user's Figma. seed: none (pinned) "use the figma mock up and to take the compenents used there and to keep using the same design system".

Signature interaction: hovering a result card selects its price pin on the live map and draws the walking route to Taksim Square. Motion grammar: 150 to 200ms state transitions only; the in-place update bar is the one authored moment.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
