# Wave Production Tracker

Open https://waveugc.in/tracker1 to reach the live password-protected tracker. The shared team password permits viewing and editing. Changes save to the existing online D1 database and persist across refreshes.

The complete source is in source/. Production password and signing secrets live only in the hosting settings and are excluded from GitHub. The GitHub seed is an empty campaign; live actuals, notes, file URLs and history are not uploaded. Run npm ci then npm test in source/ using Node 22.13 or later. A new Sites deployment needs its own project registration, D1 migrations and TRACKER_PASSWORD / TRACKER_SESSION_SECRET runtime secrets. hosting.example.json contains a non-secret binding template.
