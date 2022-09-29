const mongoose=require("mongoose")
const User = require("../../../Credochain/server/Modals/UserSchema")
const cart =mongoose.Schema({
Username:String,
Product:Object,
Id:Number
})
const Cart=mongoose.model("carts",cart)
module.exports=Cart