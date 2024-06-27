import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate, useLocation,useNavigate } from 'react-router-dom'



const PrivateRoute = ({children}) => {
    const [auth,isAuth]=useAuth()
    const location=useLocation()

return auth.token!==""?<>{children}</>:<Navigate state={location.pathname} to="/login" />

    
//12345
}


export default PrivateRoute
//const [ok,setOk]=useState(false)
//const navigate=useNavigate()
// const location=useLocation()
// useEffect(()=>{
//     const authCheck=async()=>{
//         const res=await axios.get(`${import.meta.env.REACT_APP_API}/api/v1/auth/user-auth`,{
//             headers:{
//                 "Authorization":auth?.token
//             }
//         })
//       console.log("$$$",res.data.ok)
//         if(res.data.ok){
//             setOk(true)
//         }else{
//             setOk(false)
//         }
//     }
//     if(auth.token){
//         authCheck()
//     }
//     console.log("**",ok)
// },[auth.token,ok])