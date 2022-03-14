// import React from 'react'
import styles from '../styles/Home.module.css'

function ProofSection() {
    console.log(styles.proofSection)
    return (
        <>
        <section className={styles.proofSection}>

            <header>
                <h1>
                    <span>OUR DETERMINATION</span><br/> 
                    <span>FOR SUCCESS</span> 
                </h1>                
            </header>

            <main>
                <div className={styles.slideContainer}>     
                    <input onChange={()=>null} className={styles.inputs} type="radio" defaultChecked name="r1" id={'r1And1'}/>
                    <input onChange={()=>null} className={styles.inputs} type="radio" name="r1" id={'r1And2'}/>
                    
                    <div className={styles.imageContainer}>
                        <img className={styles.firstImage} src="/proof-pics/before1.jpg" alt="before and after image"/>
                        <img className={styles.secondImage} src="/proof-pics/after1.jpg" alt="before and after image"/>
                    </div>
                    
                    <label className={`${styles.slideController} ${styles.leftArrow}`} htmlFor="r1And1">
                        <i className="fas fa-chevron-left"></i>
                    </label>
                    <label className={`${styles.slideController} ${styles.rightArrow}`} htmlFor="r1And2">
                        <i className="fas fa-chevron-right"></i>
                    </label>
                </div>

                <div className={styles.slideContainer}>     
                    <input onChange={()=>null} className={styles.inputs} type="radio" defaultChecked name="r2" id={'r2And1'}/>
                    <input onChange={()=>null} className={styles.inputs} type="radio" name="r2" id={'r2And2'}/>
                    
                    <div className={styles.imageContainer}>
                        <img className={styles.firstImage} src="/proof-pics/before2.jpg" alt="before and after image"/>
                        <img className={styles.secondImage} src="/proof-pics/after2.jpg" alt="before and after image"/>
                    </div>
                    
                    <label className={`${styles.slideController} ${styles.leftArrow}`} htmlFor="r2And1">
                        <i className="fas fa-chevron-left"></i>
                    </label>
                    <label className={`${styles.slideController} ${styles.rightArrow}`} htmlFor="r2And2">
                        <i className="fas fa-chevron-right"></i>
                    </label>
                </div>

                <div className={styles.slideContainer}>     
                    <input onChange={()=>null} className={styles.inputs} type="radio" defaultChecked name="r3" id={'r3And1'}/>
                    <input onChange={()=>null} className={styles.inputs} type="radio" name="r3" id={'r3And2'}/>
                    
                    <div className={styles.imageContainer}>
                        <img className={styles.firstImage} src="/proof-pics/before3.jpg" alt="before and after image"/>
                        <img className={styles.secondImage} src="/proof-pics/after3.jpg" alt="before and after image"/>
                    </div>
                    
                    <label className={`${styles.slideController} ${styles.leftArrow}`} htmlFor="r3And1">
                        <i className="fas fa-chevron-left"></i>
                    </label>
                    <label className={`${styles.slideController} ${styles.rightArrow}`} htmlFor="r3And2">
                        <i className="fas fa-chevron-right"></i>
                    </label>
                </div>
            </main>
        </section>

        </>
    )
}

export default ProofSection
