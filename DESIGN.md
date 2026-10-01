# Wave website design handoff

## Section 2 copy and creator portraits — 2026-10-01

Updated the problem subheadline to the user's organic viral growth channel copy, with a fine cobalt left rule, quieter setup and larger bold cobalt “the answer is wave”. Creator card now says “Trained ugc creators working with us”. Lime card uses bold “Our goal” and three separate goal lines: make your brand go viral; build you an organic growth channel; find and scale winning creatives. Distribution headline is now “build an army of creator pages talking about you.” Four existing fictional portraits from cta-portraits.png replace generic play icons inside the connected creator-page illustration; no new identities or testimonials implied. Existing scroll-linked statement behavior retained.

Verified card and page overflow at 320, 390, 768, 1024 and 1440px, all four portraits, all three goals and exact distribution copy, with no page errors. Desktop/mobile artwork and subheadline captures inspected. Production build passed.

## Static hero and supporting-copy hierarchy — 2026-10-01

Supersedes the rotating-headline entry below at the user's request. Removed all headline typing/backspacing code, caret and sizing layers. Restored the original semantic headline. On phones the display scales from 19px at 320px to 34px at 600px, preserving the two intentional lines with the offer phrase on one line. Supporting copy stays weight 400, now white, 16px on phones, 17px on tablets, 18px desktop and 19px wide desktop, with 1.65 leading and more space before the CTA. Pricing remains removed. Changes scoped to the hero.

Verified Edge rendering at 320, 390, 600, 768, 1440 and 1920px: no horizontal overflow, offer phrase fits its container, original headline present, animation elements absent, regular subheadline weight and no page errors. Mobile/desktop screenshots inspected; production build passed.

## Rotating hero headline — 2026-10-01

Hero now holds each complete headline for 10 seconds, backspaces at 28ms per character, pauses 350ms, then types the next at 55ms per character. Alternates the existing headline with the exact supplied “Build viral ugc programs that millions watch”. Retains white/lime emphasis and adds a slim blinking caret. Both layouts reserve space with hidden grid sizing layers to prevent CTA/media movement. Screen readers receive a stable heading rather than character announcements. The explicitly requested loop runs under reduced-motion settings and suspends in hidden tabs. Pricing removed from desktop and mobile navigation.

Validated erase, partial typing, both completed headlines and return loop in Edge at 1440, 390 and 320px with reduced motion enabled; stable CTA position, no horizontal overflow or page errors. Desktop/mobile captures inspected; production build passed.

## Final footer — 2026-10-01

Replaced the minimal closing footer with a white five-column footer: Wave wordmark and supplied tagline, For Brands, For Creators, Wave and Resources. All requested labels and copyright/legal controls retained. The existing hero wave-background.png forms a 340px bottom photographic band faded into white; mobile uses a 230px crop. Existing Manrope/DM Sans and deep green typography retained. Four navigation groups wrap to two columns below 600px, with 44px minimum targets. Legal/copyright content stays above photography for contrast.

Existing section anchors are connected. Done For You and Done With You select the appropriate radio before navigating to #work-with-us. Booking reuses the existing placeholder handler. Unbuilt creator, contact, careers, resources and legal destinations open an explicit Coming soon dialog, without invented URLs or policy content. Five widths (320–1440px), every footer anchor, both model selections, every preview dialog and booking tested; zero page errors or horizontal overflow. Production build passed; desktop/mobile captures inspected in outputs/footer-1440.png and footer-390.png.

## Final CTA portrait atmosphere — 2026-10-01

The lime closing CTA now includes six decorative circular creator portraits around its desktop perimeter. The headline, support copy and button stay clear of imagery. Portraits have varied sizes, restrained desaturation/opacity and feathered circular masks that blend into lime; they do not animate. Below 700px, four smaller portraits occupy a dedicated band above the headline. The layer is aria-hidden and pointer-events:none.

Asset: cta-portraits.png, generated with the built-in ImageGen tool as a precise 3x2 sheet of six fictional everyday adults with natural skin texture, casual clothing and daylight. These are decorative fictional people, not testimonials or named creators. CSS background-size 300% 200% selects each portrait. Included in the Netlify production build and asset validation. Existing wording, booking handler and other sections unchanged. Build and browser checks passed at 320, 390, 768, 1024, 1440 and 1915px; booking dialog passed, no page errors. Desktop/tablet/mobile evidence inspected in outputs/portraits-cta-*.png.

