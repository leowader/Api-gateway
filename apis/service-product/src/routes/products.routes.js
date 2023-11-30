import { Router } from "express";
import {getProducts,createProduct,uptadeProduct,deleteProduct} from "../controllers/products.controller.js"
const router = Router();
router.get("/products",getProducts);
router.put("/product/:id",uptadeProduct);
router.delete("/product/:id",deleteProduct);
router.post("/create-product",createProduct);
export default router;
