const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router.route("/signup").post(authController.signup);
router.route("/token").post(authController.token);
router.route("/login").post(authController.login);
router.route("/logout").delete(authController.logout);

module.exports = router;
