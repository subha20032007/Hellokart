const {userModel}=require("../models/userModel")

const jwt=require("jsonwebtoken")

 const requireSignIn=async (req,res,next)=>{
    try{
        const decode=await jwt.verify(req.headers.authorization,process.env.JWT_SECRET)
        req.user=decode
        console.log(decode)
      
next()
    }catch(err){
     console.log(err)

    }
}

 const isAdmin=async(req,res,next)=>{
    try{

        const user=await userModel.findById(req.user._id)
       // console.log(user)
       // console.log(req.user._id)
        if(user.role!==1){
            res.status(401).send({
                success:false,
                message:"Unauthorized Access"
            })
        }else{
            next()
        }
    }catch(err){
        console.log(err)
        res.status(401).send({
            success:false,
            message:"error from admin middleware"
        })
    }
}
module.exports={
    requireSignIn,isAdmin
}