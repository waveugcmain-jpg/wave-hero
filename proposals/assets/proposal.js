// Progressive enhancement only: every message is visible before JS runs.
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const scene = document.querySelector('.creator-scene');
// Match the homepage's reversible portrait reveal and connection drawing.
// The hero needs only a short scroll, without a pinned section.
if (scene) {
  const people = [...scene.querySelectorAll('.creator')];
  const svg = scene.querySelector('.proposal-connections');
  const heroSection = scene.closest('.proposal-hero');
  let paths = [], networkFrame = 0;
  function paintNetwork() {
    networkFrame = 0;
    const rect = scene.getBoundingClientRect();
    const desktop = innerWidth > 850;
    const raw = desktop
      ? (heroSection.offsetTop - heroSection.getBoundingClientRect().top) / Math.min(240, innerHeight * .32)
      : (innerHeight * .85 - rect.top) / (rect.height * .75);
    const progress = Math.max(0, Math.min(1, raw));
    people.forEach((person, i) => {
      const amount = Math.max(0, Math.min(1, (progress - .025 - i * (.52 / (people.length - 1))) / .20));
      const eased = amount * amount * (3 - 2 * amount);
      person.style.setProperty('--reveal', eased);
      paths[i]?.style.setProperty('--reveal', eased);
    });
  }
  function measureNetwork() {
    const w = scene.clientWidth, h = scene.clientHeight;
    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
    svg.replaceChildren();
    paths = people.map(person => {
      const x = person.offsetLeft, y = person.offsetTop;
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', `M ${w/2} ${h/2} C ${w/2+(x-w/2)*.55} ${h/2}, ${x} ${h/2+(y-h/2)*.5}, ${x} ${y}`);
      path.setAttribute('pathLength', '1');
      svg.append(path);
      return path;
    });
    scene.classList.add('network-enhanced');
    paintNetwork();
  }
  function scheduleNetwork() { if (!networkFrame) networkFrame = requestAnimationFrame(paintNetwork); }
  addEventListener('scroll', scheduleNetwork, { passive: true });
  new ResizeObserver(measureNetwork).observe(scene);
  reducedMotion.addEventListener('change', paintNetwork);
  measureNetwork();
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

// Homepage scroll-linked problem reveal.
(()=>{
const statement=document.querySelector('#problem-statement');
if(!statement)return;
const statementCopy=statement.textContent;
statement.setAttribute('aria-label',statementCopy);
statement.textContent='';
const revealWords=statementCopy.split(/\s+/).map((word,index)=>{
  if(index)statement.append(document.createTextNode(' '));
  const span=document.createElement('span');span.className='reveal-word';span.textContent=word;span.setAttribute('aria-hidden','true');statement.append(span);return span;
});
const statementReduce=matchMedia('(prefers-reduced-motion:reduce)');
const statementRunway=document.createElement('div');statementRunway.className='statement-runway';
const statementPin=document.createElement('div');statementPin.className='statement-pin';
statement.before(statementRunway);statementRunway.append(statementPin);
const statementSub=statement.nextElementSibling;statementPin.append(statement);
if(statementSub?.classList.contains('problem-sub'))statementPin.append(statementSub);
function measureStatement(){
 const top=Math.max(24,Math.min(120,innerHeight*.13));
 statementRunway.style.setProperty('--statement-top',top+'px');
 statementRunway.style.setProperty('--statement-height',statementPin.offsetHeight+'px');
 statementRunway.classList.toggle('is-pinned',statementPin.offsetHeight<innerHeight-top-32);
}
measureStatement();
let revealFrame=0,lastStatementProgress=-1;
function paintStatement(){
  revealFrame=0;
  const pinned=statementRunway.classList.contains('is-pinned');
  const distance=pinned?statementRunway.offsetHeight-statementPin.offsetHeight:Math.max(innerHeight*.9,statement.offsetHeight);
  const start=pinned?parseFloat(statementRunway.style.getPropertyValue('--statement-top')):innerHeight*.9;
  const progress=Math.max(0,Math.min(1,(start-(pinned?statementRunway:statement).getBoundingClientRect().top)/distance));
  if(progress===lastStatementProgress)return;lastStatementProgress=progress;
  revealWords.forEach((word,index)=>{
    const amount=Math.max(0,Math.min(1,progress*(revealWords.length+2)-index));
    const from=[133,137,132],to=[22,28,24];
    word.style.color='rgb('+from.map((channel,i)=>Math.round(channel+(to[i]-channel)*amount)).join(',')+')';
  });
}
function scheduleReveal(){if(!revealFrame)revealFrame=requestAnimationFrame(paintStatement)}
addEventListener('scroll',scheduleReveal,{passive:true});addEventListener('resize',()=>{measureStatement();scheduleReveal()});statementReduce.addEventListener('change',()=>{measureStatement();scheduleReveal()});
document.fonts.ready.then(()=>{measureStatement();scheduleReveal()});paintStatement();
})();
