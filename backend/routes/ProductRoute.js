const express = require("express");
const ProductRouter = express.Router();

const {
  getAll,
  getOne,
  addProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/Product");

//get request to fetch :
ProductRouter.get("/getAll", getAll);
//get request to get one product;) :
ProductRouter.get("/getOne/:idprod", getOne);
// post request to add prod :
ProductRouter.post("/add", addProduct);
// delete request to remove prod
ProductRouter.delete("/delete/:idprod", deleteProduct);
// put request to update product
ProductRouter.put("/update/:idprod", updateProduct);
//get request to filter product by price:) :

module.exports = ProductRouter;
