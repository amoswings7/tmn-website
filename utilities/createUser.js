import { User } from "../models/imageSchema";
import bcryptjs from "bcryptjs";

export default function createUser(){
    User.find({},async(err, response)=>{
        if(err){
           console.log(err)
        }
        // console.log(response)
        if(response.length==0){
            const username = 'admin'
            const password = 'default'
            const salt = bcryptjs.genSaltSync(10);
            const hashPassword = bcryptjs.hashSync(password,salt)
            const defaultUser = new User({
                username,
                password:hashPassword
            })
            await defaultUser.save((err,response)=>{
                if(err) console.log(err)
                console.log('user was created',response)
            })
        }else{
            return console.log('user already exists')
        }
    })
}