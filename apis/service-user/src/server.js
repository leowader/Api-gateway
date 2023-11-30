const app = require("./app");
require("./database/db.config")
const PORT = process.env.PORT || 5001;
async function init() {
  app.listen(5001);
  console.log(`Service-user running http://localhost:${PORT}`);
}
init();
