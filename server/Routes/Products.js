const express=require("express")
const JWT=require("jsonwebtoken")
const router=express.Router()
const Products=require('../Modal/ProductSchema')
const Cart=require('../Modal/Cartschema')

router.post('/addproductstodb',async(req,res)=>{
    Products.insertMany(
req.body
    )
    res.send("done")
})

router.get("/product",async(req,res)=>{
    const data=await Products.find()
    res.status(200).send(data)
})

router.post("/addcart",async(req,res)=>{
    console.log(req.headers.token )
try{
    const username=JWT.verify(req.headers.token,process.env.SECRET_KEY)
    if(username.length){
        console.log('data',req.body.Id)
        const cartdet=await Cart.find({
            Username:username,
            Id:req.body.Id.id
        })
        if (cartdet.length){
            res.status(400).send("ALready in cart")
        }else{
           await Cart.create({Username:username,Product:req.body.Id,Id:req.body.Id.id})
res.status(200).send("succes")
        }
    }

}
catch{
res.status(400).send("unauthorized user")
}
})

router.get("/cartdata",async(req,res)=>{
    try {
        const username=JWT.verify(req.headers.token,process.env.SECRET_KEY)
        const data=await Cart.find({Username:username})
        res.status(200).send(data)
    } catch (error) {
        
    }
   
})


module.exports=router