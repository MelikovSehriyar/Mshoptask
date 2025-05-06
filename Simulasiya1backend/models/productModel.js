import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    image:{type:String, required:true},
    name:{type:String, required:true},
    span:{type:String, required:true},
    
}, {timestamps:true})

const ProductModel = mongoose.model('Products', productSchema)

export default ProductModel