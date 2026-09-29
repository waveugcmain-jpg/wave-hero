# Wave website design handoff

This document is the visual and implementation source of truth for agents working on the Wave website. Read it before making design or interaction changes.

## Product and audience

Wave builds always-on UGC ambassador programs for consumer brands. A network of trained creators posts about a brand daily, Wave tests hooks, messages, and formats, then scales the creative directions that earn organic distribution.

The site should feel confident, contemporary, energetic, and credible. Avoid generic agency language, decorative clutter, fake performance claims, invented testimonials, and unrelated technology imagery.

## Visual direction

- Core palette: electric blue `#1B43F5`, lime `#CAFF83`, white `#FFFFFF`, deep green `#123D31`, and pale neutral `#F3F4F0`.
- Type: Manrope for display headings and DM Sans for body, labels, and controls. Do not introduce another typeface without an explicit redesign decision.
- Display typography uses tight tracking and controlled line lengths. Keep headings bold and direct; supporting text should be smaller, readable, and concise.
- Use large rounded surfaces, calm spacing, restrained borders, and high contrast. Each card may have a distinct composition, but all cards must use the same typography and spacing logic.
- Imagery should demonstrate creators, video, distribution, or campaign experience. Do not add generic 3D icons, rainbow gradients, stock dashboards, or decorative art that does not explain the offer.

## Page structure

### Hero

- Ocean-wave background with a blue readability overlay.
- Primary message: “Make your brand go viral with UGC ambassador programs.”
- Primary CTA is “Book a strategy call”; the current destination is intentionally a prototype until a booking URL is supplied.
- The creator media uses a continuously revolving 3D orbit. Cards move around a curved path, face forward near the centre, rotate and recede at the edges, and loop without stopping.
- There is deliberately no play/pause control. Keep the motion smooth and continuous.
- Current cards use the creator grid as visual placeholders. When real video arrives, preserve the card dimensions and orbit; use muted, `playsinline` video with poster images and careful visibility-based loading.
- The hook-library popup appears immediately on every page refresh, is dismissible for the current view, and returns after refresh. It contains “View hook library” and “Or book a call.”

### Why Wave

- The problem statement changes progressively from grey to black as the user scrolls down and reverses as they scroll upward.
- Do not replace this with a one-time entrance animation. The color state must remain tied to scroll position.
- The four proof cards use an asymmetric editorial composition:
  - Creator network: tall deep-green card, oversized `500+`, creator portraits.
  - Experience: white card with circular official brand marks.
  - Goal: compact lime card with a target motif.
  - Distribution: tall blue card with a creator-post network diagram.
- Claims about brand experience refer to the founding team’s previous work. Keep that wording precise.

## Responsive behavior

- Desktop navigation shows all links and a persistent booking CTA.
- Below `980px`, navigation becomes an accessible expandable menu.
- Hero copy, orbit radius, card dimensions, and spacing scale down together.
- Proof cards become two columns on tablet and one column on mobile.
- Check for accidental horizontal overflow at every breakpoint.
- Maintain at least 44px touch targets and visible keyboard focus.

## Accessibility

- Maintain WCAG AA contrast for functional text.
- Keep the skip link, semantic headings, labelled navigation, dialog focus behavior, and descriptive alt text.
- Do not place important text inside generated images.
- The continuous orbit is a deliberate brand requirement. Avoid adding additional simultaneous motion elsewhere.

## Assets and provenance

- `wave-background.png`: hero background.
- `creator-grid.png`: current creator imagery and portrait source.
- `brand-logo-sources.json`: URLs for the official brand marks embedded in the experience card.
- Brand logos are embedded in `index.html` as data URLs so the static page stays self-contained and avoids third-party loading failures.

## Code organization

- The production page is the repository-root `index.html`.
- The site is intentionally buildless: HTML, CSS, and JavaScript are kept in one file.
- `dist/index.html` is a local preview/Sites copy and may not exist in the GitHub branch. Update it locally when the preview workflow uses it, but treat root `index.html` as the GitHub source of truth.
- Keep dependencies at zero unless a future feature clearly requires a framework or library.

## Change workflow

1. Read this file and inspect the current page before editing.
2. Preserve the established palette, type, interaction model, and responsive behavior.
3. Test desktop and mobile layouts, JavaScript syntax, overflow, popup behavior, and the relevant animation.
4. Commit focused changes with a descriptive message.
5. Push to `origin/main` after every completed change. Do not leave finished work only in a local commit.
6. If GitHub authentication or permissions block a push, report the exact blocker and keep the commit ready to publish.

## Known placeholders

- Booking URL is not connected.
- Hook-library URL/content is not connected.
- Hero media uses creator-image placeholders rather than real videos.
- Remaining navigation destinations will be connected as later sections are designed.


## Our playbook

Six numbered cards form a vertical ordered stack. Alternate white copy panels left/right on desktop; mobile always puts copy first. Use six distinct environments: pale ocean blue, sage with fine arcs, electric blue, pale neutral with a subtle dot grid, periwinkle with arcs, and deep green ocean. Photography is reserved for the opening and final cards. Illustration panels are solid white, never translucent grey. Selectively emphasize meaningful heading phrases in blue or dark green. Maintain Manrope headings and DM Sans 15px body copy. All six cards now contain original inline SVG illustrations: research/playbook, creator network, hook testing, winning-pattern chart, creative remixes/paid handoff, and compounding distribution. Use the established blue, lime and deep green palette, rounded white surfaces and DM Sans labels. Charts are conceptual, with no fabricated performance figures. Keep SVGs responsive and provide descriptive accessible labels. Section subtext awaits approved copy. Both nav and hero playbook links lead to #our-playbook.

### Playbook motion
Each illustration has a seven-second explanatory SVG/CSS loop: research selection, connecting creators, staggered posts, tracing a winning signal, multiplying creative and building distribution. Connection paths flow continuously. IntersectionObserver suspends offscreen loops. Respect prefers-reduced-motion with fully visible static artwork. These are native vector animations, not embedded video files. Keep text labels steady and avoid animating entire panels.
