import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
export const modelProduct = sequelize.define("products", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.DOUBLE,
  },
  stock:{
    type:DataTypes.BOOLEAN,
    defaultValue:true
  }
});
