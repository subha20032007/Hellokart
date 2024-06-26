import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminMenu = () => {
  return (
    <div>
        <div>
            <h3>Admin Panel</h3>
        </div>
        <div>
           <NavLink classname="admin-nav" to="/dashboard-admin/create-category"> Create Category</NavLink>
           <NavLink classname="admin-nav" to="/dashboard-admin/create-products"> Create Products </NavLink>
           <NavLink classname="admin-nav" to="/dashboard-admin/users" > Users </NavLink>

        </div>
    </div>
  )
}

export default AdminMenu