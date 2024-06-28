import React from 'react'
import { NavLink,Link, useLocation } from 'react-router-dom'
import "../index.css"
import { useAuth } from '../context/AuthContext'
const Header = () => {
  const [auth,setAuth]=useAuth()
  const location=useLocation()
//console.log(location)
  const handelLogout=()=>{
    setAuth({...auth,user:null,token:""})
    localStorage.removeItem("auth")
  }
  return (
  <>
 <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <Link to="/" className="logo" >
    <h5>HELLO</h5>
    <h5>CART</h5>
    </Link>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
      <NavLink to="/"className="nav-link" >Home</NavLink>
      </li>

      {
        !auth?.user?(<><li className="nav-item">
        <NavLink to="/register" className="nav-link" >Register</NavLink>
       </li>
       <li className="nav-item">
        <NavLink   to="/login" className="nav-link" >Login</NavLink>
       </li></>):(<>{location.pathname==="/admin/dashboard"?
        <li className="nav-item">
        <NavLink   to="/user/dashboard" className="nav-link" >
        </NavLink>
       </li>: <div><li className="nav-item">
        <NavLink   to="/admin/dashboard" className="nav-link" >Admin</NavLink>
       </li></div>}
        <li className="nav-item">
        <NavLink  onClick={handelLogout} to="/login" className="nav-link" >Logout</NavLink>
       </li></>)
      }
        
        <li className="nav-item">
         <NavLink  to="/user/cart" className="nav-link" >Cart (0)</NavLink>
        </li>
      </ul>

    </div>
  </div>
</nav>

  </>
  )
}

export default Header
