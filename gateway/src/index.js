const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const { createProxyMiddleware } = require("http-proxy-middleware");
const PORT = process.env.PORT || 5000;

app.use(
  "/users-service",
  createProxyMiddleware({
    target: process.env.SERVICE_USERS,
    pathRewrite: {
      "^/users-service": "",
    },
  })
);
app.use(
  "/products-service",
  createProxyMiddleware({
    target: process.env.SERVICE_PRODUCTS,
    pathRewrite: {
      "^/products-service": "",
    },
  })
);
app.listen(PORT, () => {
  console.log(`Server api-gateway runningin port ${PORT}`);
});
