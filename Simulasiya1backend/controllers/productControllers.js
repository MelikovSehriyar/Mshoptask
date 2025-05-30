import ProductModel from "../models/productModel.js"


const getProduct = async (req,res) => {
    const product = await ProductModel.find()
    res.json(product)
}

const postProduct = async (req,res) => {
    const {image, mazus,price} = req.body
    const product = {image, mazus,price}
    await ProductModel.create(product)
    res.json(product)
}

const deleteProduct = async (req,res) => {
    const {id} = req.params
    await ProductModel.findByIdAndDelete(id)
    res.json(`${id} -Data silindi brattttt`)
}
 
export {getProduct,postProduct, deleteProduct}