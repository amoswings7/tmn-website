import dbConnect from "../../../../utilities/dbConnect";
// import {ImageListModel} from "../../../../models/imageSchema";
import jsonwebtoken from 'jsonwebtoken'
import { getImageListHandler } from "../../../../utilities/dbActions";

export default async function getImageList(req,res){
    const userToken = req.headers['authtoken'];
    const jwt = jsonwebtoken
        
    try{
        const isConnected = await dbConnect();

        // checking if the user is verified
        jwt.verify(userToken,process.env.TOKEN_SECRECT_KEY,(error,payload)=>{
            console.log(userToken)
            if(error)return res.status(401).send('access denied');
            getImageListHandler(req,res)            
        })
    }catch(error){
        res.status(401).send(error)
    }
    
}