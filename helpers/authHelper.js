const bcrypt=require("bcrypt")

const hashPassword=async (password)=>{
    try{
        const saltRounds=6
        const hashedPassword=bcrypt.hash(password,saltRounds);
        return hashedPassword;
    }catch(err){
        console.log(err)
    }
   

}

const comparePassword=async (password,hashedPassword)=>{
 return bcrypt.compare(password,hashedPassword)
}

module.exports={hashPassword,comparePassword}
