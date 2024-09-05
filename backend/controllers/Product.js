const db = require("../models/index");

module.exports = {
  getAll: function (req, res) {
    db.Product.findAll({})
      .then((products) => {
        res.send(products);
      })
      .catch((error) => {
        throw error;
      });
  },
  getOne: (req, res) => {
    db.Product.findOne({ where: { id: req.params.idprod } })
      .then((product) => {
        if (!product) {
          return res.status(404).json({ message: "Product not found" });
        }
        return res.status(200).json(product);
      })
      .catch((error) => {
        return res
          .status(500)
          .json({ message: "Error retrieving product", error });
      });
  },
  addProduct: function (req, res) {
    db.Product.create(req.body)
      .then((products) => {
        res.send(products);
      })
      .catch((error) => {
        throw error;
      });
  },
  deleteProduct: function (req, res) {
    db.Product.destroy({
      where: { id: req.params.idprod },
    })
      .then(() => {
        res.status(204).send({ message: "Deleted successfully!" });
      })
      .catch((error) => {
        throw error;
      });
  },
  updateProduct: async function (req, res) {
    db.Product.update(req.body, { where: { id: req.params.idprod } })
      .then((data) => {
        res.status(201).send(data);
      })
      .catch((error) => {
        throw error;
      });
  },
};
