const fakeDb = require("../data/fakeDb.json");

const users = fakeDb.users;

function getUsers() {
  return users;
}
function getOneUser(userId) {
  return users.filter((el) => el.id === userId);
}

module.exports = { getUsers, getOneUser };
