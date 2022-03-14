import {ImageListModel, ImageModel} from '../models/imageSchema'


export async function getImageListHandler(req,res){
    await ImageListModel.find({},(err, response)=>{
        if(err)return res.status(403).json({message:'something went wrong'})
        res.status(200).send(response)
    }).clone()
}
export async function getImage(req,res){
    console.log(req.headers['id'])
    ImageModel.findOne({_id:req.headers['id']},(err,response)=>{
        if(err){
            console.log(err)
            return res.status(403).json({message:'image not found'})
        }else{
            // console.log(response)
            res.status(200).json({data:response})
        }
    })
}


//save image to DB handler
export async function saveImage(req,res){
    const newImage = new ImageModel({
        dataURL:req.body.dataURL,
        fileName:req.body.fileName,
        size:req.body.size
    })

    await newImage.save((err, response)=>{
        if(err)return res.status(501).json({message:'something went wrong saving image'})
        const newImageListItem = new ImageListModel({
            imageID:response._id,
            size:req.body.size
        }).save((error, data)=>{
            if(error)return res.status(501).json({message:'something went wrong saving list item'})
            res.status(200).json({
                response,
                data
            })
        })
    })
}

//delete image handler
export async function deleteImage(req,res){
    console.log(req.headers)
    await ImageModel.findOneAndDelete({_id:req.headers['imageid']},(err, image)=>{
        if(err)return res.status(501).json({message:'something went wrong deleting image'})
        
        ImageListModel.findOneAndDelete({imageID:req.headers['imageid']},(error, data)=>{
            if(error)return res.status(501).json({message:'something went wrong deleting imageList item'})
            res.status(200).json({image:image,data})
        })   
    }).clone()
}