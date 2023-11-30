import Sequelize from "sequelize";
export const sequelize = new Sequelize("micro_service", "leowader", "251510", {
  host: "localhost",
  dialect: "postgres",
});
