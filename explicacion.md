# Tienda de Ropa - Backend

Proyecto de tienda de ropa con dashboard de administración, subida de imágenes a Cloudinary y CRUD completo.

## Tecnologías

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- Cloudinary
- Multer
- Method-override
- dotenv

Endpoints principales
Método	Ruta	Descripción
GET	/products	Lista todos los productos
GET	/dashboard	Muestra dashboard con productos
GET	/dashboard/new	Formulario para crear producto
POST	/dashboard	Crea un nuevo producto
GET	/dashboard/:id/edit	Formulario para editar producto
PUT	/dashboard/:id	Actualiza un producto
DELETE	/dashboard/:id	Elimina un producto

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/MarcG1922/backend-project-break.git
cd backend-project-break