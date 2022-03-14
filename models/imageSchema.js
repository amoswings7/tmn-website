import mongoose from "mongoose";
const schema = mongoose.Schema;


const imageSchema = new schema({
    dataURL:{
        type:String,
        required:true
    },
    fileName:{
        type:String,
        required:true
    },
    size:{
        type:Number,
        required:true
    }
}, {timestamps:true})

const imageListSchema = new schema({
    imageID:{
        type:String,
        required:true
    },
    size:{
        type:Number,
        required:true
    }
}, {timestamps:true})

const userSchema = new schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
}, {timestamps:true})


const ImageModel = mongoose.models.Image || mongoose.model('Image',imageSchema);
const ImageListModel = mongoose.models.ImageName || mongoose.model('ImageName',imageListSchema);
const User = mongoose.models.User || mongoose.model('User',userSchema);

export {ImageListModel,ImageModel, User}