import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Header.css"

const Header = () => {
    const navigate=useNavigate()
    const handleLogout=()=>{
        localStorage.setItem("Tokenft","")
        navigate("/login")
    }
  return (
    <div id='header'>
        <div id="cartnav">
<Link to={"/cart"}><div> Cart</div></Link></div>
<button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Header