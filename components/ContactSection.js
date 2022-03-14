// import React from 'react'
import styles from '../styles/Home.module.css'

function ContactSection() {
    return (
        <>
        <section id={`${styles.contactUs} contact-us`} className={`${styles.contactSection} ${styles.close}`}>
            <main>
                <form action="https://formspree.io/f/xoqrqaen" method="post">
                    <h1>CONTACT DETAILS</h1>
                    <label htmlFor="nameInput">
                        <input name='name' type="text" id="nameInput" required/>
                        <p>name</p>
                    </label>
                    <label htmlFor="emailInput">
                        <input name='email' type="text" id="emailInput" required/>
                        <p>email</p>
                    </label>
                    <label htmlFor="commentInput">
                        <textarea required name="comment by client" id="commentInput" cols="30" rows="10"></textarea>
                        <p>comment</p>
                    </label>
                    <label htmlFor="nameInput">
                        <input type="submit" className="nameInput" required/>
                    </label>
                </form>
                <div>
                    <div className={styles.imageArea}>
                        <img src="/white-logo.png" alt="image viewer"/>
                    </div>
                    <div>   
                        <p className="number">060 525 8081</p>
                        <p className="email">taketimenyirenda@rocketmail.com</p>
                        <p><a href="tel:0605258081"><i className="fas fa-phone-alt"></i>Call Now!</a></p>
                        <p><a href="mailto:taketimenyirenda@rocketmail.com"><i className="fas fa-envelope"></i>Email us</a></p>
                    </div>
                </div>
            </main>
        </section>
        </>
    )
}

export default ContactSection
