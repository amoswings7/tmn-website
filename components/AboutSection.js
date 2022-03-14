import styles from '../styles/Home.module.css'
import {useEffect, useRef} from 'react'
// import whiteLogo from '../public/white-logo.png'


function AboutSection() {
    // const abtUsLogoInfor = useRef(null)
    const abtUsLogo = useRef(null)
    const abtUsExplanation = useRef(null)
    useEffect(()=>{
        console.log(abtUsLogo)
        window.addEventListener('scroll',(e)=>{
            const windowHeight = window.innerHeight;
            let abtUsLogoInfor = abtUsLogo.current.getBoundingClientRect()
            let abtUsExplanationInfor = abtUsExplanation.current.getBoundingClientRect()
            
            if(abtUsLogoInfor.y>0 && windowHeight-abtUsLogoInfor.y>150){
              abtUsLogo.current.style.transform='translate3d(0,0,0)'
            }  
            if(abtUsExplanationInfor.y>0 && windowHeight-abtUsExplanationInfor.y>150){
              abtUsExplanation.current.style.transform='translate3d(0%,0,0)'
            }  
          })
          
    },[])


    return (
        <>
        <section className={`${styles.aboutUs} ${styles.close}`} >
            <main>
                <div className={styles.logoSection}>
                    <img ref={abtUsLogo} src={'/white-logo.png'} alt=""/>
                </div>
                <div  className={styles.explanation}>
                    <div ref={abtUsExplanation}>
                        <h1 className={styles.child}>WE AIM TO PLEASE</h1>
                        <p className={styles.child}>We are trustworthy, honest and impeccable construction and workmanship. All done with a smile and a good attitude!</p>
                        <p>
                            projects are priced on a daily rate and subject to conditions and job presented.
                            Extremely good rates and references available. <br/><br/>
                            Please take a look through the gallery for a sample of the work we've worked on.
                        </p>
                    </div>
                </div>
            </main>
        </section>

        </>
    )
}

export default AboutSection
