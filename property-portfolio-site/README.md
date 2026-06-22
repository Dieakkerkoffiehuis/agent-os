# Akker Portfolio — Client Dashboard Mockup

A static, multi-page demo of the property portfolio client dashboard. No backend, no build step — plain HTML/CSS/JS, deployable as-is to GitHub Pages or Cloudflare Pages. All data is invented for preview purposes.

## Files

| File | Purpose |
|---|---|
| `index.html` | Dashboard — portfolio KPIs, growth chart, recent insights, sample properties |
| `properties.html` | All 7 properties as cards |
| `property-detail.html` | Single representative property detail page (The Oaks, Unit 14B) with Overview / Financials / Documents / Maintenance tabs |
| `documents.html` | All contracts/records grouped by property |
| `financials.html` | Income vs. expenses chart, bond reduction chart, current-month breakdown table |
| `insights.html` | Advisor insights (Performance / Attention / Opportunity) and strategic recommendations |
| `action-centre.html` | Client request tiles + request history table |
| `profile.html` | Client overview, portfolio health score, and personal/important-dates notes (advisor-only) |
| `assets/styles.css` | Shared design tokens and component styles for every page |
| `assets/app.js` | Shared interactivity (tabs, chart range toggle, request-tile demo clicks) |

## Known limitations (by design, for this pass)

- Visual design is intentionally close to the original mockup — a redesign pass should start by editing the CSS variables at the top of `assets/styles.css`.
- `property-detail.html` represents one property only, not all 7 — the rest link here as a stand-in.
- Financial figures are internally consistent within each page but illustrative. The dashboard's trailing-12-month averages and the financials page's current-month totals differ on purpose (one vacant unit) — this is explained in a note on `financials.html`.
- Nothing is wired to a real backend. Buttons on `action-centre.html` show a demo alert.

## Running it locally

```
python3 -m http.server 8000
```
Then open `http://localhost:8000`.

## Deploying

**Important:** every file in this folder — including the `assets/` subfolder — must be uploaded. If you upload `.html` files one at a time through GitHub's web UI, it's easy to skip `assets/styles.css` and `assets/app.js`, which makes every page render unstyled.

The most reliable way to avoid that: on your repo's GitHub page, click **Add file → Upload files**, then drag the *entire* `property-portfolio-site` folder (or all its files and the `assets` folder together) into the upload box in one go. GitHub preserves the folder structure, so `assets/styles.css` and `assets/app.js` end up in the right place automatically. Commit, and your Pages/Cloudflare Pages deployment will pick it up on the next build.
