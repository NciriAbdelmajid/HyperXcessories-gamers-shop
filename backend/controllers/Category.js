const db = require("../models/index");

const getAllCategories = async (req, res) => {
  try {
    const categories = await db.Category.findAll();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve categories" });
  }
};

const getOneCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await db.Category.findByPk(id);
    if (category) {
      res.json(category);
    } else {
      res.status(404).json({ error: "Category not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve category" });
  }
};

const postCategory = async (req, res) => {
  const newCategory = req.body;

  try {
    const category = await db.Category.create(newCategory);
    res.status(201).send(category);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

module.exports = {
  getAllCategories,
  getOneCategory,
  postCategory,
};
