// services/productsService.js

const products = [];

function addProduct(name, price, description) {
  const newProduct = { id: products.length + 1, name, price, description };
  products.push(newProduct);
  return newProduct;
}

function deleteProduct(id) {
  const index = products.findIndex(product => product.id === id);
  if (index !== -1) {
    return products.splice(index, 1);
  }
  return null;
}

function fetchProducts() {
  return products;
}

module.exports = { addProduct, deleteProduct, fetchProducts };
