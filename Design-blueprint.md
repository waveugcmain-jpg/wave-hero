# wave / Hero direction 01

## 1. Inspiration and strategy

Keep the reference's centered hierarchy, generous open background, green action accent, and dimensional media sequence. These create a clear reading path from promise to explanation to action, followed by tangible examples.

Discard the stock clouds, unrelated dashboard imagery, competing button treatments, and unsupported rating badge. The distinctive element is the creator ribbon, not generic technology imagery. No performance statistics, testimonials, or guaranteed results have been invented.

The provided headline and subheadline are preserved. The brand audience has not yet been narrowed; this direction speaks broadly to brands considering creator distribution.

## 2. Art direction and design system

### Layout

- White outer frame: 12px desktop / 6px mobile. Blue hero radius: 24px / 19px.
- Navigation: 1,440px maximum width; 40px horizontal padding; logo left, six links centered, strategy-call CTA right. Below 980px, links become a two-column expandable menu; booking remains visible.
- Intro: 1,100px maximum width, centered; 58px top padding desktop. Copy measure: 660px. Mobile uses 20px horizontal padding and naturally wrapping headline text.
- Content order: short positioning line → exact headline → exact explanatory copy → primary booking action and secondary playbook action → moving media → brief process labels.
- Media track: two identical flex groups with 18px gaps, rotated −5°. Tiles are 183 × 250px on desktop and 149 × 212px on mobile, with a subtle −13° Y rotation. The actual 9:16 clips will use object-fit: cover within these editorial crops; adjust to uncropped 9:16 if all source framing must remain visible.

### Styling

| Role | Specification |
| --- | --- |
| Primary blue | #1B43F5 |
| Lime accent | #CAFF83 |
| White | #FFFFFF |
| Body on blue | #E2E9FF |
| Ink on green | #132C20 |
| Background depth | Supplied ocean wave, positioned 62% from the left and color-graded through layered blue radial, vertical, and horizontal veils |
| Display | Manrope 600; 48–82px desktop, 40–62px mobile; line-height 1.06–1.08; tracking −0.065em desktop / −0.06em mobile |
| Body | DM Sans 400; 17px / 1.65 desktop, 16px / 1.6 mobile |
| Buttons | DM Sans 700; 14–15px; pill shape; dark circular arrow on the primary action |
| Main type ratio | About 4.8:1 headline to body at full desktop size |
| Media depth | 0 16px 28px #07194728 shadow; translucent 1px border; 14px corners |

### Interaction

- Continuous left-to-right loop: linear 65-second cycle desktop, 75 seconds mobile. Identical groups and equal end gaps eliminate the loop jump.
- The wave is scaled to 118% hero height so the warm crest enters the initial viewport. A blue radial veil protects the copy while the barrel emerges behind the creator ribbon. Mobile uses an 84%-height crop to keep the image below the core message.
- Pause on hover or keyboard focus, plus a dedicated pause control. Reduced-motion preference removes all motion.
- CTA: 3px lift and a 200ms arrow rotation; navigation underline grows over 200ms. No magnetic cursor effect, to preserve reliable targeting.
- Popup appears after 10 seconds desktop / 18 seconds mobile. Primary: “View hook library.” Secondary: “Or book a call.” Close button and Escape dismiss it for the browser session. It does not take keyboard focus when appearing.
- Mobile popup uses compact inline actions. Native dialogs handle prototype destinations, focus containment, and Escape dismissal.

## 3. Implementation blueprint

The self-contained `dist/index.html` includes the complete HTML, responsive CSS, and interaction JavaScript. It needs no build system. Fonts load from Google Fonts with local sans-serif fallbacks.

Semantic structure:

```html
<header><!-- logo, labelled nav, primary booking action, mobile toggle --></header>
<main>
  <div class="intro">
    <p class="eyebrow">...</p>
    <h1><!-- exact supplied headline, offering emphasized --></h1>
    <p class="sub"><!-- exact supplied subheadline --></p>
    <div class="actions">...</div>
  </div>
  <section aria-label="Creator video placeholders">
    <div class="ribbon"><div class="track">
      <div class="set"><!-- original tiles --></div>
      <div class="set" aria-hidden="true"><!-- seamless duplicate --></div>
    </div></div>
  </section>
</main>
<aside aria-label="Explore hooks or book a call"><!-- dismissible prompt --></aside>
```

### Media handoff

Current media use a generated 2×2 contact sheet of four fictional creators as realistic poster placeholders. CSS crops each quadrant into a separate 9:16 card, then repeats the four covers through the seamless eight-card loop. Replace each card background with `<video muted loop playsinline preload="none" poster="...">` when approved clips arrive. Maintain the stable tile dimensions. Use IntersectionObserver to load/play visible clips only, handle rejected play promises, pause offscreen clips and on page visibility changes, and use static posters for reduced motion. Audio must remain off until an explicit user action. Any meaningful spoken content needs captions. Avoid eager playback of all sixteen original/duplicate elements.

### Scope and pending content

Booking and hook-library destinations are intentionally unconnected. Other navigation destinations show explicit section-preview notices; “Our creatives” scrolls to the media. These should become links to real sections/pages as subsequent sections are built. This is a hero design prototype, not a completed multi-section website or functioning lead funnel.

## 4. Conversion and aesthetic audit

- A specific booking CTA stays visible in navigation and repeats after the value proposition, giving ready buyers an obvious next step.
- The playbook and hook library provide lower-commitment paths for visitors who need context first; the popup gives visitors control through dismissal.
- The restrained palette, oversized offer, and continuous creator ribbon establish a recognizable visual direction without invented social proof. Conversion improvement remains a hypothesis to validate with real traffic.

Validation: JavaScript syntax and local HTTP response checked; desktop and mobile layouts visually inspected; mobile navigation expansion and popup dismissal verified. Full accessibility certification, real video playback, booking integration, and conversion measurement are outside this prototype check.
