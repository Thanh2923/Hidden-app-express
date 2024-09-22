var jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  let token = req.headers.authorization;
  jwt.verify(token, "fpoly", function (err, decoded) {
    if (decoded) {
      next();
    } else {
      res.status(400).json({ message: "Unauthorised!" });
    }
  });
}

module.exports = verifyToken;
