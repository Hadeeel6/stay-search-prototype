# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/JS, one page. The user asked for "an html page". The map is a live MapLibre GL JS map (user-confirmed).

## Users

Travelers searching for a place to stay in a city they may not know well (the mock uses Istanbul, 2 adults, 4 nights). Some know where they want to be; others do not know which neighborhood suits them.

## Product Purpose

A redesigned stay-search flow for Agoda, authored by the user in Figma (section "Screens", 14 desktop frames). It takes a traveler from search, through an optional three-question neighborhood quiz, to results with a map, filters, side-by-side comparison, a no-matches state and a full-screen map. This build is a clickable prototype of that flow for usability testing (user-confirmed), so the main paths and states must respond as if real.

## Positioning

Prices shown include taxes and fees; a short quiz suggests neighborhoods instead of leaving the traveler to guess; results update in place rather than reloading.

## Operating Context

Desktop browser, 1440px design width. Participants click through the flow in a moderated or unmoderated test session.

## Capabilities and Constraints

- Screens and states come from the Figma file; frame labels carry heuristic references (H-1, H-2, H-4, I-1) from the user's evaluation.
- All data is demonstration data from the mock (Istanbul stays, prices, ratings). No backend.
- Map: live MapLibre GL JS in the Figma's map slots, with the Figma's pins and controls on top.
- Undecided: mobile layouts (the Figma has desktop frames only).

## Brand Commitments

The Figma mock is the visual authority: its components, tokens, type and copy are reused as drawn. It carries the Agoda wordmark and name as the mock does.

## Evidence on Hand

Figma file "Untitled", section "Screens" (node 35:960). No real inventory, reviews, or pricing; nothing beyond the mock's content may be presented as real.

## Product Principles

1. The total a traveler pays is visible before they have to ask.
2. Changing a search never loses the traveler's place.
3. Help choosing an area is offered, never forced.
4. Every control says what it will do before it is used.
