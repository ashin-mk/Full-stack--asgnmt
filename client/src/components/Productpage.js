import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Url from './urlgen'
import "./Product.css"
import Header from './Header'
import { useNavigate } from 'react-router-dom'
const Productpage = () => {
    const [data,setdata]=useState()
    const token1=localStorage.getItem("Tokenft")
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get(Url("product")).then((fetcheddata)=>{
            console.log(fetcheddata.data)
            setdata(fetcheddata.data)
        })

    },[])

    const handlecart=(e)=>{
axios({
    method:'POST',
    url:Url("addcart"),
    headers:{
        token:token1
    },
    data:{
        Id:data[e.target.value]}
}).then(()=>{
    navigate("/cart")
})
    }
  return (
    <div id="producpage">
        <Header/>
        {data && data.map((items,i)=>{
            return(
                <div id='productcard' key={i}>

                   
                    <img src={items.image} id="imgproduct"></img>
                    <p>Category : {items.category}</p>
                    <p>Name : {items.title}</p>
                    <p>Item Details : {items.description}</p>
                    <p>Price : {items.price}</p>
                    <p>Available quantity: {items.rating.count}</p>
                    <button value={i} onClick={handlecart}>Add to Cart</button>
                    </div>
            )
        })

        }
    </div>
  )
}

export default Productpage