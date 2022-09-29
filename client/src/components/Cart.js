import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Url from './urlgen'
import './Product.css'

const Cart = () => {
    const [data,setdata]=useState()
    const token=localStorage.getItem("Tokenft")
    useEffect(()=>{

        axios({
            method:"GET",
            url:Url("cartdata"),
            headers:{
                token:token
            }
        }).then((data)=>{
            setdata(data.data)
            console.log(data.data)
        })
    },[])
  
      
  return (
    <div id='cartpage'>
         {data && data.map((items,i)=>{
            return(
                <div id='productcard' key={i}>

                   
                    <img src={items.Product.image} id="imgproduct"></img>
                    <p>Category : {items.Product.category}</p>
                    <p>Name : {items.Product.title}</p>
                    <p>Item Details : {items.Product.description}</p>
                    <p>Price : {items.Product.price}</p>
                    <p>Available quantity: {items.Product.rating.count}</p>
                    </div>
            )
        })

        }

    </div>
  )
}

export default Cart