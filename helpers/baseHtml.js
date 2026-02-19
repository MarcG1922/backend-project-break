const baseHtml = (content) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Tienda de Ropa</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 40px;
            background-color: #f5f5f5;
          }
          .product-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
          }
          .product-card {
            background: white;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          }
          .product-card img {
            width: 100%;
            height: 200px;
            object-fit: cover;
          }
          .price {
            font-weight: bold;
            color: #2c3e50;
          }
        </style>
      </head>
      <body>
        ${content}
      </body>
    </html>
  `;
};

module.exports = baseHtml;