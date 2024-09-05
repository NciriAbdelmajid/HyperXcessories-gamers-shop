const db = require("../models/index");

module.exports = {
  getAll: function (req, res) {
    db.User.findAll({})
      .then((users) => {
        res.send(users);
      })
      .catch((error) => {
        throw error;
      });
  },
  getOne: (req, res) => {
    db.User.findOne({ where: { id: req.params.iduser } })
      .then((user) => {
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json(user);
      })
      .catch((error) => {
        return res
          .status(500)
          .json({ message: "Error retrieving user", error });
      });
  },
  addUser: function (req, res) {
    db.User.create(req.body)
      .then((users) => {
        res.send(users);
      })
      .catch((error) => {
        throw error;
      });
  },
  deleteUser: function (req, res) {
    db.User.destroy({
      where: { id: req.params.iduser },
    })
      .then(() => {
        res.status(204).send({ message: "Deleted successfully!" });
      })
      .catch((error) => {
        throw error;
      });
  },
  updateUser: async function (req, res) {
    db.User.update(req.body, { where: { id: req.params.iduser } })
      .then((data) => {
        res.status(201).send(data);
      })
      .catch((error) => {
        throw error;
      });
  },
};
