import React, { useState } from 'react'
import Layout from '../componets/Layout'
import { toast } from 'react-toastify';
import '../index.css'
const Register = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [phone,setPhone]=useState("")
    const [address,setAddress]=useState("")

    const handelSubmit=(e)=>{
        e.preventDefault()
    //    axios.post(``)
    toast.success('Register Successfully')
    }
  return (
    <Layout>
        <div className='register'>
            <h1>Register</h1>
            <input required value={name}   onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='Enter Your Name'/>
            <input required value={email} onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder='Enter Your Email'/>
            <input required value={password} onChange={(e)=>{setPassword(e.target.value)}} type="text" placeholder='Enter Your Password'/>
            <input required value={phone} onChange={(e)=>{setPhone(e.target.value)}} type="text" placeholder='Enter Your Phone number'/>
            <input required value={address} onChange={(e)=>{setAddress(e.target.value)}} type="text" placeholder='Enter Your Address'/>
            <button onClick={handelSubmit}>Submit</button>
        </div>
    </Layout>
  )
}

export default Register