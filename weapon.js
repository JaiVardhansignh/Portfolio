/* MRCING DEV — hero weapon module. Self-contained; safe to omit on any page.
   You never need to edit this file. */
(function(){
"use strict";
var cv=document.getElementById('gl');
if(!cv||typeof THREE==='undefined')return;
var reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
try{
  var renderer=new THREE.WebGLRenderer({canvas:cv,alpha:true,antialias:true});
  renderer.setClearColor(0x000000,0);
  renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.75));
  var scene=new THREE.Scene();
  var camera=new THREE.PerspectiveCamera(38,1,.1,100);
  camera.position.set(0,.2,6.2);

  scene.add(new THREE.HemisphereLight(0x33343c,0x0a0a0a,.95));
  var key=new THREE.DirectionalLight(0xffffff,.8);key.position.set(3,4,5);scene.add(key);
  var rim=new THREE.PointLight(0xff9800,2.4,22);rim.position.set(-3,1.4,2.4);scene.add(rim);
  var fill=new THREE.PointLight(0x9aa4b8,.55,26);fill.position.set(2.5,-2,-3);scene.add(fill);

  var M={
    body:new THREE.MeshStandardMaterial({color:0x15171c,metalness:.9,roughness:.32}),
    dark:new THREE.MeshStandardMaterial({color:0x0c0d10,metalness:.85,roughness:.5}),
    steel:new THREE.MeshStandardMaterial({color:0x3a3d44,metalness:.95,roughness:.25}),
    acc:new THREE.MeshStandardMaterial({color:0x1a1a1a,emissive:0xff9800,emissiveIntensity:1.7,metalness:.6,roughness:.4}),
    lens:new THREE.MeshBasicMaterial({color:0xffb347})
  };
  function box(w,h,d,m){return new THREE.Mesh(new THREE.BoxGeometry(w,h,d),m)}
  function cyl(r,l,m,seg){var c=new THREE.Mesh(new THREE.CylinderGeometry(r,r,l,seg||22),m);c.rotation.z=Math.PI/2;return c}

  var weapon=new THREE.Group(),mag=new THREE.Group();
  function add(mesh,x,y,z,rz){mesh.position.set(x,y,z);if(rz)mesh.rotation.z+=rz;weapon.add(mesh);return mesh}

  add(box(1.7,.34,.22,M.body),0,0,0);
  add(box(1.5,.07,.16,M.dark),0,.235,0);
  add(box(1.05,.2,.2,M.dark),.95,.02,0);
  add(cyl(.055,1.3,M.steel),1.5,.045,0);
  add(cyl(.09,.24,M.dark),2.16,.045,0);
  var ring=new THREE.Mesh(new THREE.TorusGeometry(.1,.018,10,30),M.acc);
  ring.rotation.y=Math.PI/2;add(ring,2.29,.045,0);
  add(box(.7,.26,.18,M.body),-1.25,-.02,0);
  add(box(.12,.36,.2,M.dark),-1.63,-.02,0);
  add(box(.16,.42,.16,M.dark),-.45,-.34,0,.32);
  add(box(.12,.26,.12,M.dark),.82,-.24,0,.15);
  add(box(1.24,.03,.235,M.acc),0,.05,0);
  add(box(.5,.03,.235,M.acc),1.0,-.07,0);
  add(cyl(.09,.52,M.dark),.15,.37,0);
  add(box(.06,.12,.14,M.steel),0,.3,0);
  add(box(.06,.12,.14,M.steel),.32,.3,0);
  add(cyl(.075,.02,M.lens),.42,.37,0);
  add(box(.2,.06,.06,M.steel),-.85,.27,0);
  var m1=box(.16,.44,.14,M.dark);m1.rotation.z=.12;mag.add(m1);
  var m2=box(.15,.3,.13,M.body);m2.rotation.z=.3;m2.position.set(-.07,-.33,0);mag.add(m2);
  var m3=box(.165,.04,.145,M.acc);m3.rotation.z=.12;m3.position.set(-.01,-.1,0);mag.add(m3);
  mag.position.set(.15,-.35,0);weapon.add(mag);
  weapon.rotation.y=-.5;weapon.rotation.z=-.03;
  scene.add(weapon);

  /* smoke + embers */
  function softTex(){
    var c=document.createElement('canvas');c.width=c.height=64;
    var g=c.getContext('2d'),gr=g.createRadialGradient(32,32,0,32,32,32);
    gr.addColorStop(0,'rgba(255,255,255,.9)');gr.addColorStop(1,'rgba(255,255,255,0)');
    g.fillStyle=gr;g.fillRect(0,0,64,64);
    return new THREE.CanvasTexture(c);
  }
  var tex=softTex();
  function makeParticles(n,size,color,op,area){
    var pos=new Float32Array(n*3),vel=[];
    for(var i=0;i<n;i++){
      pos[i*3]=area.x+(Math.random()-.5)*area.w;
      pos[i*3+1]=area.y+(Math.random()-.5)*area.h;
      pos[i*3+2]=(Math.random()-.5)*1.2;
      vel.push(.0015+Math.random()*.003);
    }
    var g=new THREE.BufferGeometry();
    g.setAttribute('position',new THREE.BufferAttribute(pos,3));
    var p=new THREE.Points(g,new THREE.PointsMaterial({map:tex,size:size,transparent:true,opacity:op,color:color,depthWrite:false,blending:THREE.AdditiveBlending}));
    scene.add(p);return{p:p,pos:pos,vel:vel,n:n,area:area};
  }
  var smoke=makeParticles(70,.55,0x8d8d8d,.14,{x:1.6,y:-.2,w:2.6,h:2.4});
  var embers=makeParticles(46,.12,0xff9800,.55,{x:.4,y:-.4,w:4.2,h:2.6});
  function stepParticles(s,wind){
    for(var i=0;i<s.n;i++){
      s.pos[i*3+1]+=s.vel[i];
      s.pos[i*3]+=wind*(.4+s.vel[i]*80);
      if(s.pos[i*3+1]>1.9){s.pos[i*3+1]=-1.4;s.pos[i*3]=s.area.x+(Math.random()-.5)*s.area.w}
    }
    s.p.geometry.attributes.position.needsUpdate=true;
  }

  var tmx=0,tmy=0,lastMx=0,t=0,heroVisible=true;
  addEventListener('mousemove',function(e){tmx=(e.clientX/innerWidth-.5)*2;tmy=(e.clientY/innerHeight-.5)*2},{passive:true});
  new IntersectionObserver(function(en){heroVisible=en[0].isIntersecting},{threshold:0}).observe(cv);

  function resize3(){
    var w=cv.clientWidth,h=cv.clientHeight;
    renderer.setSize(w,h,false);
    camera.aspect=w/h;camera.updateProjectionMatrix();
    weapon.scale.setScalar(w/h<.95?.62:1);
  }
  addEventListener('resize',resize3,{passive:true});resize3();

  var hero=document.querySelector('.hero'),heroIn=document.querySelector('.hero-in');
  function heroH(){return (hero&&hero.offsetHeight)||1}

  function loop(){
    t+=.006;
    var mvx=(tmx-lastMx);lastMx=tmx;
    var heroProg=Math.min(1,Math.max(0,scrollY/(heroH()*.9)));
    if(heroVisible&&!document.hidden){
      weapon.rotation.y+=((-.5+tmx*.28+Math.sin(t*.3)*.04)-weapon.rotation.y)*.045;
      weapon.rotation.x+=((.05+tmy*.13)-weapon.rotation.x)*.045;
      weapon.position.y=Math.sin(t*.8)*.06;
      mag.position.y=-.35+tmy*.045;
      mag.rotation.z=tmy*.05;
      rim.position.x=-3+tmx*2.2;
      rim.position.y=1.4-tmy*1.6;
      rim.intensity=2.4+Math.sin(t*2.1)*.25;
      stepParticles(smoke,mvx*.6);
      stepParticles(embers,mvx*.9);
      camera.position.z=6.2+heroProg*2.8;
      camera.position.y=.2-heroProg*1.1;
      camera.lookAt(0,0,0);
      if(heroIn){heroIn.style.transform='translateY('+(heroProg*-60)+'px)';heroIn.style.opacity=1-heroProg*1.15}
      renderer.render(scene,camera);
    }
    requestAnimationFrame(loop);
  }
  if(!reduced)requestAnimationFrame(loop);
  else{resize3();renderer.render(scene,camera)}
}catch(e){cv.style.display='none'}
})();
