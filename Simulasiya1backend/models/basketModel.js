import mongoose from "mongoose";

const basketSchema = mongoose.Schema({
    image:{type:String, required:true},
    beer:{type:String, required:true},
    name:{type:String, required:true},
    
}, {timestamps:true})

const BasketModel = mongoose.model('Products', basketSchema)

export default BasketModel