const express = require('express');
const dotenv = require('dotenv');
const methodOverride = require('method-override');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.send('<h1>Servidor funcionando 🚀</h1>');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🔥 Servidor corriendo en puerto ${PORT}`);
});
