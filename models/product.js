const { DataTypes } = require("sequelize");

module.exports = function (db) {
  return db.define("Product", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.NUMBER,
  });
};
