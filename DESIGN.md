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

### Always-on animation correction
User explicitly requested always-on loops after motion was not visible. Playbook animation now runs continuously in four-second cycles, with stronger translations/scaling, and overrides the global reduced-motion animation reset for these illustrations only. No visibility observer gate. Cards 3 and 4 use user-supplied wave-card-3.jpg and wave-card-4.jpg. Keep images in root and dist.

### Cards 3 and 4 photo integration
Treat the supplied photography as directional atmosphere rather than flat wallpaper. Card 3 blends the dark breaking wave into electric blue from the right. Card 4 blends the pastel wave into a warm peach field from the left. Desktop uses horizontal CSS masks and layered radial gradients; mobile switches to vertical masks so the crop survives the stacked layout. Text and illustrations remain on solid white surfaces above the imagery.


## 45-day campaign deliverables
Added after Our Playbook, linked from For brands. Six semantic list items use the approved campaign copy. Desktop (1100px+ wide, 740px+ high) uses a 250svh scroll area with a sticky viewport-height stage. Cards emerge from behind the central headline in staggered order, scaling and unrotating into two surrounding columns of three. Scroll position directly controls progress and reverses the reveal. Transforms and opacity only; no scroll interception or animation dependency. Cards finish by 80% progress, leaving reading time. Smaller/shorter screens use an unpinned two-column or mobile single-column layout; reduced motion and no-JS show all deliverables immediately. Existing Manrope/DM Sans, blue/lime/green tokens retained. No additional image assets or fabricated results.


## Scroll pacing and stacked playbook
The CPM statement now pins with its supporting copy for 105svh of reading distance. It starts revealing only when it reaches the reading position (13vh, clamped 24–120px), and reverses with scrolling. No wheel or touch interception. If the full text cannot fit in the viewport, a non-pinned reveal is used. Reduced motion shows the complete statement. The six playbook cards use native position:sticky with ascending z-index, staggered 12px desktop / 8px mobile top edges, and a subtle 1.8% scale-back as the following card arrives. Tall cards pin only after their bottom can be read. The containing list releases the deck together, with space to read card six. Reduced motion uses the ordinary list. Resize and font loading recompute the geometry. No new illustrations have been installed.

### Explicit scroll-animation correction
User reported campaign animation not working and explicitly requested all three scroll effects. These user-controlled scroll effects now remain enabled even when the OS reports reduced motion, matching the requested behavior; no autonomous motion was added. Campaign orbit reveal now starts at 800px width / 700px height. Smaller viewports get individual scroll-linked card reveals instead of a silent static fallback. This supersedes the reduced-motion notes above for these three effects only.


## Strategy-call offer and conversion audit
New #strategy-call section follows campaign deliverables. Uses the user-supplied four-step offer copy and two Book a call CTAs. Step nodes connect through responsive SVG arrows, with three particles travelling from 01 to 04 on a 6.5-second loop. Horizontal on desktop, vertical below 1100px. Pause control, offscreen/hidden-tab suspension, ResizeObserver geometry. CTA after introduction and after take-home reassurance; a mobile booking dock appears below the hero and hides near the offer, popup, or booking dialog. Booking remains an explicit placeholder at user request; one BOOKING_URL constant controls every .book button when provided. Existing page copy is unchanged per user instruction. Non-copy audit fixes: high-contrast dual focus rings, 44px mobile nav controls, anchored mobile menu dismissal. No testimonials, outcomes, deadlines or pricing invented.

## High-attention offer and founder statement
The offer now creates a strong cobalt visual reset after the white campaign section. Lime is reserved for the emphasized promise, CTA, active nodes and animated route particles; white, pale blue, lime and deep green cards maintain readable contrast while making the four steps visually distinct. The existing offer copy and animation behavior remain unchanged.

A new founder callout follows the offer. It uses the supplied belief statement over the existing `wave-background.png`, treated with a deep green-blue photographic filter and a restrained halftone texture inspired by the provided reference. The statement remains the dominant element; no founder names, portraits, testimonials or performance claims were invented. Desktop uses a wide editorial composition, while mobile shifts the crop and darkens the lower field to protect readability.

## Offer and founder redesign — 2026-09-30

Supersedes the high-attention offer treatment above. User requested design changes only: all HTML copy and JavaScript remain byte-for-byte unchanged. The offer now uses warm white #F5F5F0, ink #182321, secondary text #52605C and cobalt #1B43F5 for the campaign promise and booking actions. Removed the multicolor cards, competing lime accents, photographic offer fill, and heavy closing panel. Desktop is a two-column editorial grid: 500-weight Manrope promise and CTA on the left, four numbered timeline rows on the right. The existing animated route and pause control remain. Below 800px the grid stacks; minimum tested width is 320px.

The founder statement follows the supplied reference's wide, regular-weight editorial typography. DM Sans 400, 38–62px desktop, 29–38px mobile, 1.19/1.23 leading, tight tracking. White label and signature, no lime or dot texture. Existing ocean photograph is subdued by desaturation and a uniform dark overlay. No names, claims, images, or text added. Full offer and statement CSS was consolidated rather than appending another override layer.

Verification: Playwright with Edge at 320, 390, 768, 1024, 1440 and 1915px; no horizontal overflow or clipped copy. Timeline movement, pause/resume, booking placeholder dialog and JavaScript parsing pass. Google Fonts loaded during final verification. Existing booking URL remains intentionally unconnected. See design-qa.md.

### Persistent booking control

The fixed booking pill remains available across desktop and mobile, including through the strategy-call offer and closing statement. It hides only while the hook-library popup, mobile navigation, or booking dialog is open so those controls never overlap. The booking destination remains the approved placeholder.

### Founder spacing, luminous type and halftone refinement

The supplied reference now informs more generous whitespace: 800–820px desktop section, 1260px maximum text measure, 144px vertical content padding, and 100px top / 132px bottom mobile padding. Pure white DM Sans text has a restrained 22px glow without blur on the glyphs. Neutral grey dots at 8px intervals sit above the original high-quality wave photograph and dark overlay; mobile uses a subtler 7px pattern. All founder wording is unchanged. Mutation observers keep the booking dock synchronized with popup, modal and navigation dismissal, including Escape. No site-wide audit concepts or new palette were applied.


