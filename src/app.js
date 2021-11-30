const express = require("express");
const { userRoutes } = require("./routes");

const app = express();

// it parses the body and put it in the req
app.use(express.json());

app.use("/users", userRoutes)

module.exports = app;
