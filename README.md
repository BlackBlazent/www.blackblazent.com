# BlackBlazent

Monorepo for the BlackBlazent website and its product sites.

```
.                         BlackBlazent website (blackblazent.vercel.app)
apps/blackmusic           BlackMusic product site (blackmusic.vercel.app)
packages/core             Shared config, content, components and styles
tools/banners             Banner generator (Python + Playwright)
```

Products open inside the BlackBlazent site at `/blackmusic` and `/vineward`, with the product's own address (blackmusic.vercel.app, vineward.vercel.app) shown on the page. Vineward is a collaborative project, so its page also has an Official website button to https://vineward.vercel.app/.

## Commands

```
pnpm install
pnpm dev                  main site
pnpm dev:blackmusic       BlackMusic site
pnpm build:all            build both
```

Deploy each app as its own Vercel project. Root directory `.` for the main site and `apps/blackmusic` for BlackMusic. Both ship a `vercel.json` with the single page rewrite.

## Configuration

All in `packages/core/src/config`.

| File | Controls |
| --- | --- |
| `products.config.ts` | `PRODUCT_ENABLED` switches a product on or off everywhere. `PRODUCT_SITE_URL` sets each product address. `PRODUCT_HOSTING` is `'monorepo'` (opens inside this site) or `'external'` (redirects to the product address). |
| `distribution.config.ts` | Per product, per store availability and URL. Set `available: true` and add `url` to open a store. `UNAVAILABLE_STORE_DISPLAY` chooses hidden or disabled. |
| `site.config.ts` | Main site URL, contact emails, legal effective date, governing law. Set `VITE_MAIN_SITE_URL` when the custom domain goes live. |

Product content is in `packages/core/src/content/products.ts`. Legal documents are in `content/legal`. To add Vineward documents, write them in the same shape and add a `vineward` entry to `PRODUCT_LEGAL`. They then appear at `/vineward/privacy` and `/vineward/terms`.

BlackMusic media: add the demo video and up to eight screenshots to `media` in `products.ts`. Put image files in `apps/blackmusic/public/media`. Empty media sections stay hidden.

## Banners

`python3 tools/banners/generate.py` renders every banner from `tools/banners/template.html`. Output goes to `packages/core/src/assets/banners`. Replace any file with custom artwork of the same name, image or video, and the site picks it up.

## Routing

Main site: `/home`, `/products`, `/solutions`, `/research`, `/engineering`, `/resources`, `/about`, `/company/:slug`, `/legal/privacy`, `/legal/terms`. Product routes: `/blackmusic`, `/blackmusic/privacy`, `/blackmusic/terms`, `/blackmusic/delete-account`, `/vineward`.
BlackMusic site: `/`, `/privacy`, `/terms`, `/delete-account`.

## 3.1.0

- **Hero**: configurable image/video rotation (`src/config/hero.config.ts`), ambient light that follows the current background, and a logo-geometry orbital system built in SVG (`src/config/orbit.config.ts`, `src/hero/`).
- **Headings**: outlined, typed section headings (`OutlineHeading`, `src/config/headings.config.ts`). Eyebrow labels removed from section headers.
- **Products and Solutions**: nine categories, each with an honest stage label (`src/config/categories.config.ts`, `SOLUTION_AREAS`).
- **Footer**: faith line, GitHub, and the Black Corp: Intelligence banner (`src/config/footer.config.ts`). Set `VITE_BLACK_CORP_URL`.
- **Vineward**: full product page, Privacy Policy and Terms (draft, with pending-confirmation notes, `VINEWARD_LEGAL`), new artwork, and a dedicated `apps/vineward` site (`pnpm dev:vineward`, `pnpm build:vineward`).
- **Legal pages**: mobile overflow fixed; tables become stacked cards on small screens.
- Artwork generators: `tools/art/` (Playwright + Pillow).

### Adding hero media or orbit videos
Put files in `public/media/hero/` or `public/media/orbit/`, then add an item in the matching config file. Each config has instructions at the top.
