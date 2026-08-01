/* MRCING DEV studio site — render engine. You never need to edit this file. */
(function(){
"use strict";
var reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
function $(s,c){return (c||document).querySelector(s)}
function $$(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s))}
function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(m){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]})}

/* mode carried across pages via ?mode= */
var params = new URLSearchParams(location.search);
var MODE = params.get('mode')||'all';
function applyMode(m){
  MODE=m;
  document.body.classList.remove('mode-player','mode-recruiter');
  if(m==='player')document.body.classList.add('mode-player');
  if(m==='recruiter')document.body.classList.add('mode-recruiter');
  $$('.mode').forEach(function(b){b.classList.toggle('on',b.dataset.mode===m)});
  $$('a[data-carrymode]').forEach(function(a){
    var u=new URL(a.getAttribute('href'),location.href);
    if(m==='all')u.searchParams.delete('mode');else u.searchParams.set('mode',m);
    a.setAttribute('href',u.pathname.split('/').pop()+u.search+u.hash);
  });
}

/* ---------- shared chrome ---------- */
function initChrome(){
  var f=$('#fps'),frames=0,last=performance.now();
  function loop(now){
    frames++;
    if(now-last>=500){if(f)f.textContent=Math.min(999,Math.round(frames*1000/(now-last)));frames=0;last=now}
    requestAnimationFrame(loop);
  }
  if(!reduced)requestAnimationFrame(loop);else if(f)f.textContent='60';
  var sf=$('#sfill'),pc=$('#pct'),t=false;
  function onS(){if(t)return;t=true;requestAnimationFrame(function(){
    var m=document.documentElement.scrollHeight-innerHeight;
    var p=m>0?Math.round(scrollY/m*100):0;
    if(sf)sf.style.width=p+'%';if(pc)pc.textContent=p+'%';t=false;
  })}
  addEventListener('scroll',onS,{passive:true});onS();
  var io=new IntersectionObserver(function(es){es.forEach(function(e){
    if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}
  })},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
  $$('.rv').forEach(function(el){io.observe(el)});
  var cio=new IntersectionObserver(function(es){es.forEach(function(e){
    if(!e.isIntersecting)return;cio.unobserve(e.target);
    var el=e.target,target=+el.dataset.count,suf=el.dataset.suffix||'';
    if(reduced){el.textContent=target+suf;return}
    var start=null;
    function step(ts){if(!start)start=ts;var k=Math.min(1,(ts-start)/1400),ease=1-Math.pow(1-k,3);
      el.textContent=Math.round(target*ease)+suf;if(k<1)requestAnimationFrame(step)}
    requestAnimationFrame(step);
  })},{threshold:.6});
  $$('[data-count]').forEach(function(el){cio.observe(el)});
}

