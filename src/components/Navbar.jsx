import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <nav>
            <Link to="/main">Mainpage</Link>
            <Link to="/events">Events</Link>
            <Link to="/eventregister">Register</Link>
            <Link to="/contact">Contact</Link>
        </nav>        
    </div>
  )
}

export default Navbar
