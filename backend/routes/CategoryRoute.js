// routes/categoryRoutes.js
const express = require("express");
const CategoryRouter = express.Router();

const {
  getAllCategories,
  getOneCategory,
  postCategory,
} = require("../controllers/Category");

CategoryRouter.get("/getAll", getAllCategories);
CategoryRouter.get("/:idcategory", getOneCategory);
CategoryRouter.post("/add", postCategory);
module.exports = CategoryRouter;
