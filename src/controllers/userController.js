const { userModel } = require("../models");

function getUsersController(req, res) {
  const users = userModel.getUsers();
  res.status(200).json(users);
}

function getUserByIdController(req, res) {
  const userId = parseInt(req.params.id);
  let user = userModel.getOneUser(userId);
  if (user.length > 0) res.status(200).json(user);
  else res.status(404).send("There's no user with that id");
}

module.exports = { getUsersController, getUserByIdController };
