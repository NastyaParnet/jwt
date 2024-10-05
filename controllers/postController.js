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
    const myPosts = posts.filter((post) => post.author === req.userName);
    res.status(200).json(myPosts);
  } catch (err) {
    console.log(err);
  }
};

exports.patchPost = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const indexPost = posts.findIndex((post) => post.id === id);
    if (indexPost < 0) {
      res.status(404).json({
        status: "fail",
        message: "Invalid post id",
      });
      return;
    }
    const post = posts[indexPost];
    if (post.author !== req.userName) {
      res.status(403).json({
        status: "fail",
        message: "You are not the author of this article",
      });
      return;
    }
    res.status(200).json(post);
  } catch (err) {
    console.log(err);
  }
};
