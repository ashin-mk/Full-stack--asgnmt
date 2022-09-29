const mongoose=require("mongoose")
const User = require("../../../Credochain/server/Modals/UserSchema")
const cart =mongoose.Schema({
    Id:Number,
    Username:String
})
const Cart=mongoose.model("carts",cart)
module.exports=Cart