import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate, useLocation,useNavigate } from 'react-router-dom'
import axios from 'axios'



const AdminRoute = ({children}) => {
    const [auth,isAuth]=useAuth()
    const location=useLocation()
    useEffect(()=>{
        const authCheck=()=>{
            const res=await axios.get("api.v1/auth/admin-auth")
        }
    })

return auth.token!==""?<>{children}</>:<Navigate state={location.pathname} to="/login" />
}


export default AdminRoute