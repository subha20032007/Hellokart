const express=require("express")
const {registerController,loginController,forgotPasswordController, testController}=require("../controllers/authController")
const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware")
const authRoutes=express.Router()

authRoutes.post("/register",registerController)
authRoutes.post("/login",loginController)
authRoutes.post("/forgot-password",forgotPasswordController)
authRoutes.get("/test",requireSignIn,isAdmin,testController)
authRoutes.get("/user-auth",requireSignIn,(req,res)=>{
    res.status(200).send({ok:true})
})
authRoutes.get("/admin-auth",requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true})
})
module.exports={
    authRoutes
}
//da