const db = require("../configs/db");
const product = require("../models/product");

module.exports = {
  product: product(db),
};
