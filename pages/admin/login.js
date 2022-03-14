import Head from 'next/head'
import Script from 'next/script'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/router';
// import Script from 'next/script';

function Login() {
    const [username,setUsername]= useState(null);
    const [password, setPassword] = useState(null);
    const route = useRouter()

    
    useEffect(()=>{
        const handleRouteChange = (url, { shallow }) => {
            console.log('url :'+url);
            if(url==='/admin/login'){
                route.reload()
            }else{
                console.log('everything is good on first load')
                M.updateTextFields()
            }
          }
        route.events.on('routeChangeComplete',handleRouteChange)

        const body = document.body;
        body.classList.add('blue')
        body.style.display='flex'
        body.style.justifyContent='center'
        body.style.alignItems='center'
        body.style.height='100vh'
        body.style.width='100vw'
        body.style.padding='10px'
        
    },[])

    function usernameHandler(e){
        setUsername(()=>e.target.value)
    }
    function passwordHandler(e){
        setPassword(()=>e.target.value)
    }
    function loginhandler(){
        if(!(username && password)) return
        
        if(username.length>=4 && password.length>=6 ){
            axios.post('/api/admin/login',{
                username,
                password
            })
            .then((res,error)=>{
                if(res.status===200){
                    console.log(res)
                    localStorage.setItem('authToken',res.data.authToken)
                    route.push('/admin')
                }else{
                    console.log(error)
                }

            })
        }
    }
    return (
        <>
        <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
            <script async src='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js'></script>
        </Head>
        <div style={{minWidth:300,width:'100%'}} className="row  blue darken-2 z-depth-3">
            <form onSubmit={()=>false} style={{paddingBottom:'20px',width:'100%'}} className="col s12 white section">
            <div className="row">
                <div className="input-field col s12">
                    <input onChange={(e)=>usernameHandler(e)} id="first_name2" type="text" minLength={4} className="validate"/>
                    <label className="active" htmlFor="first_name2">Username</label>
                    <span className="helper-text" data-error="invalid - username must be 4 or more characters" data-success="valid">username of at least 4 characters</span>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input onChange={(e)=>passwordHandler(e)} id="password_name2" minLength={4} type="password" className="validate"/>
                    <label className="active" htmlFor="password_name2">Password</label>
                    <span className="helper-text" data-error="invalid - password must be 4 or more characters" data-success="valid">password must be 6 or more characters</span>
                </div>
            </div>
            <button onClick={()=>loginhandler()} type='button' className='btn'>Login</button>
            </form>
        </div>
        </>
    )
}

export default Login
