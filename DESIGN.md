# Wave website design handoff

## Homepage problems and credibility on proposals - 2026-10-07

Copied the complete homepage problems section immediately after the proposal hero. Shared markup is stored in proposals/homepage-proof.html, preserving the exact problem statement, four proof cards, 500+ creator claim, six founder-experience logos and existing qualification copy. Proposal CSS and JavaScript copy the original section styling and reversible scroll-linked word-color reveal with its sticky runway. Asset URLs are root-relative; portrait sprite variables are defined on the copied section. Homepage source remains unchanged. A narrow-screen override sizes avatars, the creator numeral and logo grid to prevent clipping at 320px.

Production build passed with 61 validated asset references; JavaScript syntax passed. Desktop reveal and proof cards were visually checked. At 320px, all four cards and the page have no horizontal overflow. Six brand logos load. Section placement is directly between hero and campaign. The shared proposal template includes this proof section for future brand pages.


## BlaBliBlu browser annotations and creator choreography - 2026-10-06

Applied all six comments. The hero now centers the official BlaBliBlu logo and uses the homepage's smoothstep stagger, portrait reveal and curved SVG connections. Progress follows a short hero scroll and reverses exactly, without pinning. Reduced motion retains scroll-controlled opacity while suppressing portrait translation/scale and line drawing. No-JS keeps portraits visible. The brand logo was sourced unchanged from https://blabliblulife.com/cdn/shop/files/TOP_LOGO.png?v=1752316118&width=405 and is stored in proposals/assets/blabliblu-logo.png; the JSON logo field is optional for other brands.

Campaign cards now say “Flooding the algorithm” and “Staying top of mind,” with supporting daily-feed copy. Goal three explicitly targets quick-commerce demand. Removed the selected strategy description while retaining its example-strategy label. The user's site-wide punctuation request removed em dashes from proposal copy/metadata and confirmed the latest homepage already has no em dashes; its concurrently published changes are preserved. Proposal JavaScript now has a content-derived filename, matching CSS cache versioning.

Build passed with 52 asset references and JavaScript syntax passed. Browser checked logo load, ten connections, zero em dashes in proposal text, revised copy, no console errors and 320px overflow/readability. Desktop scroll states at 0px, 108px and 180px verified hidden, staggered and fully revealed portraits; returning to 108px reproduced the same opacity values exactly. The browser uses reduced-motion mode, so spatial transforms were inspected in source rather than visually played. Mobile network and cards were visually inspected.

## Branded homepage link preview — 2026-10-06

Added explicit Open Graph and Twitter preview metadata and the homepage canonical URL. Preview title uses the homepage positioning line; description is the exact hero supporting paragraph. A content-hashed 1200 × 630 PNG uses the existing Manrope Wave wordmark, lime period and blue/lime palette with the same positioning line. This stops sharing clients from guessing a client logo or a headline fragment. Browser tab title remains unchanged. Artwork source is scripts/social-preview.html, rendered at 1200 × 630 using the bundled font; it is not copied to production. PNG is copied and hash-validated by the existing build. Social apps may retain previously cached previews until they refresh.

## Original playbook copy restored — 2026-10-06

Restored all six playbook headlines and body copy from the version before the simplification, at the user’s request. The sole punctuation change replaces the em dash in step 01 with a comma. Card 03 retains its lavender background; heading-free booking, five practical FAQs, assets, motion and other sections are unchanged. This supersedes the previous playbook copy rewrite.

## Simpler playbook, focused FAQs and heading-free booking — 2026-10-06

Removed both visible booking headings and their wrapper. The booking section retains an accessible name and becomes the programmatic focus target for all booking buttons, preserving Calendly loading and the direct fallback link. Reduced top padding to avoid an empty heading-sized gap.

Rewrote all six playbook cards with shorter, conversational, outcome-focused copy. Removed the em dash and ICP jargon from this section. The step sequence and creator/posting commitments are unchanged. Step 03 now uses a clean #E9EDFF lavender background with no photo or decorative pseudo-elements. Removed its unused photo asset from optimized deployment assets and both lazy-load/fallback maps.

Reduced the FAQs from 13 to five practical questions: paid ad usage, campaign handoff, creator management, building on a successful video, and realistic viral expectations. Ad rights refer to the campaign scope without inventing a duration, unlimited license or account ownership terms. Management copy distinguishes done-for-you from done-with-you. Intro is “The practical bits, before we get going.”

