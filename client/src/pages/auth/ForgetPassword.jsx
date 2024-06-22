import React, { useState } from 'react'
import Layout from '../../componets/Layout'
import { toast } from 'react-toastify';
import axios from "axios"
import '../../index.css'
import { useNavigate } from 'react-router-dom';
const ForgetPassword = () => {
    const [email,setEmail]=useState("")
    const [newPassword,setNewPassword]=useState("")
    const [answer,setAnswer]=useState("")
const navigate=useNavigate()
//console.log(import.meta.env.REACT_APP_API)
    const handelReset=async()=>{
console.log("click")
        try{
          const res =await axios.post(`${import.meta.env.REACT_APP_API}/api/v1/auth/forgot-password`,{email,newPassword,answer})
          
          console.log(res)
          if(res&&res.data.success){
            toast.success(res.data.message)
            navigate("/login")
          }
        }catch(err){
           console.log(err)
           toast.error("something went wrong")
        }
    }
  return (
    <Layout>
         <div className="reset" >
            <h3>Reset Password</h3>
            <input required value={email} onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder='Enter Your Email'/>
            <input required value={newPassword} onChange={(e)=>{setNewPassword(e.target.value)}} type="text" placeholder='Enter Your New Password'/>
            <input required value={answer} onChange={(e)=>{setAnswer(e.target.value)}} type="text" placeholder='What is Your Nick Name'/>
            <button onClick={()=>{handelReset()}}>Reset</button>
        </div>
    </Layout>
  )
}

export default ForgetPassword