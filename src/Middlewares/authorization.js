const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const verify = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    if (!token) {
      return res.status(403).send({ message: "No JWT token provided" });
    }
    let verify = jwt.verify(token.split(" ")[1], process.env.SECRET_KEY);
    req.user = verify;
    next();
  } catch (error) {
    res.status(403).send({
      message: "Token not valid",
    });
  }
};

module.exports = verify;