/* ---------- hero backdrop: grid + stars + mouse light ---------- */
function initHeroFX(){
  var cv=$('#bgfx');if(!cv)return;
  var ctx=cv.getContext('2d'),W,H,t=0,tmx=0,tmy=0,stars=[];
  function size(){var d=Math.min(devicePixelRatio||1,2);W=cv.clientWidth;H=cv.clientHeight;cv.width=W*d;cv.height=H*d;ctx.setTransform(d,0,0,d,0,0)}
  function seed(){stars=[];for(var i=0;i<44;i++)stars.push({x:Math.random(),y:Math.random(),z:.3+Math.random()*.7,s:.5+Math.random()*1.4,o:.2+Math.random()*.5,or:Math.random()<.3})}
  addEventListener('resize',function(){size();seed()},{passive:true});
  addEventListener('mousemove',function(e){tmx=(e.clientX/innerWidth-.5)*2;tmy=(e.clientY/innerHeight-.5)*2},{passive:true});
  size();seed();
  var vis=true;new IntersectionObserver(function(en){vis=en[0].isIntersecting},{threshold:0}).observe(cv);
  function draw(){
    ctx.clearRect(0,0,W,H);
    var lx=W*(.5+tmx*.12),ly=H*(.42+tmy*.1);
    var g=ctx.createRadialGradient(lx,ly,0,lx,ly,Math.max(W,H)*.6);
    g.addColorStop(0,'rgba(255,152,0,0.07)');g.addColorStop(.5,'rgba(255,120,0,0.025)');g.addColorStop(1,'rgba(0,0,0,0)');
    ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
    var horizon=H*.6,vpx=W*.5-tmx*W*.02,vpy=horizon-tmy*H*.012;
    ctx.strokeStyle='rgba(255,152,0,0.05)';ctx.lineWidth=1;
    for(var i=-8;i<=8;i++){ctx.beginPath();ctx.moveTo(vpx,vpy);ctx.lineTo(W*.5+i*W*.17,H+40);ctx.stroke()}
    var sc=(t*.3)%1;
    for(var r=0;r<8;r++){var f2=(r+sc)/8,y=vpy+(H-vpy+40)*f2*f2;ctx.globalAlpha=.03+f2*.07;ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke()}
    ctx.globalAlpha=1;
    for(var j=0;j<stars.length;j++){var p=stars[j];
      p.y-=.0002*p.z;if(p.y<-.02){p.y=1.02;p.x=Math.random()}
      var tw=.7+.3*Math.sin(t*2+p.x*40);
      ctx.beginPath();ctx.arc(p.x*W+tmx*p.z*24,p.y*H+tmy*p.z*16,p.s*p.z,0,6.283);
      ctx.fillStyle=p.or?'rgba(255,152,0,'+(p.o*tw)+')':'rgba(210,210,210,'+(p.o*.5*tw)+')';
      ctx.fill();
    }
  }
  function loop(){t+=.006;if(vis&&!document.hidden)draw();requestAnimationFrame(loop)}
  if(!reduced)requestAnimationFrame(loop);else draw();
}

/* ---------- shared bits ---------- */
function badge(p){return '<span class="badge '+esc(p.statusType||'prototype')+'">'+esc(p.status)+'</span>'}
function tagrow(tags){return '<div class="tagrow">'+ (tags||[]).map(function(t){return '<span class="tag">'+esc(t)+'</span>'}).join('') +'</div>'}
function cover(p){
  if(p.cover)return '<img src="'+esc(p.cover)+'" alt="'+esc(p.title)+'" loading="lazy">';
  return '<div class="ph">COVER SLOT — set cover:"images/..." for '+esc(p.title)+' in site-data.js</div>';
}

/* ---------- HOME ---------- */
function renderHome(){
  var grid=$('#pgrid');if(!grid)return;
  grid.innerHTML=STUDIO.projects.map(function(p){
    return '<a class="pcard rv" data-carrymode href="project.html?id='+encodeURIComponent(p.id)+'">'
      +'<div class="pcover">'+cover(p)+badge(p)+'</div>'
      +'<div class="pbody"><h3>'+esc(p.title)+'</h3>'
      +'<div class="pmeta">'+esc((p.platforms||[]).join(' / '))+' · '+esc(p.engine||'')+' · '+esc(p.role||'')+'</div>'
      +'<p class="pshort">'+esc(p.short)+'</p>'+tagrow(p.tags)+'</div></a>';
  }).join('');
  var tl=$('#journey');
  if(tl)tl.innerHTML=STUDIO.journey.map(function(j){
    return '<div class="tl-item"><div class="yr">'+esc(j.yr)+'</div><h3>'+esc(j.title)+'</h3><p>'+esc(j.text)+'</p></div>';
  }).join('');
  var nm=$('#nums');
  if(nm)nm.innerHTML=STUDIO.stats.map(function(s,i){
    return '<div class="num rv d'+(i%4)+'"><div class="v" data-count="'+s.value+'" data-suffix="'+esc(s.suffix||'')+'">0</div><div class="l">'+esc(s.label)+'</div></div>';
  }).join('');
  var cl=$('#contactLinks');
  if(cl){
    var out=STUDIO.email?'<a class="btn p" href="mailto:'+esc(STUDIO.email)+'">▶ Email Me</a>':'';
    STUDIO.socials.forEach(function(s){if(s.url)out+='<a class="mini" target="_blank" rel="noopener" href="'+esc(s.url)+'">'+esc(s.label)+' ↗</a>'});
    if(STUDIO.resume)out+='<a class="mini" href="'+esc(STUDIO.resume)+'">RESUME ↓</a>';
    cl.innerHTML=out;
  }
  var dn=$('#discordNote');
  if(dn)dn.textContent=STUDIO.discord?('DISCORD // '+STUDIO.discord):'';
  var rb=$('#resumeBtn');
  if(rb){if(STUDIO.resume)rb.href=STUDIO.resume;else rb.style.display='none'}
  if(STUDIO.heroImage){var hi=$('.hero-img');if(hi)hi.style.backgroundImage='url("'+STUDIO.heroImage+'")'}
}

