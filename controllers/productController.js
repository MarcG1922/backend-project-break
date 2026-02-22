const Product = require('../models/Product');
const baseHtml = require('../helpers/baseHtml');
const getProductCards = require('../helpers/getProductCards');
const cloudinary = require('../config/cloudinary');

const showProducts = async (req, res) => {
  try {
    const products = await Product.find();
    const productCards = getProductCards(products, false);
    const html = baseHtml(`
      <h1>Nuestra Tienda</h1>
      <div style="display:flex; flex-wrap:wrap;">${productCards}</div>
    `);
    res.send(html);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al obtener productos");
  }
};

const showDashboard = async (req, res) => {
  try {
    const products = await Product.find();
    const productCards = getProductCards(products, true);
    const html = baseHtml(`
      <h1>Dashboard</h1>
      <a href="/dashboard/new">Nuevo Producto</a>
      <div style="display:flex; flex-wrap:wrap;">${productCards}</div>
    `);
    res.send(html);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al cargar dashboard");
  }
};

const createProduct = async (req, res) => {
  try {
    const file = req.file;
    if (!file) return res.status(400).send("No se subió ninguna imagen");

    const uploadResult = await cloudinary.uploader.upload_stream({ resource_type: 'image' }, async (error, result) => {
      if (error) {
        console.log(error);
        return res.status(400).send("Error al subir imagen");
      }

      const newProduct = new Product({
        ...req.body,
        image: result.secure_url
      });

      await newProduct.save();
      res.redirect('/products');
    });

    uploadResult.end(file.buffer);
  } catch (error) {
    console.log(error);
    res.status(400).send("Error al crear producto");
  }
};

const updateProduct = async (req, res) => {
  try {
    const file = req.file;
    let updateData = { ...req.body };

    if (file) {
      const uploadResult = await cloudinary.uploader.upload_stream({ resource_type: 'image' }, async (error, result) => {
        if (error) {
          console.log(error);
          return res.status(400).send("Error al subir imagen");
        }
        updateData.image = result.secure_url;
        await Product.findByIdAndUpdate(req.params.id, updateData, { new: true });
        res.redirect('/dashboard');
      });

      uploadResult.end(file.buffer);
    } else {
      await Product.findByIdAndUpdate(req.params.id, updateData, { new: true });
      res.redirect('/dashboard');
    }
  } catch (error) {
    console.log(error);
    res.status(400).send("Error al actualizar producto");
  }
};

const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect('/dashboard');
  } catch (error) {
    console.log(error);
    res.status(400).send("Error al eliminar producto");
  }
};

module.exports = {
  showProducts,
  showDashboard,
  createProduct,
  updateProduct,
  deleteProduct
};