const environment = require("../utils/environment");
const { Sequelize } = require("sequelize");

module.exports = new Sequelize(
  environment.DB_NAME,
  environment.DB_USER,
  environment.DB_PASSWORD,
  {
    host: environment.DB_HOST,
    dialect: "mysql",
    logging: false,
  }
);
