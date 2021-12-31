const abtUsLogo=document.querySelector('.about-us .logo-section img')
const abtUsExplanation=document.querySelector('.about-us .explanation> div')
const aboutUs=document.querySelector('.about-us')
const burgerMenu = document.querySelector('.burger-menu')
const mobileNav = document.querySelector('.mobile-nav')
const mobileNavCloseBtn = document.querySelector('.mobile-nav .close')
const body = document.body
const mobileNavLinks = document.querySelectorAll('.mobile-nav .links a')

let lastScroll = 0;


const tl = gsap.timeline()

tl.from('.navbar',{y:'-100%',opacity:0, duration:1,ease:'sine'})
  // .to('.navbar',{transition:'all 300ms ease-in-out',duration:0})
  .from('.intro-section> main',{x:'-200%', duration:0.5})
  .fromTo('.intro-section> main',{opacity:0, duration:2},{opacity:1,duration:1},0.5)
  .from('.intro-section> main> div',{ opacity:0,stagger:0.3,duration:0.6})
  .from('.intro-section> main',{background:'#002255',duration:0.3})
  .from('.intro-section> main> .box-1> header',{y:'-200%', duration:1,ease:'bounce'})
  .from('.intro-section> main> .box-1> p,.intro-section> main> .box-1> button',{opacity:0, duration:1})
//   .to('.intro-section> main> div',{opacity:1, duration:2},6)
//   .from('.intro-section> main>*',{opacity:0})



window.addEventListener('scroll',(e)=>{
  const currentScroll= window.pageYOffset;
  const windowHeight = window.innerHeight;
  let abtUsLogoInfor = abtUsLogo.getBoundingClientRect()
  let abtUsExplanationInfor = abtUsExplanation.getBoundingClientRect()
  
  if(currentScroll<=0){
    console.log('less than 0 of current')
    body.classList.remove('scrolling-up')
  }
  if(currentScroll>lastScroll && currentScroll>140 && !body.classList.contains('scrolling-down')){
    body.classList.remove('scrolling-up')
    body.classList.add('scrolling-down')
    console.log('more than current')
  }
  if(currentScroll<lastScroll && body.classList.contains('scrolling-down')){
    body.classList.remove('scrolling-down')
    body.classList.add('scrolling-up')
    console.log('less than current')
  }
  lastScroll=currentScroll
  // console.log(currentScroll)
  if(abtUsLogoInfor.y>0 && windowHeight-abtUsLogoInfor.y>150){
    abtUsLogo.style.transform='translate3d(0,0,0)'
  }  
  if(abtUsExplanationInfor.y>0 && windowHeight-abtUsExplanationInfor.y>150){
    abtUsExplanation.style.transform='translate3d(0%,0,0)'
  }  
})

burgerMenu.addEventListener('click',(e)=>{
  mobileNav.classList.add('active')
  body.style.overflow='hidden'
  body.style.height='100vh'
})
mobileNavCloseBtn.addEventListener('click',(e)=>{
  mobileNav.classList.remove('active')
  body.style.overflow='visible'
  body.style.height='auto'
})


mobileNavLinks.forEach((ele)=>{
  ele.addEventListener('click',()=>{
    mobileNav.classList.remove('active')
    body.style.overflow='visible'
    body.style.height='auto'
  })
})

// document.querySelector('.call-to-action').addEventListener('click',(e)=>{
//     tl.reverse()
//     console.log('hello')
// })