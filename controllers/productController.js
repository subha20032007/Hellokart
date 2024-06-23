const createProductController=async(req,res)=>{
try{

}catch(err){
    console.log(err)
    res.status(500).send({
        success:false,
        message:"Error in createing product"
    })
}
}

module.exports={
    createProductController
}