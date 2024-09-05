const { Sequelize, DataTypes } = require("sequelize");

const connection = new Sequelize("eshop", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

const Connection = async () => {
  try {
    await connection.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
Connection();

const db = {};
db.connection = connection;
db.User = require("./User")(connection, DataTypes);
db.Category = require("./Category")(connection, DataTypes);
db.Product = require("./Product")(connection, DataTypes);

db.User.hasMany(db.Product, { foreignKey: { allowNull: false } });
db.Product.belongsTo(db.User);

db.Category.hasMany(db.Product, { foreignKey: { allowNull: false } });
db.Product.belongsTo(db.Category);

// connection
//   .sync({ force: true })
//   .then((response) => {
//     console.log("all good");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

module.exports = db;
