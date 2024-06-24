const mongoose=require("mongoose")

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    slug:{
        type:String,
        require:true
    },
    price:{
     type:String,
     require:true
    },
    category:{
       type:mongoose.ObjectId,
       ref:"category",
       required:true
    },
    quantity:{
type:Number,
required:true
    },
    photo:{
        data:Buffer,
        contentType:String
    },
    shipping:{
        type:Boolean
    }
},{typestamps:true})

const productModel=mongoose.model("product",productSchema)

module.exports={
    productModel
}