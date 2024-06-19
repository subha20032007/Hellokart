const { hashPassword } = require("../helpers/authHelper")
const { userModel } = require("../models/userModel")


const registerController=async(req,res)=>{
try{
const {name,email,password,phone,address}=req.body
if(!name){
    return res.send({error:"Name is Required"})
}
if(!email){
    return res.send({error:"email is Required"})
}
if(!password){
    return res.send({error:"password is Required"})
}
if(!phone){
    return res.send({error:"phone is Required"})
}
if(!address){
    return res.send({error:"address is Required"})
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

module.exports={
    registerController
}