## Ways to work with Wave — 2026-10-01

The #work-with-us section sits immediately after #campaign and before #strategy-call. Two native radio options select Done for you (default) or Done with you; CSS :has() shows the corresponding detail panel without a JavaScript dependency. Full user-supplied descriptions, nine/ten deliverables and six outcomes per option are included. One shared Book a strategy call button uses the existing booking handler and approved placeholder destination. No pricing or capacity badges.

Reference: codex-clipboard-221f9493-5d79-4916-9f7c-15b098a609f5.png. Retain a two-option selector and shared detail surface; adapt to deep green #123D31, lime #CAFF83, white and pale neutral. Manrope display 38–66px desktop and 34–48px mobile; DM Sans body 15–17px. Wide desktop heading/copy split, white panel with deliverables and outcome columns; below 700px stack the details while keeping both choices visible. Native radio focus and arrow-key selection; restrained hover color transitions; existing reduced-motion rule applies.

Validation: production build passed; both choices checked at 320, 390, 768, 1024 and 1440px without horizontal overflow; default selection, section order, ArrowRight selection and booking dialog passed with zero page errors. Desktop and mobile screenshots inspected in task outputs/work-for-1440.png and work-with-390.png. Existing fixed booking pill remains as specified in prior handoff.

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



## FAQ and final CTA — 2026-09-30

Added #faqs and #build-with-wave after the founder statement. All thirteen supplied questions and answers are preserved, including bold emphasis. FAQ uses native details/summary controls, independent expansion, first item open by default, keyboard Enter/Space support and visible cobalt focus. No JavaScript or dependency is needed to read the answers. Desktop uses an editorial 0.8fr/1.45fr grid with sticky introduction; below 700px it becomes one column.

Art direction keeps the inspiration's large rounded canvas, oversized centered headline, generous whitespace and dominant pill CTA. Yellow/black, decorative badges, ribbons and unrelated stock photography are omitted. Wave's #CAFF83 lime and #123D31 deep green create the final visual reset after the quiet #F3F4F0 FAQ; #1B43F5 identifies FAQ interaction. Existing Manrope/DM Sans retained. CTA uses Manrope 800, 48–102px desktop / 38–64px mobile, 1.02–1.06 leading and -0.06em tracking. FAQ questions use Manrope 600 at 17–21px; answers use DM Sans 15–16px at 1.75 leading. Desktop outer padding 64px, mobile 24px; section radii 28px/22px. No new photography, fake testimonials, statistics or scarcity claims.

The exact requested CTA headline and supporting sentence are preserved. No-obligation reassurance and three takeaways summarize the already approved strategy-call offer. Buttons reuse the existing .book handler and BOOKING_URL. User confirmed no booking URL for this iteration; retain the placeholder dialog. Added minimal footer with a functional FAQs anchor. Existing sections and all scripts remain byte-for-byte unchanged.

New motion is limited to existing button hover and short color transitions; global reduced-motion rules apply. No entrance animation hides copy. Verified in Edge/Playwright at 320, 390, 768, 1024, 1440 and 1915px, keyboard accordion toggles, booking dialog/Escape, fonts and zero browser errors. See design-qa.md. No live Sites deployment was requested in this turn.

## Sculptural footer foreground — 2026-10-01
Replaced the faded rectangular ocean photograph in the footer with locally bundled, AI-generated footer-waves.png. Layered teal and cobalt waves use a crisp irregular foam silhouette against white, following the reference's foreground composition. No opacity mask; multiply blending keeps the white backdrop seamless. Responsive cropping preserves depth without covering links. All footer content and behavior unchanged. Verified 320, 390, 768, 1024 and 1440px, links, dialogs, and production build.


## Compact footer and founder note
Raised the footer wave foreground by reducing its band to 260px desktop / 170px mobile with negative top spacing. Entire asset fits the band to preserve crest silhouettes and keep legal text above water. Founder note now uses the supplied one-goal copy in a compact rectangle, with 120px exterior desktop whitespace and 72px mobile whitespace. Existing links and dialogs retained.


