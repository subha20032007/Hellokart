const express=require("express")
const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware.js")
const { createCategoryController,updateCategoryController,deleteCategoryController,categoryController,singleCategoryController } = require("../controllers/categoryController.js")
const categoryRoutes=express.Router()

categoryRoutes.post("/create-category",requireSignIn,isAdmin,createCategoryController)
categoryRoutes.put("/update-category/:id",requireSignIn,isAdmin,updateCategoryController)
categoryRoutes.delete("/delete-category/:id",requireSignIn,isAdmin,deleteCategoryController)
categoryRoutes.get("/get-category",categoryController)
categoryRoutes.get("/single-category/:slug",singleCategoryController)
module.exports={
    categoryRoutes
}