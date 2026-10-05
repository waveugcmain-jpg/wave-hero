// Responsive creator assets preserve each complete supplied composition.
const postSources={"creator-post-philips":{"240":"assets/optimized/creator-post-philips-240.c76d466d7b.webp","480":"assets/optimized/creator-post-philips-480.bce85090f5.webp"},"creator-post-zepto":{"240":"assets/optimized/creator-post-zepto-240.ac90e77558.webp","480":"assets/optimized/creator-post-zepto-480.7a0b1b0860.webp"},"creator-post-aqualogica":{"240":"assets/optimized/creator-post-aqualogica-240.f286c22b21.webp","480":"assets/optimized/creator-post-aqualogica-480.504e5c79ac.webp"},"creator-post-tier-list":{"240":"assets/optimized/creator-post-tier-list-240.d67cb4d850.webp","480":"assets/optimized/creator-post-tier-list-480.9319e60d40.webp"},"creator-post-plix":{"240":"assets/optimized/creator-post-plix-240.7538cbaa22.webp","480":"assets/optimized/creator-post-plix-480.6ccbdb6302.webp"},"creator-post-forest":{"240":"assets/optimized/creator-post-forest-240.dcedca9ec4.webp","480":"assets/optimized/creator-post-forest-480.3fd67196aa.webp"}};

