const express=require("express")
const {registerController,loginController, testController}=require("../controllers/authController")
const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware")
const authRouter=express.Router()

authRouter.post("/register",registerController)
authRouter.post("/login",loginController)
authRouter.get("/test",requireSignIn,isAdmin,testController)
module.exports={
    authRouter
}