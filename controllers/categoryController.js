const { default: slugify } = require("slugify")
const {categoryModel}=require("../models/categoryModel")

const createCategoryController=async(req,res)=>{
 try{
  const {name}=req.body
  if(!name){
   return  res.send({
        message:"Name is Required",
    })
  }
  const existingCategory=await categoryModel.findOne({name})
  if(existingCategory){
    return res.status(200).send({
        success:true,
        message:"Category Already Exisits",
        
    })
  }

  const category=await new categoryModel({name,slug:slugify(name)}).save()
  console.log(category)
 
    res.status(201).send({
        success:"true",
        message:"New category Created",
        
    })

 }catch(err){
    console.log(err)
    res.status(500).send({
        success:false,
        message:"Error in Category",
        err
    })
 }
}
const updateCategoryController=async(req,res)=>{
try{
    const {name}=req.body
const {id}=req.params
const category=await categoryModel.findByIdAndUpdate(id,{name,slug:slugify(name)},{new:true})
res.send({
    success:true,
    message:"category Updated Successfully"
})
}catch(err){
console.log(err)
res.send({
    message:"err from update category"
})
}
}

const deleteCategoryController=async(req,res)=>{
    try{
       const {id}=req.params
       const user=await categoryModel.findByIdAndDelete(id)
       console.log(user)
       res.status(200).send({
        success:true,
        message:"Delete category Successfully"
       })
    }catch(err){
        console.log(err)
        res.status(500).send({
            success:false,
            message:"err from delete category",
            err
        })
    }
}
const categoryController=()=>{
    
}
const singleCategoryController=()=>{

}
module.exports={
    createCategoryController,updateCategoryController,deleteCategoryController,categoryController,singleCategoryController
}