Build and JavaScript syntax checks passed, including content-hash and local-reference validation. Browser checks at desktop and 390px mobile confirmed no horizontal or copy overflow, no visible booking header, the new card background, five functional FAQ toggles, and booking-section focus with Calendly initialization. No application errors. Screenshot: simple-playbook.png in task outputs. This supersedes earlier copy and step 03 art direction.

## BlaBliBlu creative strategy — 2026-10-06

Replaced the empty content-bank area with the user-supplied creative strategy: three audiences, all 18 angles and all 54 example hooks. The opening explains the 70% proven winners / 30% new angles mix across 300–600 reels and consistent formats repeated by multiple creators to create mini trends. Clearly labeled as an example strategy, aimed at finding repeatable winning formats.

Each audience has six visible format cards, with one hook shown and two more in native details disclosures. Desires and objections are preserved in expandable semantic tables. Audience jump links, differentiated quiet surfaces and a strategy CTA support scanning. Cards use three columns on desktop, two on tablet and one on mobile. Optional strategy data stays in the proposal JSON; rendering is in `proposals/strategy.mjs`. Proposal CSS now receives a content-derived filename at build time to prevent stale styling after updates.

Verified all 18 cards/54 hooks, keyboard disclosure, audience anchors, desktop and 390px/320px layouts, expanded mobile tables and hooks, and no horizontal overflow or application errors. Production build and syntax checks passed. Main homepage files remain untouched. Sample UGC slots are still waiting for supplied media. Evidence: blabliblu-strategy-desktop.jpg and blabliblu-strategy-mobile.jpg in task outputs.

## Reusable BlaBliBlu outreach proposal — 2026-10-06

Added `/blabliblu` as a standalone generated proposal. Homepage markup, styles, scripts and assets remain unchanged. `proposals/blabliblu.json` holds brand copy, campaign figures, booking URL, content-bank entries and sample creatives. Duplicate that configuration with a new slug to create another outreach page; see `proposals/README.md`. The existing production build now generates these pages alongside the homepage.

Uses the established Manrope/DM Sans, blue/lime/green palette and optimized ocean/creator imagery. Illustrative creator portraits are labeled. Compact campaign cards use reversible scroll transforms; the creator network appears once. Reduced motion shows stable content. Mobile uses a keyboard-accessible scroll-snap creative gallery and a contextual booking dock. All booking CTAs use the existing Wave Calendly URL.

The user approved building spaces first: the content bank and three sample UGC slots are explicitly marked coming next. Populate them with real material before outreach. Proposal pages have noindex/nofollow metadata. Scoped QA and its limits are recorded in `proposals/design-qa.md`; production build, syntax checks, responsive visual inspection and booking navigation passed.

## Browser annotation copy and styling refinements — 2026-10-05

Applied all five user annotations. The creator-network exploration prompt is bold (700) in brand green. Hero eyebrow is now “The viral growth agency for consumer products” with a decorative four-point lime SVG star and static glow; the old diamond is suppressed. The star adds no image request or animation loop. The former “Real creators / Daily content / Organic distribution” hero footer is removed. Removed “Two ways to work together. One goal: build your wave.” while retaining the booking button, aligned right on desktop. Final reassurance is “No obligation. A clear plan to build your next growth channel.”

Updated the hashed stylesheet reference and preserved asset hash validation. Production build passed. Browser inspection confirmed all five changes, no application errors and no horizontal overflow at desktop and 320px mobile. Hero screenshot saved as hero-copy-star.png in task outputs. These changes supersede earlier copy at those locations.

## Site-wide performance optimization — 2026-10-05

Removed the invitation/banner popup markup, styling, event handlers and dock dependencies. The ordinary booking dock remains. Tab title is exactly `wave - building distribution`. This supersedes all earlier popup requirements.

Converted large backgrounds and creator sprite sheets to appropriately sized WebP assets, externalized and optimized the six embedded brand logos, and added 240px/480px responsive creator-post variants without cropping. The eight background/sprite assets plus six source creator posts were 12,972,203 bytes; the new backgrounds plus both responsive variants total 1,573,242 bytes (87.9% less). HTML shrank from 632,243 bytes to approximately 59 KB after separating CSS/JS and logos. These are uncompressed asset-size comparisons, not measured load-time or Lighthouse scores.

