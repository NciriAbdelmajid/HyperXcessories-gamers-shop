const db = require("../models/index");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

module.exports = {
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const existedUser = await db.User.findOne({ where: { email } });
      if (existedUser) {
        return res.status(400).send("email already exist");
      }
      const saveUser = await db.User.create({
        name,
        email,
        password: await bcrypt.hash(password, 8),
      });
      res.send(saveUser);
    } catch (error) {
      res.status(500).send("Internal server error");
      console.error(error);
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;
    const existedUser = await db.User.findOne({ where: { email } });
    if (!existedUser) {
      return res.status(400).send("email is not valid ");
    }
    const comparePassword = await bcrypt.compare(
      password,
      existedUser.password
    );
    if (!comparePassword) {
      return res.status(400).send("email and password are not valid ");
    }
    const token = jwt.sign({ id: existedUser.id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    res.send({ token });
    try {
    } catch (error) {
      res.status(500).send("Internal server error");
      console.error(error);
    }
  },
};
