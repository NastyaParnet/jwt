const express = require("express");
const postController = require("../controllers/postController");

const router = express.Router();

router.route("/").get(postController.getAllPosts);
router.route("/my").get(postController.getMyPosts);
router.route("/:id").patch(postController.patchPost);

module.exports = router;
