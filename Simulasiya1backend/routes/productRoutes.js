import express from 'express'
import {getProduct, postProduct, deleteProduct} from '../controllers/productControllers.js'




const router = express.Router()


router
.get('/products', getProduct)
.post('/products', postProduct)
.delete('/products/:id', deleteProduct)

export default router
