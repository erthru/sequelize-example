const model = require("../models");

async function getAll(req, res) {
  try {
    const products = await model.product.findAll();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

async function create(req, res) {
  try {
    const { name, description, price } = req.body;

    const product = await model.product.create({
      name,
      description,
      price,
    });

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

async function update(req, res) {
  try {
    const { id } = req.params;
    const { name, description, price } = req.body;

    const product = await model.product.update(
      {
        name,
        description,
        price,
      },
      {
        where: {
          id,
        },
      }
    );

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

async function remove(req, res) {
  try {
    const { id } = req.params;

    const product = await model.product.destroy({
      where: {
        id,
      },
    });

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

module.exports = {
  getAll,
  create,
  update,
  remove,
};
