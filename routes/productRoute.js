const express=require("express")
const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware")
const {  createProductController,getProductsController,getSingleProductsController,updateProductsController,deleteProductsController,productPhotoController } = require("../controllers/productController")
const formidable=require("express-formidable")
const productRoutes=express.Router()

productRoutes.post("/create-product",requireSignIn,isAdmin,formidable(),createProductController)
productRoutes.get("/get-product",formidable(),getProductsController)
productRoutes.get("/get-product/:slug",formidable(),getSingleProductsController)
productRoutes.put("/update-product/:id",requireSignIn,isAdmin,formidable(),updateProductsController)
productRoutes.delete("/delete-product/:id",requireSignIn,isAdmin,formidable(),deleteProductsController)
productRoutes.get("/product-photo",formidable(),productPhotoController)
module.exports={
    productRoutes
}