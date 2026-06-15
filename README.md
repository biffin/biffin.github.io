# Biffin Francis — Portfolio

A simple, static portfolio site. No framework, no build step, no dependencies.
Just open the HTML files or push them to any static host.

## Files

| File                  | What it is                                                  |
|-----------------------|-------------------------------------------------------------|
| `index.html`          | Home — hero, about, experience, education, contact          |
| `work.html`           | Selected work — project card grid + downloadable deck       |
| `project-credi8.html` | Case study: Credi8                                          |
| `project-sunlife.html`| Case study: Sunlife                                         |
| `project-monash.html` | Case study: Monash “Get Started”                            |
| `styles.css`          | **All** styling and design tokens (single source of truth)  |
| `main.js`             | Injects the shared nav + footer into every page             |
| `projects.js`         | The project list that builds the Work-page card grid        |
| `files/`              | Downloadable assets (the portfolio deck PPTX)               |

## How to edit (and keep it simple)

- **Change colours/fonts/spacing:** edit the `:root` block at the top of `styles.css`. Tokens come straight from the ElevenLabs design system.
- **Change the nav, logo, or footer:** edit `main.js` — the `NAV_LINKS` and `SITE` objects near the top. You edit it **once** and it updates on every page (this is what keeps the site from drifting as it grows).
- **Edit page content:** just edit the relevant `.html` file — the content lives in plain, readable HTML.

## ➕ Add a new project (the important workflow)

The Work page is built to grow. To add a project:

1. **Duplicate** one of the `project-*.html` files (e.g. copy `project-credi8.html` to `project-yourname.html`) and rewrite the case-study content.
2. **Add one entry** to the `PROJECTS` array in `projects.js` — set `slug` to your new file name, plus the title/meta/summary. The card grid on `work.html` updates automatically.

That's it — you never touch `work.html` to add projects. Each case study uses these building blocks (already in `styles.css`):
`.case-overview` (the Role/Timeline/Scope/Tools card), `.case-block` (a titled section), `.case-figure` (a bordered screenshot with caption — put images in `images/`), `.case-figure-grid` (two screenshots side by side), `.img-ph` (a labeled placeholder until you have screenshots), and `.stat-grid` (the impact numbers).

## ⚠️ Fill these in

- **Portfolio URL** — `SITE.portfolio` in `main.js` is still a `#` placeholder. It isn't used anywhere yet, so set it (and reference it) only if you want to surface a separate portfolio link. (LinkedIn is already set.)

## Preview locally

Just double-click `index.html`, or for a proper local server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Publish to GitHub Pages

1. Create a new GitHub repo and push these files to the `main` branch.
2. In the repo: **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Set branch to **`main`** and folder to **`/ (root)`**, then **Save**.
5. Your site goes live at `https://<your-username>.github.io/<repo-name>/` in a minute or two.

> Tip: name the repo `<your-username>.github.io` to serve it at the root domain `https://<your-username>.github.io/`.
