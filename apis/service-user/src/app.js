const express = require("express");
const app = express();
app.use(express.json());
app.use("/api",require("../src/routes/user.routes"))
module.exports = app;