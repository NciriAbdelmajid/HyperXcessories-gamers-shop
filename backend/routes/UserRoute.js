const express = require("express");
const UserRouter = express.Router();

const {
  getAll,
  getOne,
  addUser,
  deleteUser,
  updateUser,
} = require("../controllers/UserController");

//get request to fetch :
UserRouter.get("/getAll", getAll);
//get request to fetch :
UserRouter.get("/getOne/:iduser", getOne);
// post request to add :
UserRouter.post("/add", addUser);
// delete request to remove
UserRouter.delete("/delete/:iduser", deleteUser);
// put request to update
UserRouter.put("/update/:iduser", updateUser);

module.exports = UserRouter;
