const express = require("express");

const { userController } = require("../controllers");

const userRoutes = express.Router();

userRoutes.get("/", userController.getUsersController);

module.exports = userRoutes;
