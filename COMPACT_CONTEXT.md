# Wave website — compact handoff

## Start here

Continue the Wave agency website in `C:/Users/Aryan/Documents/Codex/2026-09-28/ch/work/wave-animated-site`. Read `AGENTS.md` and `DESIGN.md` before editing. The production source is root `index.html`; mirror it to `dist/index.html` for deployment. This is a buildless HTML/CSS/JavaScript site.

## Product

Wave builds always-on UGC ambassador programs. Creator accounts post daily, Wave tests hooks, formats, angles and messages, then scales organic winners. Audience: consumer brands and growth/creative teams.

## Design system

- Manrope headings; DM Sans body and labels.
- Electric blue `#1B43F5`, lime `#CAFF83`, deep green `#123D31`, white, pale neutral `#F3F4F0`.
- Large rounded surfaces, tight display typography, small editorial labels, high contrast.
- Avoid generic agency cards, rainbow gradients, fake metrics and decorative 3D icons.
- Desktop/tablet/mobile must stay free of horizontal overflow.

## Implemented page

- Conversion navigation and booking CTA placeholders.
- Hero with ocean image, popup on every refresh and continuous 3D creator-media orbit.
- Why Wave section with scroll-linked grey-to-black statement and four proof cards.
- Our Playbook section with six vertically stacked chapters and original inline SVG illustrations.
- The six illustrations autoplay in visible four-second loops. Motion includes selection, creator connections, staggered posts, winner tracing, creative multiplication and distribution growth.
- Cards 3 and 4 use `wave-card-3.jpg` and `wave-card-4.jpg`. Images are blended with CSS masks and gradients, not used as flat wallpaper.

## Responsive behavior

- Playbook alternates copy and illustration on desktop.
- At `980px` spacing and artwork scale down.
- At `640px` every chapter becomes one column, copy first and art second. Cards 3/4 change from horizontal to vertical photo masks.
- Keep body copy at least 15px desktop and readable on mobile. Preserve 44px touch targets.

## Accessibility

- Retain semantic headings, alt/ARIA labels, keyboard focus, menu and popup behavior.
- The always-on playbook motion is an explicit user requirement and intentionally overrides the earlier global reduced-motion reset for those illustrations.
- Do not animate text labels or entire panels.

## Assets

- `wave-background.png`: hero and selected card atmosphere.
- `creator-grid.png`: creator placeholders.
- `wave-card-3.jpg`: dark breaking wave supplied by user.
- `wave-card-4.jpg`: pastel sunset wave supplied by user.

## Hosting and source

- Live Site: `https://wave-ambassadors.founder83.chatgpt.site`
- Sites project ID is in `.openai/hosting.json`; static directory is `dist`.
- GitHub: `https://github.com/waveugcmain-jpg/wave-hero`
- After every verified change: update `DESIGN.md`, mirror root `index.html` to `dist/index.html`, commit, push to GitHub and publish the existing Site.

## Known placeholders

- Booking and hook-library URLs are not connected.
- Hero media uses image placeholders until real creator videos are supplied.
- Several remaining navigation destinations are prototypes.
