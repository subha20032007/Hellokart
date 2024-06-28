import React  from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate, useLocation,useNavigate } from 'react-router-dom'
import axios from 'axios'



const AdminRoute = ({children}) => {
    const [auth,isAuth]=useAuth()
   // const [ok,setOk]=useState(false)
    const location=useLocation()
 

return auth?.user?.role>0?<>{children}</>:<Navigate state={location.pathname} to="/login" />
}


export default AdminRoute