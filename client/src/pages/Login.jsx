import React from 'react'
import Layout from '../componets/Layout'
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import '../index.css'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [auth,setAuth]=useAuth()
const navigate=useNavigate()
//console.log(import.meta.env.REACT_APP_API)
    const handelSubmit=async(e)=>{
        e.preventDefault()
        console.log(password)
        try{
          const res =await axios.post(`${import.meta.env.REACT_APP_API}/api/v1/auth/login`,{email,password})
          console.log(res)
          if(res&&res.data.success){
            toast.success(res.data.message)
            setAuth({...auth,user:res.data.user,token:res.data.token})
         localStorage.setItem("auth",JSON.stringify(res.data))
navigate("/")
          }else if(res&&!res.data.success){
            toast.error(res.data.message)
          }
        }catch(err){
  console.log(err)
  toast.error("something went wrong")
        }
    }
  return (
    <Layout>
         <div className='login'>
            <h1>LOGIN </h1>
            <input required value={email} onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder='Enter Your Email'/>
            <input required value={password} onChange={(e)=>{setPassword(e.target.value)}} type="text" placeholder='Enter Your Password'/>
            <button onClick={handelSubmit}>Submit</button>
        </div>
    </Layout>
  )
}

export default Login