import React, { useState } from 'react'
import Layout from '../../componets/Layout'
import { toast } from 'react-toastify';
import axios from "axios"
import '../../index.css'
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [phone,setPhone]=useState("")
    const [address,setAddress]=useState("")
    const [answer,setAnswer]=useState("")
const navigate=useNavigate()
//console.log(import.meta.env.REACT_APP_API)
    const handelSubmit=async(e)=>{
        e.preventDefault()
        try{
          const res =await axios.post(`${import.meta.env.REACT_APP_API}/api/v1/auth/register`,{name,email,phone,password,address,answer})
          if(res&&res.data.success){
            toast.success(res.data.message)
navigate("/login")
          }
        }catch(err){
  console.log(err)
  toast.error("something went wrong")
        }
    //    axios.post(``)
   // toast.success('Register Successfully')
    }
    //1234567
    
  return (
    <Layout>
        <div className='register'>
            <h1>Register</h1>
            <input required value={name}   onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='Enter Your Name'/>
            <input required value={email} onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder='Enter Your Email'/>
            <input required value={password} onChange={(e)=>{setPassword(e.target.value)}} type="text" placeholder='Enter Your Password'/>
            <input required value={phone} onChange={(e)=>{setPhone(e.target.value)}} type="text" placeholder='Enter Your Phone number'/>
            <input required value={address} onChange={(e)=>{setAddress(e.target.value)}} type="text" placeholder='Enter Your Address'/>
            <input required value={answer} onChange={(e)=>{setAnswer(e.target.value)}} type="text" placeholder='What is Your Nick Name'/>
            <button onClick={handelSubmit}>Submit</button>
        </div>
    </Layout>
  )
}

export default Register