const express = require("express");
const routes = express.Router();
const controller = require("../controllers/user.controller");
routes.get("/", (req, res) => {
  res.send({ message: "bienvenido a service-user" });
});
routes.post("/create-user", controller.createUser);
routes.get("/users", controller.getUsers);
module.exports = routes;
