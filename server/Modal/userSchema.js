const mongoose=require("mongoose")
 const userschema=mongoose.Schema({
Username:String,
Password:String
 })
 const Users=mongoose.model("users",userschema)
 module.exports=Users