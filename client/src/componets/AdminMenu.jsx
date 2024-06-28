import React from 'react'
import { NavLink } from 'react-router-dom'
import "../pages/admin/admin.css"
import Layout from './Layout'
const AdminMenu = () => {
  return (
  
    <div className="Nav-menu">
        <div>
            <h3>Admin Panel</h3>
        </div>
        <div >
           <NavLink className="admin-nav" to="/admin/create-category"> Create Category</NavLink>
           <NavLink className="admin-nav" to="/admin/create-products"> Create Products </NavLink>
           <NavLink className="admin-nav" to="/admin/users" > Users </NavLink>

        </div>
    </div>

  )
}

export default AdminMenu