Content-hashed assets in assets/optimized receive immutable caching. Original artwork remains available in the repository, outside dist. Build checks all local references and SHA-256 filename hashes. CSS URLs are root-relative because styles now live in assets/optimized. Manrope and the hero background are preloaded. Below-fold backgrounds activate 600px before their section, with a no-JavaScript fallback. Brand images use native lazy loading and async decoding. Calendly starts only near booking (800px) or on a booking-button click; the direct link remains.

The hero orbit and playbook SVG loops pause offscreen and when the tab is hidden, retaining continuous motion while visible. Scroll scenes skip repeated style writes when clamped progress has not changed. The 45-day choreography, network interactions and sticky layouts retain their existing behavior.

Validation: dependency-free production build and JavaScript syntax checks passed. Browser checks at 1280px desktop, 1280 × 650 short laptop and 390 × 844 mobile confirmed loaded full-frame creator posts, no horizontal overflow, six loaded brand logos, staged backgrounds and deferred Calendly. All six campaign cards completed on short laptop and returned to their initial transforms on upward scrolling. Mobile menu and booking focus/iframe initialization passed. No application errors; Calendly emitted its own storage/telemetry warning in the preview browser. Screenshot saved as optimized-mobile.png in task outputs. Publishing to GitHub and hosting deployment are separate steps.

## Full-resolution Plix replacement — 2026-10-04

Replaced the thumbnail with user-supplied 6a73e04d-ab59-4bc2-bd4a-9e4bfd2ac6cc.png, preserving its complete 948 × 1659 composition in the existing contain-sized image slot. Optimized WebP is 133,704 bytes. Build passed; browser confirmed all three orbit instances load the new dimensions with contain sizing and no horizontal overflow. Screenshot inspected. This supersedes the thumbnail-quality limitation in the earlier entries.

## Plix replacement and shorter-laptop campaign animation — 2026-10-04

Re-encoded the newly supplied Plix file (codex-clipboard-28741154-7a26-4158-8e16-6a01e3923226.png) at WebP quality 95, preserving the complete 113 × 170 source. The replacement is still a thumbnail, not a higher-resolution post.

Live inspection reproduced the full campaign choreography at 1280 × 720 but a basic grid at 1280 × 650 because the full effect required at least 700px viewport height. Lowered the synchronized CSS/JavaScript threshold to 800px width / 600px height and tuned the 600–699px layout so all six cards fit. Retained the center-origin stagger, 250svh runway, scroll-only progress and exact reverse traversal. Mobile and shorter-than-600px screens retain individual scroll reveals.

Production build passed. Real browser scrolling verified initial hidden cards, early stagger, all-six completion and matching reverse transforms at 1280 × 650 under reduced-motion preference. All six cards completed without text or horizontal overflow at 800 × 600, 962 × 652 and 1440 × 900. Mobile at 390 × 844 retained progressive reveals, no overflow, and the replacement Plix image loaded with contain sizing. No browser errors reported. Screenshot: campaign-fixed-laptop.png in the task outputs.

## Six creator posts and tighter spacing — 2026-10-04

Added the supplied Plix and Forest posts to the hero orbit. All six sources repeat through 18 cards, reducing angular spacing from 30 to 20 degrees. Responsive radius tuning keeps the mobile and tablet cards close together while retaining complete vertical framing. New captions: “More voices. One brand.” and “New angles. Every day.” Build asset validation includes both new WebPs. Plix was supplied as a 113 × 170 thumbnail and is preserved without cropping; it remains visibly softer than the full-resolution posts. Forest retains 941 × 1672 dimensions. Existing contain sizing preserves both compositions.

Production build passed. Browser checks at 320, 390, 768 and 1440px confirmed six distinct loaded images, no horizontal overflow, no caption overflow, and no vertical card clipping in sampled states. Desktop/mobile screenshots inspected; no browser errors reported.

## Supplied creator posts in the hero orbit — 2026-10-04

