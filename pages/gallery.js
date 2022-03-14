// import React from 'react';
import { ImageModel } from "../models/imageSchema";
import Navbar from "../components/Navbar";
import styles from '../styles/gallery.module.css'
import { useEffect, useState } from "react";

function Gallery({data}) {
    // const [imageViewer,setImageViewer] = useState(false);
    const [imageSource,setImageSource] = useState(null);
    const [images, setImages] = useState(JSON.parse(data))

    function viewImageHandler(source){
        setImageSource(()=>source)
    }
    function cancelViewer(){
        setImageSource(null)
    }

    useEffect(()=>{
        const body = document.body;
        if(imageSource){
            body.style.overflow='hidden'
            body.style.height='100vh'
        }else{
            body.style.overflow='visible'
            body.style.height='auto'
        }
    },[imageSource])
    return (
      <>
        <Navbar/>
        <div>
        <section className={styles.gallery}>
        <header>
            <h1>GALLERY OF WORKS</h1>
        </header>
        <main>
        {images.map(image=>(
                <div key={image.fileName+image.createdAt}>
                    <img onClick={()=>viewImageHandler(image.dataURL)} className={styles.imageHolder} src={image.dataURL} alt="service image"/>
                </div>
            ))}
        </main>
    </section>
    {imageSource && (
        <div className={styles.imageViewer}>
        <div className={styles.close} onClick={cancelViewer}>
            <span></span>
            <span></span>
        </div>
        <div className={styles.container}>
            <img src={imageSource} alt="image viewer"/>
        </div>
       </div>
    )}
      </div>
      </>
  )
}

export async function getStaticProps(){
    const mongoose = require('mongoose')

    const db = mongoose

    let cache = global.mongoose
    if(!cache){
        cache = global.mongoose = {connection:null,promise:null}
    }
    console.log('started operation')
    const dbConnect = async()=>{
        if(cache.connection){
            console.log('already connected')
            return cache.connection
        }    

        if(!cache.promise){
            const opts={
                useNewUrlParser:true,
                useUnifiedTopology:true
            }
            try{
                cache.promise =mongoose.connect(process.env.Mongodb_URL,opts).then((res)=>res)
                cache.connection= await cache.promise
                console.log('connected to db...')
                // console.log(cache.connection)
                return cache.connection
            }catch(err){

                console.log(err)
            }
        }
    }

    await dbConnect()
    const res =await ImageModel.find({})
                .then((response)=>{
                    console.log('got images')
                    response.dataURL=null;
                    return response
                })
                .catch((err)=>console.log('error getting images'))
    console.log('finished fetching images')
    console.log(res.length)

    return {
        props:{data:JSON.stringify(res)}
    }
}

export default Gallery;
