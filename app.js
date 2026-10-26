const root=document.getElementById('projects');
function node(tag,text,cls){const el=document.createElement(tag);if(text)el.textContent=text;if(cls)el.className=cls;return el;}
for(const [index,p] of window.portfolioProjects.entries()){
 const card=node('article',null,'project'+(index===0?' featured':''));
 if(p.cover){const img=node('img');img.src=p.cover;img.alt=p.title+'：原作品集图片';img.className='cover';img.loading='lazy';card.append(img);}else{const c=node('div',null,'text-cover');c.append(node('span',p.title.includes('VR')?'VR / MULTIPLAYER':'REALTIME / VFX'),node('small','演示待补充'));card.append(c);}
 const body=node('div',null,'body');body.append(node('span',String(index+1).padStart(2,'0')+' / '+p.category,'meta'),node('h3',p.title),node('p',p.role,'role'),node('p',p.description));const tags=node('div',null,'tags');p.tags.forEach(t=>tags.append(node('span',t,'tag')));body.append(tags);
 const d=node('details');d.append(node('summary','展开项目说明'+(p.images.length?'与原站图片':'')));p.details.forEach(t=>d.append(node('p',t)));
 if(p.video){const v=node('video');v.src=p.video;v.controls=true;v.preload='none';v.style.width='100%';v.setAttribute('aria-label',p.title+'演示');d.append(v);}
 const gallery=node('div',null,'gallery');p.images.forEach((src,i)=>{const a=node('a');a.href=src;a.target='_blank';a.rel='noopener';a.setAttribute('aria-label','查看'+p.title+'图片 '+(i+1)+' 原图');const img=node('img');img.src=src;img.alt=p.title+' · 原站图片 '+(i+1);img.loading='lazy';a.append(img);gallery.append(a);});d.append(gallery);if(p.note)d.append(node('p',p.note,'note'));body.append(d);card.append(body);root.append(card);
}

const reel=document.querySelector('.hero-media video');
const reelToggle=document.querySelector('.reel-toggle');
if(reel && reelToggle){
 const updateReelToggle=()=>{reelToggle.textContent=reel.paused?'播放动效':'暂停动效';reelToggle.setAttribute('aria-label',reel.paused?'播放背景视频':'暂停背景视频');};
 reel.addEventListener('play',updateReelToggle);
 reel.addEventListener('pause',updateReelToggle);
 reelToggle.addEventListener('click',()=>{if(reel.paused){reel.play().catch(updateReelToggle);}else{reel.pause();}});
 if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){reel.autoplay=false;reel.pause();}
 updateReelToggle();
}
