// services/addressesService.js

const addresses = [];

function addAddress(user, street, city, state, postalCode, country) {
  const newAddress = { id: addresses.length + 1, userId: user.id, street, city, state, postalCode, country };
  addresses.push(newAddress);
  return newAddress;
}

function deleteAddress(id) {
  const index = addresses.findIndex(address => address.id === id);
  if (index !== -1) {
    return addresses.splice(index, 1);
  }
  return null;
}

function fetchAddressesByUser(userId) {
  return addresses.filter(address => address.userId === userId);
}

module.exports = { addAddress, deleteAddress, fetchAddressesByUser };
