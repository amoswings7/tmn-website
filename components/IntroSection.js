import styles from '../styles/Home.module.css'
import React,{useEffect,useRef} from 'react'
import gsap from 'gsap'
import { useState } from 'react/cjs/react.production.min'

function IntroSection() {
    // const box1 = useRef(null)
    // const box2 = useRef(null)
    // const [tl, setTl] = useState(gsap)

    useEffect(()=>{

        gsap.timeline().from('.navbar',{y:'-100%',opacity:0, duration:1,ease:'sine'})
            .from('.intro-section> main',{x:'-200%', duration:0.5})
            .fromTo('.intro-section> main',{opacity:0, duration:2},{opacity:1,duration:1},0.5)
            .from('.intro-section> main> div',{ opacity:0,stagger:0.3,duration:0.6})
            .from('.intro-section> main',{background:'#002255',duration:0.3})
            .from('.intro-section> main> .box-1> header',{y:'-200%', duration:1,ease:'bounce'})
            .from('.intro-section> main> .box-1> p,.intro-section> main> .box-1> button',{opacity:0, duration:1})

    },[])
    return (
        <>
        <section className={`${styles.introSection} intro-section`}>
            <main>
                <div className={`${styles.box1} box-1`}>
                    <header>
                        <h1>TMN</h1>
                        <h2>Builders & Plumbing</h2>
                    </header>
                    <p>No job is too big or too small for Taketime and his team.<br/><br/>We do building, additions, alterations, tiling, painting, paving, skimming, ceilings and much, much more. 
                    </p>
                    <button><a href="tel:0605258081">CALL US TODAY</a></button>
                </div>
                <div className={`${styles.box2} box-2`}>
                    <img src="/drawing.png" alt="amos wings"/>
                </div>
            </main>
        </section>
        </>
    )
}

export default IntroSection
