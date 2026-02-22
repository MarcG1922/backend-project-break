
function baseHtml(content) {
  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Tienda</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        nav a { margin-right: 10px; }
        .product-card { border: 1px solid #ccc; padding: 10px; margin: 10px; width: 200px; }
        .product-card img { width: 100%; }
      </style>
    </head>
    <body>
      <nav>
        <a href="/products">Tienda</a> | 
        <a href="/dashboard">Dashboard</a>
      </nav>
      <hr>
      ${content}
    </body>
    </html>
  `;
}

module.exports = baseHtml;