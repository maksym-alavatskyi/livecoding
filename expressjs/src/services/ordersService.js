// services/ordersService.js

const orders = [];

function addOrder(userId, productIds, totalAmount) {
  const newOrder = { id: orders.length + 1, userId, productIds, totalAmount };
  orders.push(newOrder);
  return newOrder;
}

function deleteOrder(id) {
  const index = orders.findIndex(order => order.id === id);
  if (index !== -1) {
    return orders.splice(index, 1);
  }
  return null;
}

function fetchOrders() {
  return orders;
}

module.exports = { addOrder, deleteOrder, fetchOrders };
