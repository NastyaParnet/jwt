const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { users } = require("../utils");

exports.signup = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!(username && password)) {
      res.status(400).send("All input is required");
    }
    const existsUser = users.find((user) => user.name === username);
    if (existsUser) {
      return res.status(422).json({
        errors: [{ msg: "This user already exists" }],
      });
    }
    encryptedPassword = await bcrypt.hash(password, 10);
    users.push({
      name: username,
      password: encryptedPassword,
    });
    res.status(200).json({
      result: "Signup is successful",
    });
  } catch (err) {
    console.log(err);
  }
};

exports.token = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
};

exports.login = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
};

exports.logout = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
};
