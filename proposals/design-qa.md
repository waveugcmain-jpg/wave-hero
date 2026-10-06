# Proposal design QA — 2026-10-06

Status: passed for the approved page with empty content-bank and creative spaces.

Compared the existing Wave homepage and proposal at desktop size. The proposal preserves Manrope/DM Sans, ocean imagery, blue #1B43F5, lime #CAFF83, green #123D31 and paper surfaces. Intentional differences: split hero with a brand-centered creator network, three scannable campaign metrics, compact editorial goals, an inset content bank, and a mobile creative carousel. These support quick proposal reading instead of the homepage's longer sales choreography.

Browser review covered desktop, tablet, 390px and 320px widths: readable headings, no horizontal document overflow, loaded fonts, clear CTAs and intentional empty states. Corrected metric range wrapping on small screens. At 390px the creative gallery is 319px wide with 856px content; keyboard ArrowRight advanced it to 290.4px. Visible focus outlines and the mobile booking dock were inspected. Booking CTA opened the existing Wave Calendly meeting page; no booking was submitted. No application console errors were reported.

Evidence in task outputs: blabliblu-desktop.jpg, blabliblu-mobile.jpg (390 × 844), blabliblu-mobile-creatives.jpg (390 × 844), blabliblu-result.jpg and wave-reference-desktop.jpg. Superseded mobile campaign capture is not current evidence.

Motion: reduced-motion rendering was visually checked. Normal-motion creator reveal, reversible scroll card transforms, reduced-motion reset and mobile dock logic passed a separate VM behavior check; normal-motion visual playback was not observed in this browser.

Production build and JavaScript syntax checks passed. Homepage source and deployed HTML remain unchanged. Actual brand videos, caption files and curated content references are pending user material; those media paths require a fresh check when populated. No fabricated results or working-media claims are shown. Proposal pages carry noindex/nofollow; this is not access control.

## Creative strategy update — 2026-10-06

Passed: all 18 angles and 54 hooks from the supplied DOCX are included across three audiences, together with every desire and objection. One hook per card is initially visible; native details controls reveal two more. Keyboard Enter toggles the disclosure, and focus remains visible. Audience anchor navigation and expandable two-column insight tables work. Reviewed desktop at 1440px, mobile at 390px and the expanded women’s card at 320px; no clipped text or horizontal overflow. No application console errors. Source hooks remain illustrative, with final product/pricing claims to be confirmed for scripts. The 70/30 mix and proven-winner positioning are supplied by the user, not measured campaign results. Screenshot evidence: blabliblu-strategy-desktop.jpg and blabliblu-strategy-mobile.jpg. Build validates 51 references; proposal CSS is content-versioned to avoid stale browser styling.

## Annotation pass - 2026-10-06

Passed all six requested changes. Center logo loaded at 405px intrinsic width; ten SVG connections. Desktop reveal verified at scroll 0 (all hidden), 108 (staggered intermediate opacities), 180 (all complete), and back to 108 (identical intermediate values). Reduced-motion mode was active: opacity follows scroll while movement and line drawing are suppressed. Browser checks at 320px confirmed mobile logo proportions, card readability, no clipped card text or horizontal overflow. No application console errors. All 54 strategy hooks remain, with em dashes replaced by appropriate punctuation. The latest homepage already removed both em dashes in concurrent changes; those changes are preserved. Build validates 52 references.