Replaced the hero's cropped creator-grid placeholders with the four user-supplied Instagram-style compositions: Philips product recommendation, Zepto, Aqualogica, and Philips tier list. Optimized WebP files live in assets/creator-posts; all retain the original 941 × 1672 dimensions and complete image composition. Images use width:100%, height:auto and object-fit:contain. No generated image changes, added engagement metrics, or new client/result claims. Supplied post interfaces and metrics are part of the supplied artwork, not independently verified campaign results.

Retained the continuous 76-second 3D orbit, with 12 repeated cards instead of 20 so the taller posts have room. Enlarged the responsive stage to keep complete cards inside its vertical bounds. Removed the extra play icon, faux video header and image overlays. Small white caption strips sit below each image: “A new creator. A new angle.”, “Your brand. In more feeds.”, “More creators. More stories.” and “Different hooks. Daily posts.” Each carries “The creator army / Wave”. Hero headline and supporting paragraph are unchanged. The first four images have descriptive alt text; duplicate orbit cards are hidden from assistive technology.

Production build copies and validates the four assets. Build and inline JavaScript syntax checks passed. Browser checks at 320, 390, 768, 1440 and 1920px confirmed image loading, contain sizing, no horizontal overflow, no caption overflow, and no vertical card clipping in sampled orbit states. Desktop/mobile screenshots inspected; popup dismissal and mobile navigation to Our creatives passed; no browser errors reported. Total new image payload is approximately 697 KB, down from 7.4 MB of supplied PNGs. Live deployment is separate from the GitHub push.

## Cloudflare Workers deployment directory correction — 2026-10-04

User's logs show a successful site build followed by Workers automatic setup with assets.directory='.'; this uploaded node_modules and failed on a 128MiB workerd binary. Added wrangler.json for the observed wave-website project with assets.directory='./dist' and single-page-application fallback. No Worker script or website design change. README distinguishes the existing Workers pipeline (npm run build / npx wrangler deploy) from the alternative Pages setup. Production build and configuration/output checks passed; actual Cloudflare deployment requires its next build and was not performed locally.

## Cloudflare Pages compatibility and campaign verification — 2026-10-04

Removed netlify.toml, selected Node 22 through .node-version, and copied the existing security headers into dist/_headers. The build no longer emits a catch-all _redirects rule: Pages serves assets directly and supplies its native index.html fallback. Default Pages caching replaces long immutable caching of unversioned files. README documents GitHub-connected Pages settings (None / npm run build / dist / main), domain setup and the distinction between repository readiness and a live migration. No frontend design or animation changes.

Production build passed. Edge/Playwright checks passed at 1440x900, 1280x720, 800x700, 961x652, 390x844 and 320x700 under both motion preferences. Desktop cards start hidden, reveal progressively, all six finish by 85%, and reverse positions match exactly. Mobile/short viewports reveal all six individual cards. No JavaScript errors, horizontal overflow or desktop card text overflow. Desktop/mobile captures inspected. Cloudflare account deployment and DNS cutover have not been performed.

## Laptop-scale network and staged interaction — 2026-10-04

The network now uses the full available laptop width and most of the viewport height, with larger portraits and a responsive larger brand hub. Replaced the 185svh runway with 300svh. Scroll reveals all 36 creators progressively with smoothstep opacity/scale/translation; each native button remains disabled until its reveal finishes, then its plus badge appears. Full reveal finishes at roughly 75% progress, leaving the last quarter for exploration before sticky release. Reverse scroll restores prior states. This explicitly requested user-controlled choreography stays active under reduced-motion settings; there is no autonomous animation. Tab from the focusable section reveals/enables all profiles for keyboard access.

Detail panels can move beside their portrait on shorter laptop screens instead of covering the selected button. Verified at 1280x720, 1366x768, 1440x900 and 390x844: initial disabled state, partial visibility/readiness, all 36 click interactions, no portrait clipping/overflow, pinned exploration interval, normal scroll release, reverse progress and keyboard access. Tested under OS reduced motion as well. Production build passed; local preview uses updated dist. Existing hosted-publication blockers remain unresolved.

## 36-creator Instagram army — 2026-10-04

Expanded the interactive scene from 12 to 36 individual creators. A new generated fictional 6x6 contact sheet (creator-army.jpg) uses casual Instagram-style profile photos with varied outdoor/home/cafe settings and expressions. Subtle coral/pink/purple story rings frame each avatar. Desktop uses three concentric, size-varied groups; mobile uses a dense 6-column arrangement with clear space for the centered brand hub. No portraits repeat within the network. Existing illustrative-profile disclosure retained.

