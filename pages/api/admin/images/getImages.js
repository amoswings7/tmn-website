import dbConnect from "../../../../utilities/dbConnect";
import { ImageModel } from "../../../../models/imageSchema";
import jsonwebtoken from 'jsonwebtoken'
import { getImage } from "../../../../utilities/dbActions";

export default async function getImageHandler(req,res){
    const userToken = req.headers['authtoken'];
    const jwt = jsonwebtoken
    
    if(req.method==='GET'){

        try{
            //checking if connected to database
            const isConnected = await dbConnect();
    
            // checking if the user is verified
            jwt.verify(userToken,process.env.TOKEN_SECRECT_KEY,(error,payload)=>{
                if(error)return res.status(401).send('access denied');
                // console.log(req.headers)
                getImage(req,res)
            })
    
        }catch(error){
            res.status(401).send(error)
        }
    }else{
        res.status(401).json({message:'Access denied'})
    }
    
}