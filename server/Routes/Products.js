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
    console.log(req.headers)
try{
    const user=JWT.verify(req.headers.token , process.env.SECRET_KEY)
    console.log("working")
    if(user.length){
        console.log("working")
        const cartdet=await Cart.find({
            Username:user,
            Id:req.body.Id
        })
        if (cartdet.length){
            res.status(400).send("ALready in cart")
        }else{
           await Cart.create({
                Username:user,
                Id:req.body.Id
            })
res.status(200).send("succes")
        }
    }

}
catch{
    console.log("working")
res.status(400).send("unauthorized user")
}
})

router.get("/cartdata",)


module.exports=router