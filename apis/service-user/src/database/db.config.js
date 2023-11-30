const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/service-one")
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("Error in connection: "+err);
  });
