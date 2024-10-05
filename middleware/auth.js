const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).send("A token is required for authentication");
  }
  try {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(403).json({
          errors: [{ msg: "Invalid Credentials" }],
        });
      }
      req.userName = decoded.name;
    });
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};
module.exports = verifyToken;
