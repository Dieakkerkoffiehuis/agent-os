# Akker Portfolio — Client Dashboard (Demo)

A static, multi-page mockup of the property portfolio client dashboard concept. Plain HTML/CSS/JS,
no build step, no backend — every number on every page is invented demo data so you can click
through all the planned sections and get a feel for the structure before any real design or
engineering work starts.

## What's here

| File | Page |
|---|---|
| `index.html` | Dashboard — portfolio value, KPIs, growth chart, recent insights, property snapshot |
| `properties.html` | All 7 demo properties as cards |
| `property-detail.html` | Single property deep-dive — Overview / Financials / Documents / Maintenance tabs |
| `documents.html` | Document repository grouped by property |
| `financials.html` | Income vs. expenses, bond/equity trend, monthly breakdown table |
| `insights.html` | Performance / Attention / Opportunity insight cards + strategic recommendations |
| `action-centre.html` | Request tiles (valuation, sell, consult, etc.) + a request-tracker table |
| `profile.html` | Client details, portfolio health score, personal dates &amp; notes |
| `assets/styles.css` | All design tokens and component styles — **edit here first** when the visual redesign pass happens |
| `assets/app.js` | Shared interactivity (tab switching, demo tile clicks) |

## Known limitations (by design, for this pass)

- This is the first functional draft, not the final visual design — the look is still close to
  the original mockup. Redesign work should start from the CSS variables at the top of
  `assets/styles.css`.
- `property-detail.html` represents one property (The Oaks, Unit 14B) as a working example —
  every "View details" link on `properties.html` points to it for now rather than to 7 separate
  detail pages.
- Numbers are internally consistent within each page but are illustrative, not derived from a
  real ledger — see the note on `financials.html` explaining the deliberate gap between the
  trailing-12-month averages (shown on the Dashboard) and the current month's snapshot.
- Nothing here is wired to Supabase or any backend. It's a static demo of structure and content.

## Running it locally

No install needed — just open `index.html` in a browser, or serve the folder:

```bash
cd property-portfolio-site
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Publishing to GitHub Pages

1. Create a new GitHub repository and push this folder's contents to it (the contents of
   `property-portfolio-site/`, not a parent folder — `index.html` should sit at the repo root).
2. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**.
3. Pick the branch (usually `main`) and folder `/ (root)`, then **Save**.
4. GitHub will publish at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

```bash
git init
git add .
git commit -m "Akker Portfolio dashboard demo"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```