Every profile says “[Name] will make a dedicated Instagram account talking about your brand, post twice a day and test multiple angles like:” followed by three sample angles. Scroll stagger normalized for 36 people. All 36 click interactions, hover, keyboard, reverse reveal, reduced motion and overflow checks passed at 320, 390, 768 and 1440px; production build passed. ChatGPT Sites publication requested but blocked before source synchronization: workflow stdin was rejected by session approval policy. GitHub remains the current source of truth.

## Interactive creator network — 2026-10-04

New white #creator-network section after Why Wave and before Our Playbook. Centered Your brand hub connects via subtle native SVG curves to 12 distinct circular Indian creator portraits. Scroll position reveals portraits with staggered opacity, translation and scale; reverse scroll retraces the reveal. Desktop/mobile use tuned asymmetric coordinates. Short viewports use an unpinned reveal; reduced motion displays the whole scene. No scroll interception or new runtime dependency.

Each avatar is a semantic button with a plus badge, focus ring, hover lift and expanded state. Hover/focus opens a shared detail panel; click/tap pins it. The selected line turns cobalt. Panels include a fictional name, account-creation explanation and two distinct sample creative angles. Close button, Escape, outside tap and repeat click dismiss. Pointer dismissal suppresses accidental reopening beneath the removed panel. Panels are clamped to the scene width; keyboard navigation can reveal the entire scene.

creator-network.jpg is a generated fictional 4x3 portrait sheet (built-in ImageGen), optimized to 295KB JPEG. Names, handles and two sample follower counts are explicitly labeled illustrative in the section. Portraits are not real team members or testimonials. New CSS/JS files and JPEG are included in scripts/build.mjs.

Verified at 320, 390, 768 and 1440px: start/mid/end/reverse reveals, 12 connectors, all 12 clicks, panel bounds, hover, keyboard Enter/Escape, reduced motion and zero page errors. Additional mobile touch tests cover open/close/outside dismissal; short viewport reveal verified at 1024x600. Desktop/mobile captures inspected and production build passed.

## Booking-first hierarchy and dark Calendly — 2026-10-04

Supersedes the editorial strategy invitation below. BOOK A CALL is now the dominant heading, set in oversized Manrope on charcoal #111614 with a lime period and directional arrow. The existing strategy promise, explanation, reassurance and lime CTA form a quieter two-column lower area separated by a fine rule; mobile stacks the content. Removed the decorative playbook illustration. Main offer copy unchanged; no new marketing text. Existing border animation/pause and booking focus retained.

Calendly uses documented embed parameters background_color=111614, text_color=f4f6ef and primary_color=caff83. The surrounding booking section matches; fallback link remains available. Live iframe inspected and confirmed rgb(17,22,20) background with light text and lime controls. No booking submitted. Reference: https://calendly.com/help/how-to-customize-your-embed.

Verified heading hierarchy, no overflow and booking navigation at 320, 390, 768, 1024, 1440 and 1920px. Desktop/mobile offer screenshots and live Calendly screenshot inspected. Production build passed.

## Editorial strategy invitation and copy updates — 2026-10-04

Replaced the centered pale-blue strategy invitation with a warm-paper (#F8F9F5) two-column layout. Left: small existing BOOK A CALL label, large Manrope strategy promise, cobalt NO QUESTIONS ASKED and existing description. Right: cobalt inset panel with the enlarged existing creative-playbook SVG, unchanged takeaway/reassurance and a full-width lime booking button. No new text, claims or testimonials. Stacks below 700px. Existing border motion/pause and Calendly navigation retained.

Hero copy is now “build an army of dedicated creator accounts that make your product go viral”, set in three intentional lines with lime emphasis on dedicated creator accounts. Card 4 now reads “Make your brand impossible to forget.” and “A network of creator accounts keeps your brand in front of consumers every day, keeping you top of mind when it matters.” Existing creator portraits retained; supporting copy weight 600.

Verified at 320, 390, 700, 768, 1024, 1440 and 1920px: exact hero/Card 4 text, unchanged strategy text blocks, no page/card overflow, working booking focus and border pause/resume, zero page errors. Desktop/mobile screenshots inspected. Production build passed. Conversion impact is unmeasured.

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

