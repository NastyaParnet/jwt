const { posts } = require("../utils");

exports.getAllPosts = async (req, res) => {
  try {
    res.status(200).json(posts);
  } catch (err) {
    console.log(err);
  }
};

exports.getMyPosts = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
};

exports.patchPost = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
};
