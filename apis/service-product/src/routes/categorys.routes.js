import { Router } from "express";
import {getCategorys,createCategory,deleteCategory, uptadeCategory,getCategoryByroduct} from "../controllers/category.controller.js"
const router = Router();
router.get("/categorias",getCategorys);
router.get("/categoria/:id/products",getCategoryByroduct);
router.post("/create-category",createCategory);
router.delete("/delete-category/:id",deleteCategory)
router.put("/categoria/:id",uptadeCategory)
export default router;