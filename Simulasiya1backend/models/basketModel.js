import mongoose from "mongoose";

const basketSchema = new mongoose.Schema({
  image: { type: String, required: true },
  mazus: { type: String, required: true },
  price: { type: Number, required: true },
}, { timestamps: true });

const BasketModel = mongoose.model('Basket', basketSchema);

export default BasketModel;
