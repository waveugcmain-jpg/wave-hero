# Wave — UGC ambassador agency

Responsive static website for Wave, an agency that builds and scales dedicated creator accounts. HTML, CSS and browser JavaScript; no backend, runtime dependencies, Netlify functions or provider-specific client code.

## Build and preview

Use Node.js 22 (specified in `.node-version`).

```bash
npm run build
```

The build creates a clean `dist/`, copies the website, creator modules, images, local fonts and `_headers`, validates required assets and rejects development-only URLs. Serve `dist/` with any static web server to preview the production output. `dist/` is generated and should not be committed.

## Existing Cloudflare Workers project — GitHub deployment

The Cloudflare deployment logs identify a Workers project named `wave-website` using `npx wrangler deploy`. This repository now includes `wrangler.json` for that project, explicitly setting the static asset directory to `./dist`. This prevents Wrangler's automatic setup from selecting the repository root and uploading `node_modules` or development files.

For this existing project, use:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Root directory | Repository root (leave blank) |

Wrangler reads the committed configuration; no Worker script is required. It uploads only the built static website, applies `dist/_headers`, and uses the configured single-page fallback for unmatched navigation. No account IDs or tokens are committed; Cloudflare's Git integration supplies deployment credentials. If the project is renamed, update `name` in `wrangler.json` to match.

Official reference: [Workers static assets configuration](https://developers.cloudflare.com/workers/static-assets/).

## Alternative: Cloudflare Pages — GitHub deployment

Create a **Pages** project with Git integration and connect `waveugcmain-jpg/wave-hero`. Use these settings:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Framework preset | `None` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | Repository root (leave blank) |

Pages needs no environment variables, secrets, Functions or additional packages. The root `wrangler.json` configures the separate Workers deployment path; for Pages use the build settings above and do not add a `wrangler deploy` command. `.node-version` selects Node 22; remove any old `NODE_VERSION=20` dashboard override. With Git integration enabled, subsequent pushes to `main` trigger production builds.

Deploy and check the assigned `*.pages.dev` URL first. Then add `waveugc.in` through the Pages project's **Custom domains** settings and follow Cloudflare's DNS instructions. Repository changes do not switch DNS or disconnect the previous hosting provider.

### Routing, headers and caching

- `_headers` is copied to `dist/` and supplies the existing security headers in Cloudflare's supported format.
- No top-level `404.html` or catch-all `_redirects` is generated. Pages serves files normally and provides its built-in `index.html` fallback for unmatched paths. In-page `#campaign`, `#creator-network` and booking anchors remain browser navigation.
- Pages' default ETag/revalidation caching is retained. Unversioned images, CSS and JavaScript no longer receive a year-long immutable browser cache, so later design edits can reach returning visitors.
- The old `netlify.toml` has been removed. The site does not require Netlify to build or run.

Official references: [build settings](https://developers.cloudflare.com/pages/configuration/build-configuration/), [static routing and caching](https://developers.cloudflare.com/pages/configuration/serving-pages/), [custom headers](https://developers.cloudflare.com/pages/configuration/headers/), [custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/).

## Booking and motion

Booking buttons open the dark Calendly section for `https://calendly.com/founder-waveugc/new-meeting`; a direct link remains available if the external embed cannot load.

The 45-day campaign is driven by scroll position: six cards move outward from the central headline on tall desktop screens, retracing their positions on upward scroll. Mobile and shorter screens use individual card reveals. The creator network has its own scroll reveal and hover/tap interactions. These explicitly requested scroll effects remain active under reduced-motion settings; they do not advance on a timer.

See `DESIGN.md` for the current design handoff and implementation history. Generated creator portraits and sample identities are illustrative, not testimonials.
