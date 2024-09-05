const express = require("express");
require("dotenv").config();
const app = express();
const port = 3000;
const cors = require("cors");
require("./models/index");
const UserRouter = require("./routes/UserRoute");
const Router = require("./routes/UserAuth");
const ProductRouter = require("./routes/ProductRoute");
const CategoryRouter = require("./routes/CategoryRoute");
app.use(cors());
app.use(express.json());
app.use("/api/auth", Router);
app.use("/api/users", UserRouter);
app.use("/api/product", ProductRouter);
app.use("/api/category", CategoryRouter);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`app listening on http://127.0.0.1:${port}`);
});
