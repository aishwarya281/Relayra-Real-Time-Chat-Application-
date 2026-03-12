import mongoose from "mongoose"

const connectToMongoDB= async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to MONGOdb successffully")
 
    }catch(error){
        console.log(error)
    }
}

export default connectToMongoDB;