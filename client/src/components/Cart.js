import axios from 'axios'
import React, { useEffect } from 'react'
import Url from './urlgen'

const Cart = () => {

    const token=localStorage.getItem("Tokenft")
    useEffect(()=>{

        axios({
            method:"GET",
            url:Url("cartdata"),
            headers:{
                token:token
            }
        }).then((data)=>{
            console.log(data)
        })
    })
  return (
    <div>Cart</div>
  )
}

export default Cart