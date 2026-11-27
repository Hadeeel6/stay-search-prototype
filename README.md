# Stay search prototype

> **This is a usability study for Agoda, nothing more.**
> It is a clickable design prototype made to test a redesigned stay-search flow with participants. It is not the Agoda website or app, it is not an official Agoda product, and it cannot search or book real stays. Every hotel, price, rating and count in it is sample data. The Agoda name and logo belong to their owner and appear only because the study redesigns their product.

A clickable prototype of a redesigned Agoda stay-search flow, built from the "Screens" section of a Figma file. There is no backend.

## Try it

**Live prototype: https://hadeeel6.github.io/stay-search-prototype/**

Use a desktop browser for the full layout. The page carries a "Usability study · not the real Agoda" label next to the logo. GitHub Pages serves it from the `gh-pages` branch, which holds a copy of the `stay-search` folder. To publish changes, push `main`, then update that branch:

```bash
git push origin `git subtree split --prefix stay-search main`:refs/heads/gh-pages --force
```

## Run it locally

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

## About this study

This prototype exists only for usability testing of the stay-search experience. Nothing here is a real offer, and no data is collected: the page runs entirely in the browser and only reaches the internet to load the map (the MapLibre library and its map tiles).
