const express=require("express")
const {registerController}=require("../controllers/authController")
const authRouter=express.Router()

authRouter.post("/register",registerController)

module.exports={
    authRouter
}