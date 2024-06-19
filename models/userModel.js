const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
 name:{
    type:String,
    require:true,
 },
 email:{
    type:String,
    require:true,
    unique:true
 },
 phone:{
    type:String,
    require:true,
 },
 password:{
    type:String,
    require:true
 },
 address:{
    type:String,
    require:true
 },
 role:{
    type:Number,
    default:0
 }
},{timestamps:true})
//1

const userModel=mongoose.model("users",userSchema)
module.exports={
    userModel
}