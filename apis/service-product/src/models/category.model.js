import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { modelProduct } from "./product.model.js";
export const categoryModel = sequelize.define("categorias", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
});
//relacion: una categoria tiene muchos productos
categoryModel.hasMany(modelProduct, {
  foreignKey: "categoryId",
  sourceKey: "id",
});
modelProduct.belongsTo(categoryModel, {
  foreignKey: "categoryId",
  targetId: "id",
});
