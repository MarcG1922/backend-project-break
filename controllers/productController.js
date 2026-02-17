const Product = require('../models/Product');

const showProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (error) {
    res.status(500).send("Error al obtener productos");
  }
};

const createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.send("Producto creado");
  } catch (error) {
    res.status(400).send("Error al crear producto");
  }
};

module.exports = {
  showProducts,
  createProduct
};
