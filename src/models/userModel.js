const fakeDb = require("../data/fakeDb.json");

const users = fakeDb.users;

function getUsers() {
  return users;
}

module.exports = { getUsers };
