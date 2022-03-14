// import React from 'react'
import styles from '../styles/Home.module.css'

function ServiceSection() {
    return (
        <>
        <section id={`${styles.services} services`} className={`${styles.servicesSection} ${styles.close}`}>
            <main>
                <header>
                    <h1>WHAT WE <br/> HAVE <br/> TO OFFER</h1>
                </header>
                <div className={styles.offers}>
                    <p>
                        We do all kinds of work ranging from house renovating to plumbing. <br/><br/>
                        Here's a list oof many things we do: Brickwork, Plastering, Paving, Ceiling, Painting, Tiling, Skimming and many more.
                    </p>
                </div>
            </main>
        </section>
        </>
    )
}

export default ServiceSection
