import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    image:{type:String, required:true},
    mazus:{type:String, required:true},
    price:{type:String, required:true},
    
}, {timestamps:true})

const ProductModel = mongoose.model('Products', productSchema)

export default ProductModel