## Compact strategy invitation
Replaced the long strategy timeline with one centered pale neutral panel and the user's exact new copy. Single booking CTA retains the existing placeholder. Small blue glow follows the rounded border on a 12-second loop, with pause control, offscreen/tab suspension and reduced-motion support. Verified 320/390/768/1440px without overflow, moving offset distance, booking dialog and no browser errors. Production build passed.


## Solid strategy panel
Changed the strategy invitation to a unified deep-green #123D31 background, white copy, lime headline emphasis and lime CTA. Removed the pale gradient. Compact dimensions and border glow retained. Desktop/mobile visual checks and production build passed.


## Lower-page visual balance and motion verification
Screenshot audit found repeated dark-green panels, excessive 120px founder margins, oversized closing typography and inconsistent section spacing. Strategy panel now pale blue #E4ECFF with cobalt action/emphasis and dark readable copy; border orbit 14s. Founder margins 32px desktop / 20px mobile. FAQ padding 80px desktop with 20px question rows. Closing headline capped at 78px with reduced vertical spacing, footer top padding 72px. Text/content preserved. Campaign scroll animation verified through start/mid/end; six cards finish visible. Fixed reduced-motion branch to display cards without transformations. Verified widths 320/390/768/1440, orbit/pause, no browser errors, production build.


## Animation reliability repair
Reproduced both animations being suppressed by reduced-motion settings. Per explicit repeated user instruction, these two animations now run with local pause/play controls even under that preference. Border dot uses requestAnimationFrame along measured rounded edges at 14 seconds per lap; suspends offscreen/hidden tab. Campaign has a visible initial reveal, scroll scrub on tall desktop and responsive card reveals on short/mobile windows, plus an accessible pause/play control that shows all cards. Tested physical dot movement and rendered card transforms at 1440x900, 961x652 and 390x844 under both motion preferences; all six pass with zero browser errors. Also verified pause/play and real wheel input. This supersedes the previous reduced-motion static behavior for these two explicitly requested animations.


## Campaign choreography confirmed
User explicitly clarified: begin with cards hidden inside the center text, scroll outward to full-size positions, retrace exactly on upward scroll. Removed the early-progress offset introduced during diagnostics. Progress remains derived exclusively from scroll position, with deterministic reverse transforms; tiny subpixel start values snap to zero. Verified matching start/mid states forward and backward at 1918x910 and fully visible final six cards. Preserve this choreography in future edits.


## Campaign brief acceptance and control removal
Removed the unsolicited campaign pause/play control and its state entirely. Campaign is driven only by scroll position, with center-origin scale/rotation, staggered outward movement and exact reverse traversal. Desktop triggers at 800px by 700px with the existing 250svh runway; smaller screens retain reversible individual reveals. Short-laptop card spacing/type was adjusted only where necessary to keep all copy within its card, including card 2 at 800x700. Verified start/12%/40%/85%/100%/reverse states at 1440x900,1100x740,800x700,390x844; zero errors, no text overflow, exact reverse states, first two cards only at early scroll, six complete by 85%. Border-dot pause control is separate and unchanged.


## Strategy illustration and sunset founder image
Reused the existing native creative-playbook SVG as a small decorative accent above the strategy headline; no new visual language or dependency. Founder background now uses user-supplied founder-sunset.png with a dark blue-green overlay, preserved warm sunset tones, subtle dot texture and softly glowing white text. Asset included in production build. Desktop/mobile screenshots inspected, no horizontal overflow, build passed.


## Live Calendly booking
Added official Calendly inline widget for https://calendly.com/founder-waveugc/new-meeting immediately after final CTA and before footer. White/deep-green/cobalt customization, fixed responsive height to avoid embed resize collapse, accessible section heading and direct external fallback link. All .book buttons now scroll and focus the inline booking section instead of opening placeholder dialog. Verified live event title/date calendar in iframe, section order, focus and mobile overflow. No booking submitted. Calendly external widget requires network; no credentials required. Reference: https://developer.calendly.com/api-docs/overview/embedding/getting-started.
