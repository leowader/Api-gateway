import expres from "express";
import routeProduct from "./routes/products.routes.js";
import routeCategory from "./routes/categorys.routes.js";
const app = expres();
app.use(expres.json());
app.use("/api", routeProduct);
app.use("/api", routeCategory);
export default app;
