import Link from 'next/link'
import styles from '../styles/Home.module.css'

function WorkSection() {
    return (
        <>
        <section className={`${styles.workSection} ${styles.close}`}>
            <header>
                <h1>Gallery</h1>
            </header>
            <main className={styles.galleryPortions}>
                <div className="img1">
                    <img src={'/all pics/img (6).jpg'} alt='gallery preview'/>
                </div>
                <div className="img2">
                    <img src={'/all pics/img (5).jpg'} alt='gallery preview'/>
                </div>
                <div className="img3">
                    <img src={'/all pics/img (3).jpg'} alt='gallery preview'/>
                </div>
                <div className="img4">
                    <img src={'/all pics/img (8).jpg'} alt='gallery preview'/>
                </div>
                <div className="img5">
                    <img src={'/all pics/img (7).jpg'} alt='gallery preview'/>
                </div>
                <div className="img6">
                    <img src={'/all pics/img (3).jpg'} alt='gallery preview'/>
                </div>
            </main>
            <button className={styles.viewMoreBtn}><Link href={'/gallery'}><a>VIEW MORE</a></Link></button>
        </section>
        </>
    )
}

export default WorkSection
