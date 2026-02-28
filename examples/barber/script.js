const menuBtn=document.getElementById('menuBtn');
const menu=document.getElementById('menu');
if(menuBtn&&menu){menuBtn.addEventListener('click',()=>menu.classList.toggle('open'));}

const revealEls=[...document.querySelectorAll('.section, .card, .promo, .faq-item, .photo')];
revealEls.forEach((el,i)=>{el.classList.add('scroll-reveal'); if(i%3===1)el.classList.add('stagger-1'); if(i%3===2)el.classList.add('stagger-2');});
const io=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in-view'); } });
},{threshold:0.15});
revealEls.forEach(el=>io.observe(el));

let lastY=window.scrollY;
window.addEventListener('scroll',()=>{
  const y=window.scrollY;
  const hero=document.querySelector('.hero');
  if(!hero) return;
  if(y>lastY && y>80){ hero.classList.add('fade-out-up'); }
  else { hero.classList.remove('fade-out-up'); }
  lastY=y;
},{passive:true});
