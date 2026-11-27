# Stay search prototype

A clickable prototype of a redesigned Agoda stay-search flow, built from the "Screens" section of a Figma file. It is a usability-testing prototype: all stays, prices and counts are sample data, and there is no backend.

## Run it

Serve the `stay-search` folder with any static server, then open it in a browser:

```bash
python3 -m http.server 4173 --directory stay-search
```

Open http://localhost:4173/index.html. The map needs an internet connection (MapLibre GL JS and OpenFreeMap tiles load from the web).

## What's in it

- Search with product tabs (Hotels & homes, Flights, Flight + Hotel, Activities, Airport transfer). Only Hotels & homes runs a search.
- "Help me choose" quiz in a popup that sets filters on the results.
- Results with filters, amenities, a per-night / total price switch, a live MapLibre map and a compare side panel.
- No-matches state with suggested fixes, and a full-screen map.

## Files

- `stay-search/`: the page (`index.html`, `styles.css`, `app.js`) and its assets. Image sources are listed in `stay-search/assets/PROVENANCE.md`.
- `PRODUCT.md`: who it's for and what it must do.
- `DESIGN.md` and `.impeccable/design.json`: the design system the page follows.

The Agoda name and logo come from the Figma mock. Keep this repository private.
