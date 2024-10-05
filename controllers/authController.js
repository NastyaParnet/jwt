require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { users, refreshTokens } = require("../utils");

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
    const { username, password } = req.body;
    if (!(username && password)) {
      res.status(400).send("All input is required");
    }
    const userIndex = users.findIndex((u) => {
      return u.name === username;
    });
    const user = { ...users[userIndex] };
    if (user && (await bcrypt.compare(password, user.password))) {
      const accessToken = jwt.sign(
        { name: user.name },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: "2h",
        }
      );
      const refreshToken = jwt.sign(
        { name: user.name },
        process.env.REFRESH_TOKEN_SECRET,
        {
          expiresIn: "30d",
        }
      );
      user.token = accessToken;
      users.splice(userIndex, 1, user);
      refreshTokens.push(refreshToken);

      res.status(200).json({
        accessToken: accessToken,
        refreshToken: refreshToken,
      });
    } else {
      res.status(404).json({
        errors: [{ msg: "Invalid Credentials" }],
      });
    }
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