/* ---------- PROJECT DETAIL ---------- */
function sec(aud,label,inner){
  if(!inner)return '';
  return '<section class="pd-section" data-aud="'+esc(aud||'both')+'"><div class="slabel">'+esc(label)+'</div>'+inner+'</section>';
}
function ptlist(points){
  if(!points||!points.length)return '';
  return '<ul class="ptlist rv in">'+points.map(function(x){return '<li>'+esc(x)+'</li>'}).join('')+'</ul>';
}
var LB={imgs:[],i:0};
function renderProject(){
  var mount=$('#pdmount');if(!mount)return;
  var id=params.get('id');
  var p=null;STUDIO.projects.forEach(function(x){if(x.id===id)p=x});
  if(!p){location.replace('index.html');return}
  document.title=p.title+' — '+STUDIO.name;

  var html='';
  html+='<div class="pd-banner"><div class="pd-bg '+(p.cover?'':'noimg')+'" '+(p.cover?'style="background-image:url(\''+esc(p.cover)+'\')"':'')+'></div><div class="pd-fade"></div>'
    +'<div class="pd-head"><a class="backlink" data-carrymode href="index.html#work">← ALL PROJECTS</a>'
    +'<div class="pd-title">'+esc(p.title)+'</div>'
    +'<div class="pd-metaline"><b>'+esc(p.status)+'</b> · '+esc((p.platforms||[]).join(' / '))+' · '+esc(p.engine||'')+' · '+esc(p.role||'')+'</div>'
    +'<div class="pd-tags">'+(p.tags||[]).map(function(t){return '<span class="tag">'+esc(t)+'</span>'}).join('')+'</div>'
    +'</div></div>';

  html+='<div class="modes"><span class="lbl">VIEW:</span>'
    +'<button class="mode" data-mode="all">ALL</button>'
    +'<button class="mode" data-mode="player">PLAYER</button>'
    +'<button class="mode" data-mode="recruiter">RECRUITER</button></div>';

  html+='<div style="max-width:1180px;margin:0 auto;padding:0 24px">';

  if(p.overview)html+=sec('both','// OVERVIEW','<p class="prose">'+esc(p.overview)+'</p>');
  if(p.story&&p.story.text)html+=sec(p.story.aud,'// STORY','<p class="prose">'+esc(p.story.text)+'</p>');
  if(p.gameplay&&p.gameplay.points&&p.gameplay.points.length)html+=sec(p.gameplay.aud,'// GAMEPLAY FEATURES',ptlist(p.gameplay.points));

  if(p.videos&&p.videos.length){
    var vids=p.videos.filter(function(v){return v.src});
    if(vids.length){
      var vh='<div class="vids">'+vids.map(function(v){
        return '<div class="vid" data-aud="'+esc(v.aud||'both')+'"><video controls preload="metadata" src="'+esc(v.src)+'"></video><div class="vt">'+esc(v.title||'')+'</div></div>';
      }).join('')+'</div>';
      html+=sec('both','// VIDEOS',vh);
    }
  }

  if(p.galleries&&p.galleries.length){
    var gh='';
    p.galleries.forEach(function(g){
      if(!g.images||!g.images.length)return;
      gh+='<div data-aud="'+esc(g.aud||'both')+'"><div class="gal-title">'+esc(g.title)+'</div><div class="gal">'
        +g.images.map(function(im,ix){
          return '<button class="gitem" data-g="'+esc(g.title)+'" data-ix="'+ix+'"><img src="'+esc(im.src)+'" alt="'+esc(im.caption||'')+'" loading="lazy"></button>';
        }).join('')+'</div></div>';
    });
    if(gh)html+=sec('both','// GALLERY',gh);
  }

  if(p.downloads&&p.downloads.length){
    var dh='<div class="dl">'+p.downloads.map(function(d){
      var btn=d.url?'<a class="dl-btn" href="'+esc(d.url)+'">DOWNLOAD ↓</a>':'<span class="dl-btn soon">COMING SOON</span>';
      var meta=[d.version,d.size,d.requirements].filter(Boolean).join(' · ');
      return '<div class="dlrow"><div class="di"><div class="p">'+esc(d.platform)+'</div><div class="m">'+esc(meta)+'</div></div>'+btn
        +(d.notes?'<div class="note2">'+esc(d.notes)+'</div>':'')+'</div>';
    }).join('')+'</div>';
    html+=sec('player','// DOWNLOAD',dh);
  }

  if(p.tech&&p.tech.groups&&p.tech.groups.length){
    var th='<div class="tech-groups">'+p.tech.groups.map(function(g){
      return '<div class="tg"><h4>'+esc(g.h)+'</h4>'+ptlist(g.points)+'</div>';
    }).join('')+'</div>';
    html+=sec(p.tech.aud||'recruiter','// TECHNICAL BREAKDOWN',th);
  }
  if(p.challenges&&p.challenges.points&&p.challenges.points.length)html+=sec(p.challenges.aud||'recruiter','// CHALLENGES',ptlist(p.challenges.points));
  if(p.lessons&&p.lessons.points&&p.lessons.points.length)html+=sec(p.lessons.aud||'both','// LESSONS LEARNED',ptlist(p.lessons.points));
  if(p.roadmap&&p.roadmap.points&&p.roadmap.points.length)html+=sec(p.roadmap.aud||'player','// ROADMAP',ptlist(p.roadmap.points));
  if(p.devnotes)html+=sec('both','// DEVELOPER NOTES','<p class="prose">'+esc(p.devnotes)+'</p>');

  html+='</div>';
  mount.innerHTML=html;

  /* lightbox wiring */
  var galleries={};
  (p.galleries||[]).forEach(function(g){galleries[g.title]=(g.images||[])});
  $$('.gitem',mount).forEach(function(b){
    b.addEventListener('click',function(){
      LB.imgs=galleries[b.dataset.g]||[];LB.i=+b.dataset.ix;lbShow();
      $('#lb').classList.add('open');document.body.style.overflow='hidden';
    });
  });
  $$('.mode',mount).forEach(function(b){b.addEventListener('click',function(){applyMode(b.dataset.mode)})});
  applyMode(MODE);
}
function lbShow(){
  var im=LB.imgs[LB.i];if(!im)return;
  var img=$('#lbimg');img.classList.remove('zoomed');img.src=im.src;
  $('#lbcap').textContent=im.caption||'';
  $('#lbcount').textContent=(LB.i+1)+' / '+LB.imgs.length;
}
function lbClose(){$('#lb').classList.remove('open');document.body.style.overflow=''}
function initLightbox(){
  var lb=$('#lb');if(!lb)return;
  $('#lbx').addEventListener('click',lbClose);
  lb.addEventListener('click',function(e){if(e.target===lb)lbClose()});
  $('#lbprev').addEventListener('click',function(){LB.i=(LB.i-1+LB.imgs.length)%LB.imgs.length;lbShow()});
  $('#lbnext').addEventListener('click',function(){LB.i=(LB.i+1)%LB.imgs.length;lbShow()});
  $('#lbimg').addEventListener('click',function(){this.classList.toggle('zoomed')});
  addEventListener('keydown',function(e){
    if(!lb.classList.contains('open'))return;
    if(e.key==='Escape')lbClose();
    if(e.key==='ArrowLeft'){LB.i=(LB.i-1+LB.imgs.length)%LB.imgs.length;lbShow()}
    if(e.key==='ArrowRight'){LB.i=(LB.i+1)%LB.imgs.length;lbShow()}
  });
}

/* ---------- boot ---------- */
document.addEventListener('DOMContentLoaded',function(){
  var hb=$('#hudBrand');if(hb)hb.innerHTML='<b>'+esc(STUDIO.name).toUpperCase()+'</b> // '+esc(STUDIO.brand).toUpperCase();
  renderHome();
  renderProject();
  initChrome();
  initHeroFX();
  initLightbox();
  applyMode(MODE);
});
})();
