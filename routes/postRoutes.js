const express = require("express");
const postController = require("../controllers/postController");
const verifyToken = require("../middleware/auth");

const router = express.Router();

router.route("/").get(verifyToken).get(postController.getAllPosts);
router.route("/my").get(verifyToken).get(postController.getMyPosts);
router.route("/:id").patch(verifyToken).patch(postController.patchPost);

module.exports = router;
