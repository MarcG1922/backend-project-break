const getProductCards = (products) => {
  let html = '<div class="product-grid">';

  for (let product of products) {
    html += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}" />
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>Categoría: ${product.category}</p>
        <p>Talla: ${product.size}</p>
        <p class="price">${product.price} €</p>
      </div>
    `;
  }

  html += '</div>';
  return html;
};

module.exports = getProductCards;