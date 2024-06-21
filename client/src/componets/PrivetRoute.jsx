import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate, useLocation,useNavigate } from 'react-router-dom'
import axios from 'axios'


const PrivetRoute = ({children}) => {
    const [auth,isAuth]=useAuth()
    const [ok,setOk]=useState(false)
    const navigate=useNavigate()
const location=useLocation()
useEffect(()=>{
    const authCheck=async()=>{
        const res=await axios.get(`${import.meta.env.REACT_APP_API}/api/v1/auth/user-auth`,{
            headers:{
                "Authorization":auth?.token
            }
        })
        if(res.data.ok){
            setOk(true)
        }else{
            setOk(false)
        }
    }
    if(auth.token){
        authCheck()
    }
},[auth.token])

return ok?<>{children}</>:<Navigate to="/login" />

    
//1
}


export default PrivetRoute