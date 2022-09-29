import React from 'react'
import "./User.css"
import { useState } from 'react'
import Url from './urlgen'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [data,setdata]=useState({
        "Username":"",
        "Password":""
    })
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post(Url("Signup"),data).then(()=>{
            console.log(data)
        })
console.log(data)
    }
  return (
    <div id='SL-page'>
    <h1>Signup</h1>
    <div id='User-card'>
        <form>
           <div><label>Username</label>
           <input onChange={(e)=>{setdata({...data,Username:e.target.value})}}/>
           </div> 
           <div><label>Password</label>
           <input onChange={(e)=>{setdata({...data,Password:e.target.value})}}/>
           </div> 
           <button onClick={handleSubmit}> Submit</button>
           <Link to="/Login">Login</Link>
        </form>
    </div>
</div>
  )
}

export default Signup