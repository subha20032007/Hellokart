const { default: slugify } = require("slugify");
const { productModel } = require("../models/productModel");
const fs=require("fs")
const createProductController=async(req,res)=>{
try{
    const {name,slug,description,price,category,quantity,shipping}=req.fields
    const {photo}=req.files
    switch(true){
        case !name:
            return res.status(500).send({error:"Name is required"});
        case !description:
            return res.status(500).send({error:"Description is required"})
        case !price:
            return res.status(500).send({error:"Price is required"})
        case !category:
            return res.status(500).send({error:"Category is required"})    
        case !quantity:
             return res.status(500).send({error:"Quantity is required"})   
        case !shipping:
             return res.status(500).send({error:"Shipping is required"})
        case !photo&&photo.size<1000000:
             return res.status(500).send({error:"Photo is required and size should be less than 1mb"})              
    }
const products=new productModel({...req.fields,slug:slugify(name)})
if(photo){
    products.photo.data=fs.readFileSync(photo.path)
    products.photo.contentType=photo.type
}
await products.save()
res.status(201).send({
    success:true,
    message:"Successfully created product",
    products
})
}catch(err){
    console.log(err)
    res.status(500).send({
        success:false,
        message:"Error in createing product"
    })
}
}

const getProductsController=async(req,res)=>{
try{
    const {id}=req.params
    const products=await productModel.find({}).populate("category").select("-photo").limit(12).sort({createdAt:-1})
    
    res.status(201).send({
     success:true,
     countTotal:products.lenth,
     message:"All products ",
     products
 })
}catch(err){
    console.log(err)
    res.status(500).send({
        success:false,
        message:"Error in createing product",
        err
    })
}
}

const getSingleProductsController=async(req,res)=>{
try{
    const {id}=req.params
   const products=await productModel.findOne({slug:req.params.slug}).populate("category").select("-photo")
   
   res.status(201).send({
    success:true,
    message:"Single product fetched",
    products
})
}catch(err){
    console.log(err)
    res.status(500).send({
        success:false,
        message:"Error in geting product"
    })
}
}

const updateProductsController=async(req,res)=>{
    try{
        const {id}=req.params
        const {name,slug,description,price,category,quantity,shipping}=req.fields
    const {photo}=req.files
    switch(true){
        case !name:
            return res.status(500).send({error:"Name is required"});
        case !description:
            return res.status(500).send({error:"Description is required"})
        case !price:
            return res.status(500).send({error:"Price is required"})
        case !category:
            return res.status(500).send({error:"Category is required"})    
        case !quantity:
             return res.status(500).send({error:"Quantity is required"})   
        case !shipping:
             return res.status(500).send({error:"Shipping is required"})
        case !photo&&photo.size<1000000:
             return res.status(500).send({error:"Photo is required and size should be less than 1mb"})              
    }
    const products=await productModel.findByIdAndUpdate({_id:id},{...req.fields,slug:slugify(name)},{new:true})
    if(photo){
        products.photo.data=fs.readFileSync(photo.path)
        products.photo.contentType=photo.type
    }
    await products.save()
    res.status(201).send({
     success:true,
     message:"update product Successfully ",
     products
 })
    }catch(err){
        console.log(err)
        res.status(500).send({
            success:false,
            message:"Error from update product"
        })
    }
}

const deleteProductsController=async(req,res)=>{
    try{
        const {id}=req.params
        const products=await productModel.findByIdAndDelete({_id:id}).select("-photo")
        
        res.status(201).send({
         success:true,
         message:"delete product Successfully ",
         products
     })
    }catch(err){
        console.log(err)
        res.status(500).send({
            success:false,
            message:"Error from delete product"
        })
    }
}

const productPhotoController=async(req,res)=>{
    try{
        const {id}=req.params
        const product=await productModel.findById({_id:id}).select("photo")
        
    if(product.photo.data){
        res.set("Content-type",product.photo.contentType)
        return res.status(200).send(product.photo.data)
    }
    }catch(err){
        console.log(err)
        res.status(500).send({
            success:false,
            message:"Error from delete product"
        })
    }
}
module.exports={
    createProductController,getProductsController,getSingleProductsController,updateProductsController,deleteProductsController,productPhotoController
}