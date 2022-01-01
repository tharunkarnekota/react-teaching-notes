import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {
    return (
        <nav className="navbar bg-dark justify-content-center" style={{backgroundColor:"grey"}}>

            
            <li className="nav-link ">
                <NavLink to="/" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    Home
                </NavLink>
            </li>
            <li className="nav-link">
                <NavLink to="/dashboard" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    Dashboard
                </NavLink>
            </li>
            <li className="nav-link ">
                <NavLink to="/about" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    About
                </NavLink>
            </li>
           
            <li className="nav-link">
                <NavLink to="/contact" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    contact us
                </NavLink>
            </li>
            

        </nav>
    )
}

export default Header
