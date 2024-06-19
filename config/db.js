const mongoose=require("mongoose")

const connectDB=async()=>{
    //console.log(process.env.MONOGO_URL)
    try{
    const con=await mongoose.connect(process.env.MONOGO_URL)
    console.log("connected to db",)
    }catch(error){
        console.log(`err in mongo`,error)
    }
}
module.exports={
    connectDB
}