const creatorPosts=[
 {file:'creator-post-philips',label:'A new creator. A new angle.',alt:'Supplied Instagram-style creator post featuring a Philips trimmer'},
 {file:'creator-post-zepto',label:'Your brand. In more feeds.',alt:'Supplied Instagram-style creator post featuring the Zepto app'},
 {file:'creator-post-aqualogica',label:'More creators. More stories.',alt:'Supplied Instagram-style creator post featuring Aqualogica sunscreen'},
 {file:'creator-post-tier-list',label:'Different hooks. Daily posts.',alt:'Supplied Instagram-style creator post comparing shaving brands'},
 {file:'creator-post-plix',label:'More voices. One brand.',alt:'Supplied Instagram-style creator post featuring a Plix drink'},
 {file:'creator-post-forest',label:'New angles. Every day.',alt:'Supplied Instagram-style creator post featuring the Forest focus app'}
];
const media=document.querySelector('.media'),menu=document.querySelector('.menu'),nav=document.querySelector('.links'),dialog=document.querySelector('dialog');
const orbitStage=document.querySelector('.orbit-stage');
const orbitCards=Array.from({length:18},(_,i)=>{
 const post=creatorPosts[i%creatorPosts.length],card=document.createElement('figure');
 card.className='tile orbit-card creator-post';if(i>=creatorPosts.length)card.setAttribute('aria-hidden','true');
 const image=document.createElement('img');const sources=postSources[post.file];image.src=sources[480];image.srcset=sources[240]+' 240w, '+sources[480]+' 480w';image.sizes='(max-width:600px) 134px, (max-width:980px) 170px, (min-width:1600px) 210px, 190px';image.fetchPriority=i===0?'high':'auto';image.alt=post.alt;image.width=941;image.height=1672;image.decoding='async';image.draggable=false;
 const caption=document.createElement('figcaption'),title=document.createElement('strong'),detail=document.createElement('span');
 title.textContent=post.label;detail.textContent='The creator army / Wave';caption.append(title,detail);card.append(image,caption);orbitStage.append(card);return card;
});
let orbitWidth=media.clientWidth,orbitPhase=0,lastOrbitTime=0,heroFrame=0,heroVisible=false;
new ResizeObserver(()=>{orbitWidth=media.clientWidth}).observe(media);
function orbitFrame(time){
 const delta=lastOrbitTime?Math.min(time-lastOrbitTime,64):0;lastOrbitTime=time;
 orbitPhase=(orbitPhase+delta*2*Math.PI/76000)%(2*Math.PI);
 const mobile=orbitWidth<600,radius=mobile?Math.max(390,orbitWidth*.85):Math.max(500,Math.min(720,orbitWidth*.43)),arc=mobile?35:60;
 orbitCards.forEach((card,i)=>{
  const angle=orbitPhase+i*2*Math.PI/orbitCards.length,depth=Math.cos(angle),side=Math.sin(angle);
  const x=side*radius,y=-depth*arc+side*8,z=(depth-1)*140;
  card.style.transform='translate(-50%,-50%) translate3d('+x.toFixed(2)+'px,'+y.toFixed(2)+'px,'+z.toFixed(2)+'px) rotateY('+(-side*62).toFixed(2)+'deg) rotateZ('+(side*5).toFixed(2)+'deg)';
  card.style.opacity=String(Math.max(0,Math.min(1,(depth+.08)*3)));
  card.style.zIndex=String(Math.round((depth+1)*100));
 });
 heroFrame=requestAnimationFrame(orbitFrame);
}
function syncHero(){cancelAnimationFrame(heroFrame);lastOrbitTime=0;if(heroVisible&&!document.hidden)heroFrame=requestAnimationFrame(orbitFrame)}
new IntersectionObserver(entries=>{heroVisible=entries[0].isIntersecting;syncHero()}).observe(media);
document.addEventListener('visibilitychange',syncHero);
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');nav.classList.toggle('open',open);menu.textContent=open?'×':'☰'});
function closeMenu(){menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');nav.classList.remove('open');menu.textContent='☰'}
function show(title,copy,label='Hero prototype'){document.querySelector('#dialog-title').textContent=title;document.querySelector('#dialog-copy').textContent=copy;document.querySelector('#dialog-label').textContent=label;dialog.showModal();closeMenu()}
document.querySelectorAll('[data-footer-preview]').forEach(button=>button.addEventListener('click',()=>show(button.dataset.footerPreview,'This page is not available yet.','Coming soon')));
document.querySelectorAll('[data-work-choice]').forEach(link=>link.addEventListener('click',()=>{const choice=document.getElementById(link.dataset.workChoice);choice.checked=true;choice.dispatchEvent(new Event('change',{bubbles:true}));}));
// Set this single value when the owner supplies the scheduling destination.
const BOOKING_URL='https://calendly.com/founder-waveugc/new-meeting';
document.querySelectorAll('.book').forEach(button=>button.addEventListener('click',()=>{loadCalendly();closeMenu();document.querySelector('#book-a-call').scrollIntoView({behavior:'instant',block:'start'});document.querySelector('#booking-title').focus({preventScroll:true})}));
document.querySelectorAll('[data-section]').forEach(button=>button.addEventListener('click',()=>show(button.dataset.section,'This section will be designed next. This preview covers the navigation and hero section.')));
document.querySelector('#playbook').addEventListener('click',()=>document.querySelector('#our-playbook').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'}));
document.querySelector('#creative-link').addEventListener('click',()=>{closeMenu();media.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'center'})});
document.querySelector('#close-dialog').addEventListener('click',()=>dialog.close());document.querySelector('.done').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){closeMenu();menu.focus()}});

// Color-only reveal is tied to reading position, with no forced scrolling or pinning.
const statement=document.querySelector('#problem-statement');
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
document.querySelector('a[href="#why-wave"]').addEventListener('click',closeMenu);


