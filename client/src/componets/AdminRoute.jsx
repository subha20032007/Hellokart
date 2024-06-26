import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate, useLocation,useNavigate } from 'react-router-dom'
import axios from 'axios'



const AdminRoute = ({children}) => {
    const [auth,isAuth]=useAuth()
    const [ok,setOk]=useState(false)
    const location=useLocation()
    useEffect(()=>{
        const authCheck=async()=>{
            const res=await axios.get("api.v1/auth/admin-auth")
            if(res.data.ok){
                setOk(true)
            }else{
                setOk(false)
            }
        }
        if(auth?.token) authCheck()
    },[auth?.token])

return ok?<>{children}</>:<Navigate state={location.pathname} to="/login" />
}


export default AdminRoute