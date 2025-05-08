import BasketModel from "../models/basketModel.js";


const getBasket = async (req, res) => {
  try {
    const basket = await BasketModel.find();
    res.json(basket);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch basket items", error });
  }
};


const postBasket = async (req, res) => {
  try {
    const { image, mazus, price } = req.body;

    if (!image || !mazus || price == null) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newBasketItem = await BasketModel.create({ image, mazus, price });
    res.status(201).json(newBasketItem);
  } catch (error) {
    res.status(500).json({ message: "Failed to add item to basket", error });
  }
};


const deleteBasket = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await BasketModel.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.json({ message: `Item with ID ${id} was deleted.` });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete item", error });
  }
};

export { getBasket, postBasket, deleteBasket };
