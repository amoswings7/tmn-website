import dbConnect from "../../../../utilities/dbConnect";
import { ImageModel, ImageListModel } from "../../../../models/imageSchema";
import jsonwebtoken from "jsonwebtoken"; 
import { deleteImage, saveImage } from "../../../../utilities/dbActions";

export default async function imageHandler(req,res){
    const jwt = jsonwebtoken
    const token = req.headers['authtoken']


    try{
        const connection = await dbConnect()
        const verifyToken = jwt.verify(token,process.env.TOKEN_SECRECT_KEY)
    
        console.log(verifyToken)
        switch(req.method){
            case 'GET':
                res.status(401).json({message:'Access Denied'})
                break;
            case 'POST':
                saveImage(req,res)
                break;
            case 'DELETE':
                deleteImage(req,res)
                break;
        }
    }catch(err){
        console.log(err)
        res.status(401).send('Access denied catch');
    }
}