// Animate meaningful parts of each existing SVG, keeping labels stable.
(()=>{
const arts=[...document.querySelectorAll('.playbook-art')];
const animate=(el,type,delay=0)=>{if(!el)return;el.classList.add('motion-item','motion-'+type);el.style.setProperty('--beat',delay+'s')};
arts.forEach((svg,i)=>{
 const scene=svg.firstElementChild;
 const nodes=[...scene.children];
 if(i===0){nodes.filter(n=>n.tagName.toLowerCase()==='rect'&&n.getAttribute('height')==='29').forEach((n,j)=>animate(n,'pulse',j*.6));nodes.filter(n=>n.tagName.toLowerCase()==='rect'&&n.getAttribute('height')==='5').forEach((n,j)=>animate(n,'scan',j*.6));animate(scene.querySelector('g'),'rise',.8)}
 if(i===1){scene.querySelectorAll('path[stroke-dasharray]').forEach(n=>animate(n,'flow'));scene.querySelectorAll('circle').forEach((n,j)=>animate(n,'pulse',j*.25))}
 if(i===2){[...scene.children].filter(n=>n.tagName.toLowerCase()==='g').forEach((n,j)=>animate(n,'rise',j*.6));nodes.filter(n=>n.tagName.toLowerCase()==='rect'&&n.getAttribute('width')==='13').forEach((n,j)=>animate(n,'pulse',j*.35))}
 if(i===3){animate(scene.querySelector('path[stroke="#1b43f5"]'),'draw');animate(scene.querySelector('circle'),'pulse',2.1)}
 if(i===4){[...scene.children].filter(n=>n.tagName.toLowerCase()==='g').forEach((n,j)=>animate(n,j?'rise':'pulse',j*.8));scene.querySelectorAll('path[stroke-dasharray]').forEach(n=>animate(n,'flow'))}
 if(i===5){animate(scene.querySelector('path[stroke="#caff83"]'),'draw');[...scene.children].filter(n=>n.tagName.toLowerCase()==='g').forEach((n,j)=>animate(n,'rise',j*.55))}
});
const artObserver=new IntersectionObserver(entries=>entries.forEach(entry=>entry.target.classList.toggle('is-visible',entry.isIntersecting)));document.querySelectorAll('.playbook-illustration').forEach(el=>artObserver.observe(el));
})();


// Progressive enhancement: content remains fully visible without JavaScript.
(()=>{
 const section=document.querySelector('#campaign');
 const stage=section.querySelector('.campaign-stage');
 const cards=[...section.querySelectorAll('.campaign-card')];
 const desktop=matchMedia('(min-width:800px) and (min-height:600px)');
 const reduce=matchMedia('(prefers-reduced-motion:reduce)');
 let frame=0, geometry=[],lastCampaignProgress=-1;
 const clamp=v=>Math.max(0,Math.min(1,v));
 function paint(){
  frame=0;
  if(!desktop.matches){
   cards.forEach(card=>{const t=clamp((innerHeight*.94-(stage.getBoundingClientRect().top+card.offsetTop))/(innerHeight*.32));card.style.opacity=String(.15+.85*t);card.style.transform='translateY('+((1-t)*32)+'px) scale('+(.96+.04*t)+')'});
   return;
  }
  const progress=clamp(-section.getBoundingClientRect().top/(section.offsetHeight-stage.offsetHeight));
  if(progress===lastCampaignProgress)return;lastCampaignProgress=progress;
  cards.forEach((card,i)=>{
   const delay=[0,.07,.15,.22,.30,.37][i];
   const t=progress<.001?0:clamp((progress-delay)/.43);
   const eased=1-Math.pow(1-t,3);
   const g=geometry[i];
   const scale=.16+.84*eased;
   card.style.transform='translate3d('+(g.x*(1-eased)).toFixed(2)+'px,'+(g.y*(1-eased)).toFixed(2)+'px,0) scale('+scale.toFixed(4)+') rotate('+((i%2?12:-12)*(1-eased)).toFixed(2)+'deg)';
   card.style.opacity=String(clamp(t*5));
  });
 }
 function schedule(){if(!frame)frame=requestAnimationFrame(paint)}
 function measure(){
  lastCampaignProgress=-1;const active=desktop.matches;
  section.classList.toggle('is-scrubbed',active);
  cards.forEach(card=>{card.style.removeProperty('transform');card.style.removeProperty('opacity')});
  if(active){geometry=cards.map(card=>({x:stage.clientWidth/2-card.offsetLeft-card.offsetWidth/2,y:stage.clientHeight/2-card.offsetTop-card.offsetHeight/2}))}paint();
 }
 addEventListener('scroll',schedule,{passive:true});
 addEventListener('resize',measure);
 desktop.addEventListener('change',measure);reduce.addEventListener('change',measure);
 document.fonts.ready.then(measure);measure();
 document.querySelector('a[href="#campaign"]').addEventListener('click',closeMenu);
})();


