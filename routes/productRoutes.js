const express = require('express');
const router = express.Router();
const { 
  showProducts, 
  showDashboard, 
  createProduct, 
  updateProduct, 
  deleteProduct 
} = require('../controllers/productController');

const upload = require('../middlewares/uploadMiddleware');
const Product = require('../models/Product');


router.get('/products', showProducts);


router.get('/dashboard', showDashboard);

router.get('/dashboard/new', (req, res) => {
  const html = `
    <h1>Nuevo Producto</h1>
    <form action="/dashboard" method="POST" enctype="multipart/form-data">
      <input type="text" name="name" placeholder="Nombre" required><br>
      <input type="text" name="description" placeholder="Descripción" required><br>
      <input type="text" name="category" placeholder="Categoría" required><br>
      <input type="text" name="size" placeholder="Talla" required><br>
      <input type="number" name="price" placeholder="Precio" required><br>
      <input type="file" name="image" accept="image/*" required><br>
      <button type="submit">Crear Producto</button>
    </form>
    <a href="/dashboard">Volver al Dashboard</a>
  `;
  res.send(html);
});


router.get('/dashboard/:id/edit', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.send('Producto no encontrado');

    const html = `
      <h1>Editar Producto</h1>
      <form action="/dashboard/${product._id}?_method=PUT" method="POST" enctype="multipart/form-data">
        <input type="text" name="name" value="${product.name}" required><br>
        <input type="text" name="description" value="${product.description}" required><br>
        <input type="text" name="category" value="${product.category}" required><br>
        <input type="text" name="size" value="${product.size}" required><br>
        <input type="number" name="price" value="${product.price}" required><br>
        <p>Imagen actual:</p>
        <img src="${product.image}" alt="${product.name}" width="150"><br>
        <input type="file" name="image" accept="image/*"><br>
        <button type="submit">Actualizar Producto</button>
      </form>
      <a href="/dashboard">Volver al Dashboard</a>
    `;
    res.send(html);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al cargar formulario de edición");
  }
});

router.post('/dashboard', upload.single('image'), createProduct);

router.put('/dashboard/:id', upload.single('image'), updateProduct);

router.delete('/dashboard/:id', deleteProduct);

module.exports = router;