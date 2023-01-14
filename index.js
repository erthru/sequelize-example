const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const environment = require("./utils/environment");
const db = require("./configs/db");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(cors());
app.use(routes);

app.listen(environment.PORT, async function () {
  try {
    await db.sync();
    console.log(`db successfull to sync`);
    console.log("app connected");
  } catch (err) {
    console.log(`db failed to sync: ${err.message}`);
  }
});
