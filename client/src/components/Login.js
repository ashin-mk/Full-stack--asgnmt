import React from 'react'
import "./User.css"
import { useState } from 'react'
import Url from './urlgen'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate()
    const [data,setdata]=useState({
        "Username":"",
        "Password":""
    })
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post(Url("Login"),data).then((data)=>{
            console.log(data)
            localStorage.setItem("Tokenft",data.data)
            navigate("/products")

        })
        console.log(data)
    }
  return (
    <div id='SL-page'>
        <h1>Login</h1>
        <div id='User-card'>
            <form>
               <div><label>Username</label>
               <input onChange={(e)=>{setdata({...data,Username:e.target.value})}}/>
               </div> 
               <div><label>Password</label>
               <input onChange={(e)=>{setdata({...data,Password:e.target.value})}}/>
               </div> 
               <button onClick={handleSubmit}> Submit</button>
            </form>
            <Link to="/">Signup</Link>
        </div>
    </div>
  )
}

export default Login