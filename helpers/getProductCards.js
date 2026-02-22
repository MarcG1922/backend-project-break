
function getProductCards(products, isDashboard = false) {
  let html = '';
  for (let product of products) {
    html += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>Precio: ${product.price}€</p>
        <p>Categoría: ${product.category} | Talla: ${product.size}</p>
        <a href="/products/${product._id}">Ver detalle</a>
        ${isDashboard ? `
          <div style="margin-top:5px;">
            <a href="/dashboard/${product._id}/edit">Editar</a> | 
            <form action="/dashboard/${product._id}?_method=DELETE" method="POST" style="display:inline;">
              <button type="submit">Eliminar</button>
            </form>
          </div>
        ` : ''}
      </div>
    `;
  }
  return html;
}

module.exports = getProductCards;