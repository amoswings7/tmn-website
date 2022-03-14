import Navbar from "../../components/Navbar"
import Head from "next/head"
import Image from "next/image"
import { useEffect, useState } from "react"
import axios from "axios"
import style from '../../styles/Home.module.css'
import { useRouter } from "next/router"
import { route } from "next/dist/server/router"



function Index() {
    const [imageData,setImageData]= useState(null)
    const [authToken,setAuthToken]= useState(null)
    const [isLogged,setIsLogged]= useState(false)
    const [isCheckingUser,setIsCheckingUser]= useState(true)
    const [isLoading,setIsLoading]= useState(false)
    const [isUploadSuccess,setIsUploadSuccess]= useState(null)
    const [imageList,setImageList]= useState([])
    const [images,setImages]= useState([])
    const router = useRouter()

    // useEffect(()=>{
    // },[])
    
    //determines if user is logged in and what images are needed
    useEffect(async()=>{
        const handleRouteChange = (url, { shallow }) => {
            console.log('url :'+url);
            if(url==='/admin'){
                router.reload()
            }else{
                console.log('everything is good on first load')
            }
          }
        router.events.on('routeChangeComplete',handleRouteChange)
        const isToken = localStorage.getItem('authToken');
        
        //checks is token valid
        if(!isToken){
            return router.push('/admin/login')
        }
        if(isToken){
            axios.get('/api/admin/login',{
                headers:{
                    authtoken:isToken
                }
            })
            .then(res=>{
                if(res.status===200){
                    setIsCheckingUser(()=>false)
                    setIsLogged(()=>true)
                    setAuthToken(()=>isToken)
                    //now it gets all images needed
                    axios.get('/api/admin/images/getImageList',{
                        headers:{ authtoken:isToken}
                    })
                    .then(res=>setImageList(()=>res.data))
                    .catch(err=> console.log(err))
                }
                console.log(res)
            })
            .catch((err)=>{
                if(err){
                    console.log(err)
                    router.push('/admin/login')
                }
            })
        }
    },[])

    //gets all the images that are needed
    useEffect(()=>{
        const token = localStorage.getItem('authToken')
        if(imageList && token && images.length===0){
            axios.all([
                ...imageList.map((item)=>{ 
                    return axios.get('/api/admin/images/getImages',{
                        headers:{
                            authtoken:token,
                            id:item.imageID
                        }
                    })
                    .then((res)=>{
                        setImages((prev)=>[...prev,res.data.data])
                        return res
                    })
                })
            ])
            .then((res)=>{
                console.log(res)
            })
        }
    },[imageList])
    
    //check image type
    function imageType(str){
        const regex = /image/
        return regex.test(str)
    }
    //it previews the image the user wants to post
    function imagePreviewHandler(e){
        const file = e.target.files[0];


        if(!imageType(file.type)){
            return alert('file is not image')
        }

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload=()=>{
            setImageData(()=>{
                return {
                    dataURL:reader.result,
                    fileName:fileNameHandler(file.name),
                    size:file.size
                }
            })
        }
    }
    //cancels upload
    function cancelUploadHandler(){
        setIsLoading(false)
        setIsUploadSuccess(false)
        setImageData(null)
    }
    //set file name
    function fileNameHandler(str){
        const ext = str.slice(str.lastIndexOf('.'))
        const first = str.slice(0,str.lastIndexOf('.'))
        const date = Date.now();
        const prefix = 'AMOS_';
        return `${prefix}${first}${date}${ext}`
    }
    //posts the image to server to handler it
    function imageUploader(){
        if(imageData && authToken){
            setIsLoading(()=>true)
            axios.post('/api/admin/images/imageHandler',{
                dataURL:imageData.dataURL, fileName:imageData.fileName, size:imageData.size
            },{
                headers:{ authtoken:authToken}
            })
            .then((res)=>{
                setIsLoading(()=>false)
                if(res.status===200)setIsUploadSuccess(()=>true)
                setImageData(()=>false)
            })
            .catch((err)=>{
                    setIsUploadSuccess(()=>false)

                    return console.log(err)
            })
        }
    }

    //delete image function
    function deleteImageHandler(imageID){
        axios.delete('/api/admin/images/imageHandler',{
            headers:{
                authtoken:authToken,
                imageid:imageID
            }
        })
        .then((res)=>{
            console.log(res)
            if(res){
                setImages(images.filter((image)=>image._id!==imageID))
            }
        })
        .catch(err=>console.log(err))
    }
    return (
        <>
        <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
        </Head>
        <div className="container">
            <div className="intro">
                <header>
                    <h1 className="blue-text text-darken-2">Admin Dashboard</h1>
                    {isLogged && <p className="orange-text text-darken-2">You can only upload up to 25 images max and no image can exceed 1-megabyte(mb)</p>}
                </header>
                {!isLogged && <p>Checking if you logged in, please wait...</p>}
            </div>
            {isLogged && (
               <>
                    <main>
                        <div className="message">
                            {(imageList && imageList.length===0) && (
                                <p>checking the required images...</p>
                            )}
                            {!imageList && (
                                <p>No images found</p>
                            )}
                            {(images.length>0 && images.length !==imageList.length) && (
                                <p>getting images {`${images.length}/${imageList.length}`}</p>
                            )}
                        </div>
                        <div className="uploadContainer section">
                            <label>
                                <p className="btn">Upload Image</p>
                                <input onChange={(e)=>imagePreviewHandler(e)} style={{display:'none'}} type="file" name="image" id="upload"/>
                            </label>
                        </div>
                        <br />
                        <div className="divider"></div>
                        <div style={styles.imageContainer}>
                            {images.length>0 && images.map((image)=>(
                                <div key={image._id} style={styles.imageWrapper} className="image z-depth-3">
                                    <Image layout="responsive" width={200} height={150} src={image.dataURL} alt="what happnede happ" />
                                    <p onClick={()=>deleteImageHandler(image._id)} style={styles.deleteBtn} className="white-text hoverable">Delete</p>
                                </div>
                            ))}
                        </div>
                    </main>
                    {imageData && (
                    <div style={styles.imagePreview}>
                        <div style={styles.wrapper}>
                            <div style={styles.imageHolder}>
                                <Image layout="responsive" width={200} height={150} src={imageData.dataURL} alt="Image being uploaded"/>
                                <p className='blue-text text-darken-3'>Is this the image you want to upload?</p>
                            </div>
                            {isLoading && <div className={style.loader}>
                                <div></div>
                            </div>}
                            {isUploadSuccess===false && <p className='red-text container'>something went wrong while uploading</p>}
                            <div style={{display:'flex',justifyContent:'space-evenly'}} className="container">
                                <button className="btn blue white-text" onClick={()=>imageUploader()}>Upload</button>
                                <button className="btn red white-text" onClick={cancelUploadHandler}>Cancel</button>
                            </div>
                        </div>
                    </div>
                    )}
               </> 
            )}
        </div>
        </>
    )
}

const styles = {
    imageWrapper:{
        height:'150px',
        width:'200px',
        position:'relative'
    },
    deleteBtn:{
        background:'rgba(0,0,0,0.7)',
        position:'absolute',
        top:3,
        right:3,
        padding:'3px',
        border:'1px solid red',
        fontSize:'10px',
        cursor:'pointer'
    },
    imageContainer:{
        display:'grid',
        gridTemplateColumns:'repeat(auto-fit,200px)',
        gridAutoRows:'150px',
        gridGap:'10px',
        justifyContent:'space-evenly'
    },
    imagePreview:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        top:0,
        left:0,
        height:'100vh',
        width:'100vw',
        background:'rgba(0,0,0,0.5)',
        padding:'20px'
    },
    imageHolder:{
        maxWidth:'700px',
        maxHeight:'90vh',
        width:'100%',
        marginBottom:'20px',
        height:'fit-content'
    },
    wrapper:{
        width:'fit-content',
        maxHeight:'600px',
        height:'fit-content',
        padding:'10px',
        background:'#fff'
    }
}

export default Index
