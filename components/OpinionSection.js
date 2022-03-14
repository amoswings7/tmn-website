// import React from 'react'
import styles from '../styles/Home.module.css'

function OpinionSection() {
    return (
        <>
        <section className={styles.opinionSection}>
            <header>
                <h1><span id={styles.bolder}>WHAT OTHERS</span> <br/><span id={styles.slimmer}>HAVE TO SAY</span></h1>
            </header>
            <main>

                <div className={styles.clientOpinion}>
                    <p>
                        <span>“</span>Previous builder left me with the first picture. I got hold of Taketime and he id the rest. The second picture is the amazing work that he did!<span>”</span>
                    </p>
                </div>
                <div className={styles.clientOpinion}>
                    <p>
                        <span>“</span>I got Take-Time and his team in to re-model my bathroom, I had been living with an awful pink 1960’s bathroom for ages and had had enough. Take-time transformed it into a beautiful modern bathroom with a Victorian twist. His team were a pleasure to have in my house. Definately a company to call! I am planning on calling them later this week for quotes for the rest of my house transformation<span>”</span>
                    </p>
                </div>
                <div className={styles.clientOpinion}>
                    <p>
                        <span>“</span>A bathroom at last! <br/><br/>
                        Removal of old broken tiles into a beautiful fully functioning bathroom with modern look! A complete transformation. The bathroom being the pride of my home now, instead of the eye sore I started with. Taketime and his team are really focused on customer service and honest hard work at a reasonable rate, even for me , a pensioner!!<span>”</span>
                    </p>
                </div>
            </main>
        </section>
        </>
    )
}

export default OpinionSection
