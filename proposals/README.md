# Wave personalized proposals

`npm run build` renders every JSON file in this directory into `dist/<slug>/index.html`. The shared layout and assets are independent of the homepage. The first proposal is `/blabliblu`.

## Make another proposal

1. Copy `blabliblu.json` to a new brand file.
2. Change the unique lowercase `slug`, brand name, category, copy, goals, campaign quantities and booking URL. All proposal-specific copy lives in the JSON; review every text field for the previous brand name.
3. Run the production build and inspect the resulting page on desktop and mobile.
4. Update the design handoff, commit and push to main.

The shared renderer is `render.mjs`. Proposal styles and interactions live in `assets/` and are deployed at `/proposal-assets/`. Existing Wave fonts, ocean artwork and fictional portrait sheet are reused by URL. Homepage HTML, styles and scripts remain separate. `homepage-proof.html` contains the copied homepage problems and credibility section, inserted directly after the hero in every proposal. Its scoped artwork and scroll reveal are included in the proposal assets. New pages have `noindex, nofollow`; this does not provide access control.

## Populate the viral content bank

Set `playbook.url` to the optional full external playbook URL. Add objects to `playbook.entries`:

```json
{
  "format": "Creator-led review",
  "title": "An approved content reference",
  "description": "Explain the hook, audience insight and what we would test.",
  "url": "https://example.com/approved-reference"
}
```

An empty entries array intentionally shows the approved coming-next space. Replace it with actual selected references before outreach. No references or performance claims have been invented.

## Populate the sample creatives

Each item supports an MP4 with native playback controls, or a poster linking to a hosted creative:

```json
{
  "title": "Approved creative title",
  "description": "A short explanation of the angle.",
  "poster": "/proposal-assets/brand-creative-01.webp",
  "video": "/proposal-assets/brand-creative-01.mp4",
  "captions": "/proposal-assets/brand-creative-01.vtt"
}
```

For an externally hosted creative, omit `video` and supply `url`. Supply descriptive `alt` for linked posters. Place local media directly in `proposals/assets/` and reference `/proposal-assets/<filename>`. HTTPS URLs also work. Add captions for meaningful spoken audio. Videos do not autoplay. An empty creatives array renders three explicitly labelled sample slots, with a horizontal gallery on phones.

## Behavior

- Creator portraits reveal once when the hero network enters view. They are illustrative, not claimed ambassadors.
- Campaign cards use a brief reversible scroll transform; all text remains visible. No pinned multi-screen section.
- Reduced motion uses static content. All primary content and links work without JavaScript.
- Booking links use the brand file's `bookingUrl`, currently Wave's existing Calendly event.
- The mobile action dock appears after the hero and hides at the final booking CTA.
- Core brand tokens: Manrope / DM Sans, blue #1B43F5, lime #CAFF83, green #123D31, neutral #F3F4F0.

### Optional creative strategy

Set `playbook.strategy.audiences` to show a full creative playbook in place of the empty content bank. Each audience has `id`, `label`, `intro`, `desires`, `objections`, and `angles`. Each angle has `title`, `hooks` (three example strings), and an optional `execution` note. The first hook is visible; the rest expand in a native details control. Use the BlaBliBlu configuration as a complete example. Audience names, copy and hooks must be tailored for the next brand. The renderer computes displayed counts from the content. The 70/30 campaign approach is shared strategy copy. The generated stylesheet filename changes with its content to refresh cached browsers.
