const express = require('express');
const router = express.Router();
const { showProducts, createProduct } = require('../controllers/productController');

router.get('/products', showProducts);

router.post('/products', createProduct);

module.exports = router;
