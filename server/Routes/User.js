const express=require("express")
const JWT=require("jsonwebtoken")
const bcrypt=require('bcrypt')
const router=express.Router()
const Users=require('../Modal/userSchema')
const salt=10

router.post("/signup",async(req,res)=>{
    const userexist=await Users.find({
        Username:req.body.Username.toLowerCase()
    })
    if(userexist.length){
        res.status(400).send("User exist")
    }else{
        bcrypt.genSalt(salt,(salterr,salval)=>{
            if(!salterr){
                bcrypt.hash(req.body.Password,salval,(hasherr,hashval)=>{
                    if(!hasherr){
                    Users.create({
                        Username:req.body.Username.toLowerCase(),
                        Password:hashval
                    })
                    res.status(200).send("user succesfully created")
                    }
                })
            }
        })
    }
})

router.post("/Login",async(req,res)=>{
    userexist=await Users.find({Username:req.body.Username.toLowerCase()})
    if(userexist.length){
        ispassword=bcrypt.compare(req.body.Password,userexist[0].Password)
        if(ispassword){
            // console.log(user)
            const token=JWT.sign(userexist[0].Username,process.env.SECRET_KEY)
            console.log(userexist)
            res.status(200).send(token)
        }else{
            res.status(400).send("Password is wrong")
        }
    }else{
        res.status(400).send("Username is wrong")
    }
})

module.exports=router