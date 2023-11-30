import app from "./app.js";
import { sequelize } from "./database/database.js";
const PORT = process.env.PORT || 5002;
async function main() {
  try {
    await sequelize.sync({force:false});
    app.listen(PORT, () => {
      console.log(`Service-product running http://localhost:${PORT}`);
    });
    console.log("Conection has been established successfully in Postgres");
  } catch (error) {
    console.log("Error in connection in db Postgres",erro);
  }
}
app.get("/", (req, res) => {
  res.send({ message: "bienvenido a Service-product" });
});
main();
