const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authRouter = require("./routes/authRoutes");
const postRouter = require("./routes/postRoutes");

const app = express();
app.use(express.json());

app.use("/auth", authRouter);
app.use("/posts", postRouter);

module.exports = app;
