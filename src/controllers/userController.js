const { userModel } = require("../models");

function getUsersController(req, res) {
  const users = userModel.getUsers();
  res.status(200).json(users);
}

module.exports = { getUsersController };
