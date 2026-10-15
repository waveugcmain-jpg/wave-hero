# Wave Production Tracker

Website entry: https://waveugc.in/tracker1

This path redirects to the existing private production tracker at https://wave-linkrunner-production.founder83.chatgpt.site/. Sign-in, shared actuals and undo history remain on ChatGPT Sites. The main website build copies only the entry page and redirect rules. Tracker source is not served as a public website asset.

## Source

The complete application source is in source/. It contains the calendar, per-video production board, dependency engine, authenticated API routes, D1 snapshot storage and 24 tests. Run npm ci and npm test inside source/ with Node 22.13 or later. A new Sites deployment needs its own registered project ID and runtime storage/auth configuration; hosting.example.json contains the non-secret binding template. Copy it to .openai/hosting.json and register a new Site through Sites before deployment.

The GitHub copy starts with an empty campaign. Live campaign actuals, notes, URLs, metrics, history, credentials and local runtime state are excluded. GitHub updates do not alter the existing tracker database. The preserved auth helper expects the trusted Sites gateway; do not expose it as an unprotected standalone server.

Snapshot of tracker source commit bf8d2ed0e840c1c3d48e7c18e0ce50cf97959e92, with an empty seed and no Sites project identity.
