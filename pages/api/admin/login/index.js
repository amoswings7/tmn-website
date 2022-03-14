import jsonwebtoken from 'jsonwebtoken'
import { User } from '../../../../models/imageSchema'
import bcryptjs from 'bcryptjs'
import createUser from '../../../../utilities/createUser'
import dbConnect from '../../../../utilities/dbConnect'
// import { createBrotliCompress } from "zli

// dbConnect
export default async function loginHandler(req,res){

    const dbConnection = await dbConnect()
    const jwt = jsonwebtoken
    const body = req.body
    console.log(req.method)
    // console.log(dbConnection)

    if(req.method==='GET'){
        jwt.verify(req.headers['authtoken'],process.env.TOKEN_SECRECT_KEY,(error,payload)=>{
            if(error)return res.status(401).send('access denied');
            res.status(200).json(payload)
        })
    }else if(req.method==='POST'){
        createUser()
        //looks if the username in the DB
        User.findOne({
            username:body.username
        },(err,response)=>{
            if(err){
                console.log(err)
                return res.status(403).json({
                    message:err
                })
            }
            console.log(response)
            //checks to see if response from DB is not null or user is found
            if(response){
                //checks if password matches
                console.log('got response from db')
                const isPasswordMatched = bcryptjs.compareSync(body.password,response.password);
                if(isPasswordMatched){
                    const token = jwt.sign({id:response._id},process.env.TOKEN_SECRECT_KEY,{expiresIn:600})
                    console.log('created token')
                    res.setHeader('authToken',token).status(200).json({authToken:token})
                }else{
                    console.log('access denied')
                    res.status(401).send('access denied')
                }
            }else{
                console.log('user not found')
                res.status(403).send('user not found')
            }
        })

    }
    
}