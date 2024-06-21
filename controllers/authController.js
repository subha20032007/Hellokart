const { hashPassword, comparePassword } = require("../helpers/authHelper")
const { userModel } = require("../models/userModel")
const jwt=require("jsonwebtoken")

const registerController=async(req,res)=>{
try{
const {name,email,password,phone,address}=req.body
if(!name){
    return res.send({message:"Name is Required"})
}
if(!email){
    return res.send({message:"email is Required"})
}
if(!password){
    return res.send({message:"password is Required"})
}
if(!phone){
    return res.send({message:"phone is Required"})
}
if(!address){
    return res.send({message:"address is Required"})
}
const existingUser=await userModel.findOne({email})
if(existingUser){
    return res.status(200).send({
        success:"true",
        message:"Already Register Please Login"
    })
}
const hashedPassword=await hashPassword(password)
console.log(hashedPassword)
const user=await new userModel({
    name,email,phone,address,password:hashedPassword
}).save()

res.status(200).send({
    success:"true",
    message:"User Register Successfully",
    user
})
}catch(err){
res.status(500).send({
    success:false,
    message:"err in register",
    err
})
}
}

//post login
const loginController=async(req,res)=>{
try{
const {email,password}=req.body;
// console.log(email,password)
if(!email||!password){
    return res.status(404).send({
        success:false,
        message:"invalid Email or password"
    })
}
const user=await userModel.findOne({email})

if(user==null||!user){
   return res.status(200).send({
        success:false,
        message:"Email not registerd"
    })
}
const match=await comparePassword(password,user.password)
if(!match){
    return res.status(200).send({
 success:false,
 message:"Invalid Password"
    })
}
console.log(process.env.JWT_SECRET)
const token=await jwt.sign({_id:user.id},process.env.JWT_SECRET,{
    expiresIn:"7d"
})

res.status(200).send({
    success:true,
    message:"login Successful",
    user:{
        name:user.name,
        email:user.email,
        phone:user.phone,
        address:user.address
    },
    token
})
}catch(err){
    console.log(err)
res.status(500).send({
    success:false,
    message:"err in login",
    err
})
}
}
//post login
const testController=(req,res)=>{
res.send("Protected Route")
}
module.exports={
    registerController,loginController,testController
}

//adsa