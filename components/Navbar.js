// import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRef, useEffect, useState } from 'react'
import logo from '../public/final-logo.png'
import Link from 'next/link'

function Navbar() {
    const mobileNav = useRef(null)
    const [lastScroll, setLastScroll] = useState(0) 
    useEffect(()=>{
        const body = document.body

        window.addEventListener('scroll',(e)=>{
            const currentScroll= window.pageYOffset;
            const windowHeight = window.innerHeight;
            let realLastValue = 0;
            // console.log('started')
            setLastScroll((prev)=>{
                realLastValue=prev;
                // console.log('realLastvalue set')
                return prev
            })
            // console.log('ended')
            
            console.log('started comparing')
            if(currentScroll<=0){
              console.log('less than 0 of current')
              body.classList.remove('scrolling-up')
            }
            if(currentScroll>realLastValue && currentScroll>140 && !body.classList.contains('scrolling-down')){
              body.classList.remove('scrolling-up')
              body.classList.add('scrolling-down')
              console.log('more than current')
            }
            if(currentScroll<realLastValue && body.classList.contains('scrolling-down')){
              body.classList.remove('scrolling-down')
              body.classList.add('scrolling-up')
              console.log('less than current')
            }
            setLastScroll((prev)=>{
                console.log(`prev :${prev}`)
                return currentScroll
            })
          })
          
        
    },[])

    function mobileNavHandler(){
        console.log('clicked')
        const body = document.body
        mobileNav.current.style.top='0px'
        body.style.overflow='hidden'
        body.style.height='100vh'
    }
    function mobileNavCloseHandler(){
        console.log('clicked')
        const body = document.body
        mobileNav.current.style.top='-100%'
        body.style.overflow='visible'
        body.style.height='auto'
    }
    return (
        <>
                <nav className={`${styles.navbar} navbar`}>
                    <div className={styles.callToAction}>
                        <h1>call us today at 060-525-8081</h1>
                    </div>
                    <main className={styles.mainNav}>
                        <div className={styles.logoArea}>
                            <Image layout='responsive' src={logo} alt='no-pic' width={80} height={80}/>
                        </div>
                        <ul className={styles.links}>
                            <li className={styles.active}><Link href={'/'}><a>HOME</a></Link></li>
                            <li><Link href={'/gallery'}><a>GALLERY</a></Link></li>
                            <li><a href="#services">SERVICES</a></li>
                            <li><a href="#contact-us">CONTACT US</a></li>
                        </ul>
                        <div onClick={mobileNavHandler} className={styles.burgerMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </main>
                </nav>

                <div ref={mobileNav} className={`${styles.mobileNav}`}>
                    <div onClick={mobileNavCloseHandler} className={styles.close}>
                        <span></span>
                        <span></span>
                    </div>
                    <ul className={styles.links}>
                        <li className={styles.active}><Link href={'/'}><a>HOME</a></Link></li>
                        <li><Link href={'/gallery'}><a>GALLERY</a></Link></li>
                        <li><a href="#services">SERVICES</a></li>
                        <li><a href="#contact-us">CONTACT US</a></li>
                    </ul>
                </div>
        </>
    )
}

export default Navbar
