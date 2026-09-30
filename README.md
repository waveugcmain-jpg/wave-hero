# wave — UGC ambassador hero

Responsive homepage hero concept for **wave**, an agency that builds and scales UGC ambassador creator networks.

## Local preview

Open `index.html` directly, or serve the repository root with any static web server.

## Production build

The site has no runtime dependencies. Node.js is used only to create a clean,
validated deployment folder.

```bash
npm run build
```

The production output is written to `dist/`. The build copies every required
image and locally hosted webfont, checks that the expected files exist, and
fails if a localhost or file-system URL reaches the production HTML.

## Netlify

Connect this repository to Netlify. The committed `netlify.toml` configures:

- Build command: `npm run build`
- Publish directory: `dist`
- Node.js version: `20`
- Static fallback routing to `index.html`

No environment variables or secrets are required. The booking destination is
an intentional in-page prototype until a production booking URL is supplied.

## Included

- Responsive conversion-focused navigation
- Ocean-wave art direction using the supplied background image
- Animated creator-video ribbon with realistic fictional creator covers
- Dismissible hook-library prompt
- Keyboard focus states and reduced-motion behavior
- Full design and implementation notes in `Design-blueprint.md`

The booking and hook-library actions are prototype destinations until their final URLs are supplied.
