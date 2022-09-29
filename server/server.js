const express=require("express")
const app=express()
const JWT=require("jsonwebtoken")
const mongoose=require("mongoose")
const Cors=require("Cors")
const Users=require("./Routes/User")
const Products=require("./Routes/Products")
require('dotenv').config()


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(Cors())


app.listen(process.env.PORT || 3001,(err)=>{
    if(!err){
        console.log("server is running")
    }else{
        console.log("err running server")
    }
})

mongoose.connect("mongodb://localhost/fullstackapp",()=>{
    console.log("connnected to db")
},()=>{
    console.log('err connecting db')
})

app.get("/",(req,res)=>{
    res.send("backend")
})

app.use("/",Users)
app.use("/",Products)