// Native sticky cards accumulate in a vertical deck; no wheel interception.
(()=>{
 const list=document.querySelector('.playbook-list');
 const cards=[...list.children];
 const reduce=matchMedia('(prefers-reduced-motion:reduce)');
 let pending=0, tops=[],lastScales=[];
 function paint(){
  pending=0;
  if(!list.classList.contains('is-stacking'))return;
  cards.forEach((card,i)=>{
   const next=cards[i+1];
   const progress=next?Math.max(0,Math.min(1,(innerHeight-next.getBoundingClientRect().top)/(innerHeight-tops[i+1]))):0;
   const scale=(1-.018*progress).toFixed(4);if(lastScales[i]===scale)return;lastScales[i]=scale;card.style.transform='scale('+scale+')';
  });
 }
 function queue(){if(!pending)pending=requestAnimationFrame(paint)}
 function measure(){
  lastScales=[];list.classList.remove('is-stacking');
  cards.forEach(card=>card.style.removeProperty('transform'));
  const gap=innerWidth<=640?8:12;
  const base=innerWidth<=640?12:28;
  // Tall cards stick with their bottom in view, so every paragraph can be read
  // before the next card covers it. Large screens retain visible top edges.
  tops=cards.map((card,i)=>Math.min(base+i*gap,innerHeight-card.offsetHeight-24));
  cards.forEach((card,i)=>{card.style.setProperty('--stack-top',tops[i]+'px');card.style.setProperty('--stack-index',i+1)});
  list.classList.add('is-stacking');paint();
 }
 addEventListener('scroll',queue,{passive:true});addEventListener('resize',measure);
 reduce.addEventListener('change',measure);document.fonts.ready.then(measure);measure();
})();


(()=>{
 const panel=document.querySelector('.strategy-panel'), motion=panel.querySelector('.strategy-motion'), dot=panel.querySelector('.strategy-glow');
 let orbitFrame=0, orbitLast=0, orbitPhase=0, orbitVisible=false;
 function drawOrbit(){
  const w=panel.clientWidth,h=panel.clientHeight,r=24,straightX=w-2*r,straightY=h-2*r,arc=Math.PI*r/2;
  const lengths=[straightX,arc,straightY,arc,straightX,arc,straightY,arc],total=lengths.reduce((a,b)=>a+b,0);
  let d=orbitPhase*total,i=0;while(i<7&&d>lengths[i])d-=lengths[i++];
  let x,y,a=d/r;
  if(i===0){x=r+d;y=0}else if(i===1){x=w-r+r*Math.sin(a);y=r-r*Math.cos(a)}else if(i===2){x=w;y=r+d}else if(i===3){x=w-r+r*Math.cos(a);y=h-r+r*Math.sin(a)}else if(i===4){x=w-r-d;y=h}else if(i===5){x=r-r*Math.sin(a);y=h-r+r*Math.cos(a)}else if(i===6){x=0;y=h-r-d}else{x=r-r*Math.cos(a);y=r-r*Math.sin(a)}
  dot.style.transform='translate3d('+(x-3.5)+'px,'+(y-3.5)+'px,0)';
 }
 function orbitTick(time){orbitFrame=0;if(orbitLast)orbitPhase=(orbitPhase+Math.min(time-orbitLast,64)/14000)%1;orbitLast=time;drawOrbit();orbitFrame=requestAnimationFrame(orbitTick)}
 function orbitSync(){cancelAnimationFrame(orbitFrame);orbitFrame=0;orbitLast=0;if(orbitVisible&&!document.hidden&&!panel.classList.contains('motion-paused'))orbitFrame=requestAnimationFrame(orbitTick)}
 motion.addEventListener('click',()=>{const paused=panel.classList.toggle('motion-paused');motion.setAttribute('aria-pressed',String(paused));motion.textContent=paused?'Play animation':'Pause animation';motion.setAttribute('aria-label',paused?'Play border animation':'Pause border animation');orbitSync()});
 new IntersectionObserver(entries=>{orbitVisible=entries[0].isIntersecting;orbitSync()}).observe(panel);
 new ResizeObserver(drawOrbit).observe(panel);document.addEventListener('visibilitychange',orbitSync);drawOrbit();
 const dock=document.querySelector('.booking-dock');let queued=0;
 function dockPaint(){queued=0;dock.hidden=document.querySelector('dialog').open||nav.classList.contains('open');}
 function dockQueue(){if(!queued)queued=requestAnimationFrame(dockPaint)}
 const dockVisibility=new MutationObserver(dockQueue);dockVisibility.observe(nav,{attributes:true,attributeFilter:['class']});dockVisibility.observe(document.querySelector('dialog'),{attributes:true,attributeFilter:['open']});
 document.querySelector('dialog').addEventListener('close',dockQueue);document.querySelectorAll('.book').forEach(button=>button.addEventListener('click',dockQueue));dockPaint();
 // Restore direct section links after font and sticky-layout measurements settle.
 let userMoved=false; const markMoved=()=>{userMoved=true}; addEventListener('wheel',markMoved,{once:true,passive:true});addEventListener('touchstart',markMoved,{once:true,passive:true});
 document.fonts.ready.then(()=>requestAnimationFrame(()=>{if(location.hash&&!userMoved){const target=document.getElementById(decodeURIComponent(location.hash.slice(1)));target?.scrollIntoView({behavior:'instant',block:'start'})}}));
 // Preserve link copy while ensuring anchored navigation closes on mobile.
 menu.addEventListener('click',()=>requestAnimationFrame(dockQueue));
 document.querySelectorAll('.links a[href^="#"]').forEach(link=>link.addEventListener('click',()=>{closeMenu();dockQueue()}));
})();


