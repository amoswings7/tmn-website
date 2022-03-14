import Head from 'next/head'
// import Image from 'next/image'
import { useEffect } from 'react'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
import IntroSection from '../components/IntroSection'
import Navbar from '../components/Navbar'
import OpinionSection from '../components/OpinionSection'
import ProofSection from '../components/ProofSection'
import ServiceSection from '../components/ServiceSection'
import WorkSection from '../components/WorkSection'
// import Script from 'next/script'
// import styles from '../styles/Home.module.css'

// import dbConnect from '../utilities/dbConnect'

export default function Home() {
  // dbConnect()
  useEffect(()=>{
    const body = document.body;
    body.classList.add('scrolling-up')
  },[])
  return (
    <>
      <Head>
      <link rel="icon" href="/favicon.ico" />
      <script async src="https://kit.fontawesome.com/236eafeedd.js" crossOrigin="anonymous"></script>
      </Head>
      <Navbar/>
      <IntroSection/>
      <AboutSection/>
      <ServiceSection/>
      <OpinionSection/>
      <ProofSection/>
      <WorkSection/>
      <ContactSection/>
    </>
  )
}
