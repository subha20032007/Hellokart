import React from 'react'
import { NavLink } from 'react-router-dom'
import "./admin.css"
const Dropdown = () => {
  return (
    <div className='navbar'>
        <ul className='nav-items'>
            <li className='nav-item'>Home</li>
            <li className='nav-item'>About</li>
            <li className='nav-item'>
             <ul className="dropdown">
        <li><NavLink className="dropdown-item" to="/home">Language</NavLink></li>
            <li><NavLink className="dropdown-item" to="/home">Html</NavLink></li>
            <li><NavLink  className="dropdown-item" to="/home">Css</NavLink></li>
            <li><NavLink className="dropdown-item"  to="/home">JavaScript</NavLink></li>
            <li><NavLink className="dropdown-item"  to="/home">Sql</NavLink></li>
        </ul></li>
            <li className='nav-item'>Contact</li>
        </ul>
       
    </div>
  )
}

export default Dropdown