// Fetch decorative imagery shortly before its section becomes visible.
const sectionMedia=[[".why-wave",["creator-grid","cta-portraits"]],[".creator-network",["creator-army"]],[".playbook-list",["wave-background","wave-card-3","wave-card-4"]],[".founder-callout",["founder-sunset"]],[".final-cta",["cta-portraits"]],[".wave-footer",["footer-waves"]]],backgroundAssets={"wave-background":"assets/optimized/wave-background.a5dfdeb686.webp","creator-grid":"assets/optimized/creator-grid.6ca06ad4b0.webp","cta-portraits":"assets/optimized/cta-portraits.80cb2d87bd.webp","founder-sunset":"assets/optimized/founder-sunset.4e20ca43c1.webp","footer-waves":"assets/optimized/footer-waves.fcae742aaf.webp","wave-card-3":"assets/optimized/wave-card-3.d7c7637463.webp","wave-card-4":"assets/optimized/wave-card-4.67643031e8.webp","creator-army":"assets/optimized/creator-army.24ecfbda0a.webp"};
const backgroundObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)return;for(const key of entry.target.dataset.media.split(','))entry.target.style.setProperty('--'+key,'url("/'+backgroundAssets[key]+'")');backgroundObserver.unobserve(entry.target)}),{rootMargin:'600px 0px'});
for(const [selector,keys] of sectionMedia){const el=document.querySelector(selector);el.dataset.media=keys.join(',');backgroundObserver.observe(el)}
let calendlyRequested=false;
function loadCalendly(){if(calendlyRequested)return;calendlyRequested=true;const script=document.createElement('script');script.src='https://assets.calendly.com/assets/external/widget.js';script.async=true;document.body.append(script)}
const bookingObserver=new IntersectionObserver(entries=>{if(entries.some(entry=>entry.isIntersecting)){loadCalendly();bookingObserver.disconnect()}},{rootMargin:'800px 0px'});bookingObserver.observe(document.querySelector('#book-a-call'));
function syncPageVisibility(){document.documentElement.classList.toggle('page-hidden',document.hidden)}document.addEventListener('visibilitychange',syncPageVisibility);syncPageVisibility();
