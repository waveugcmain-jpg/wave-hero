// Progressive enhancement only: every message is visible before JS runs.
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const scene = document.querySelector('.creator-scene');
if (scene && !reducedMotion.matches) {
  const observer = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.isIntersecting)) {
      scene.classList.add('motion-ready');
      observer.disconnect();
    }
  }, { threshold: .2 });
  observer.observe(scene);
}

// The homepage's reversible card expansion, shortened for a proposal.
// Copy stays fully opaque; no pinned runway or scroll interception.
const cards = [...document.querySelectorAll('[data-card]')];
const group = document.querySelector('.campaign-metrics');
let frame = 0, active = false;
const clamp = value => Math.max(0, Math.min(1, value));
function paintCards() {
  frame = 0;
  if (reducedMotion.matches) { cards.forEach(card => card.style.removeProperty('transform')); return; }
  const rect = group.getBoundingClientRect();
  cards.forEach((card, index) => {
    const progress = clamp((innerHeight * .98 - rect.top - index * 28) / (innerHeight * .48));
    const eased = 1 - Math.pow(1 - progress, 3);
    const shift = innerWidth > 600 ? (1 - index) * 40 * (1 - eased) : 0;
    card.style.transform = `translate3d(${shift}px,${(1-eased)*28}px,0) scale(${.94+.06*eased}) rotate(${(index-1)*(1-eased)*2}deg)`;
  });
}
function schedule() { if (!frame && active) frame = requestAnimationFrame(paintCards); }
if (group) {
  new IntersectionObserver(entries => { active = entries[0].isIntersecting; if (active) schedule(); }, { rootMargin: '100px' }).observe(group);
  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule);
  reducedMotion.addEventListener('change', paintCards);
}

// Avoid competing with the hero and final booking CTA on mobile.
const dock = document.querySelector('.mobile-dock');
const hero = document.querySelector('.proposal-hero');
const finalInvite = document.querySelector('.final-invite');
let heroVisible = true, finalVisible = false;
if (dock) {
  dock.hidden = true;
  new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.target === hero) heroVisible = entry.isIntersecting;
      if (entry.target === finalInvite) finalVisible = entry.isIntersecting;
    }
    dock.hidden = heroVisible || finalVisible;
  }).observe(hero);
  new IntersectionObserver(entries => { finalVisible = entries[0].isIntersecting; dock.hidden = heroVisible || finalVisible; }).observe(finalInvite);
}
