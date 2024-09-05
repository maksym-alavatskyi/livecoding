// services/usersService.js

const users = [];

function addUser(username, password) {
  const newUser = { id: users.length + 1, username, password };
  users.push(newUser);
  return newUser;
}

function deleteUser(id) {
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1);
  }
  return null;
}

async function login(username, password) {
  const user = users.find(user => user.username === username);
  if (user && user.password === password) {
    return { message: 'Login successful', user };
  }
  throw new Error('Invalid credentials');
}

module.exports = { addUser, deleteUser, login };
