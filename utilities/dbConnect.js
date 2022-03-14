import mongoose from 'mongoose'

const db = mongoose

let cache = global.mongoose
if(!cache){
    cache = global.mongoose = {connection:null,promise:null}
}

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

export default dbConnect