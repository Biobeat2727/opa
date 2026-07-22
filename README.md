# OPA! Greek Food — website

Marketing site + online ordering + "find the truck" location posts for the OPA! Greek Food truck (Ponderay, ID).

**Stack:** Next.js (App Router, TypeScript, Tailwind v4) · Sanity CMS (embedded Studio at `/studio`) · SpotOn online ordering (embedded at `/order`) · deploys to Vercel.

## Pages

| Route | What it is |
|---|---|
| `/` | Single-page landing: hero, live location banner, menu, find-the-truck (map + posts), contact |
| `/order` | SpotOn online ordering embedded in an iframe, with an "open in new tab" fallback |
| `/studio` | Sanity Studio — where the owner posts truck locations (requires Sanity setup below) |

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
```

Until Sanity is connected, the site shows clearly-labeled **sample location data** so everything is reviewable.

## One-time Sanity setup

1. Create a free account at [sanity.io](https://www.sanity.io), then create a new project (any name, e.g. "OPA Greek Food") with a `production` dataset. You can also run `npx sanity init` and follow the prompts.
2. Copy the **project ID** from [manage.sanity.io](https://manage.sanity.io) into `.env.local`:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=<your project id>
   NEXT_PUBLIC_SANITY_DATASET=production
   ```
3. In manage.sanity.io → your project → **API → CORS origins**, add:
   - `http://localhost:3000` (allow credentials)
   - your production URL, e.g. `https://opagreekfood.com` (allow credentials)
4. Restart the dev server, open `http://localhost:3000/studio`, and log in. Under **Truck location**, create the first post. Invite the owner as a project member (manage.sanity.io → Members) so she can log in with her own email.

The free Sanity plan is more than enough for this use case.

## Deploying to Vercel

1. Push this repo to GitHub.
2. In Vercel, **Import Project**, accept the Next.js defaults.
3. Add the two `NEXT_PUBLIC_SANITY_*` environment variables.
4. After the first deploy, add the production URL to Sanity CORS origins (step 3 above).

The home page uses ISR (`revalidate = 60`), so a new location post shows up on the live site within a minute of publishing — no redeploy needed.

## How the owner posts a location update

Share these steps with the client:

1. Go to `yoursite.com/studio` on a phone or computer and log in.
2. Click **Truck location** → the ➕ (new document).
3. Fill in: where the truck is, the address, first/last day, hours, and an optional note.
4. Click **Publish**. The site banner and map update within a minute.

Old posts don't need to be deleted — the site figures out the current spot from the dates. (The map and "here now" banner come from the post whose date range includes today; posts with a future start date show under "Coming up".)

## SpotOn ordering notes

- The embed URL lives in [src/lib/site.ts](src/lib/site.ts) (`SITE.orderUrl`).
- SpotOn currently allows iframe embedding (no `X-Frame-Options` / `frame-ancestors`). If they ever start blocking it, `/order` has a built-in "open in a new tab" fallback link in the header, and you could switch the Order buttons to link straight to `SITE.orderUrl`.
- Menu prices are intentionally not on the site — the ordering page is the source of truth.

## Assets

- `assets/opa-logo.pdf` — original vector logo. `public/opa-logo.png` (web) and `src/app/icon.png` (favicon) were rendered from it.
- Brand colors and type are defined in [src/app/globals.css](src/app/globals.css) (`@theme` block): night `#18130c`, gold `#ffc907`, cream `#f2e9d5`; Anton (display), Oswald (labels), Figtree (body).
