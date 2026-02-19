const Product = require('../models/Product');
const baseHtml = require('../helpers/baseHtml');
const getProductCards = require('../helpers/getProductCards');

const showProducts = async (req, res) => {
  try {
    const products = await Product.find();
    const productCards = getProductCards(products);
    const html = baseHtml(`
      <h1>Nuestra Tienda</h1>
      ${productCards}
    `);
    res.send(html);
  } catch (error) {
    res.status(500).send("Error al obtener productos");
  }
};

const createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect('/products');
  } catch (error) {
    res.status(400).send("Error al crear producto");
  }
};

module.exports = {
  showProducts,
  createProduct
};