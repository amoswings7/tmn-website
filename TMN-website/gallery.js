const burgerMenu = document.querySelector('.burger-menu')
const mobileNav = document.querySelector('.mobile-nav')
const mobileNavCloseBtn = document.querySelector('.mobile-nav .close')
const body = document.body
const mobileNavLinks = document.querySelectorAll('.mobile-nav .links a')
const imageViewer = document.querySelector('.image-viewer')
const allImageElements = document.querySelectorAll('.image-holder')
const img = document.querySelector('.gallery>main>div')
const imageViewerCloser = document.querySelector('.image-viewer> .close')
const imageArea = document.querySelector('.image-viewer> .container> img')

// img.addEventListener('click',(e)=>{
//   alert('whatttt')
// })

allImageElements.forEach(ele =>{
  // const img = ele.querySelector('img');
  console.log(ele)
  ele.addEventListener('click',(e)=>{
    console.log('amis')
    const source = e.target.getAttribute('src');
    imageArea.setAttribute('src',source);
    imageViewer.style.display='flex'
    body.style.overflow='hidden'
    body.style.height='100vh'
    console.log('worked')
  })
  // console.log(img.getAttribute('src'))
})

// for(let img of allImageElements){
//   console.log(img.getAttribute('src'))
//   img.addEventListener('click',function(){
//     alert('hello')
//   })
// }
// for(let i=0;i<allImageElements.length;i++){
//   console.log(allImageElements[i])
//   allImageElements[i].addEventListener('click',(e)=>{
//     console.log(e.target)
//   })
// }
// allImageElements[0].addEventListener('click',(e)=>{
//   console.log('hello')
// })

imageViewerCloser.addEventListener('click',()=>{
  imageViewer.style.display='none'
  body.style.overflow='visible'
  body.style.height='auto'
})




let lastScroll = 0;


const tl = gsap.timeline()

tl.from('.navbar',{y:'-100%',opacity:0, duration:1,ease:'sine'})


window.addEventListener('scroll',(e)=>{
  const currentScroll= window.pageYOffset;
  // const windowHeight = window.innerHeight;
  
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

