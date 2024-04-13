const validator = require("validator");

const isSpaceOnly = (string) => {
  const trimmedString = string.trim();
  return trimmedString == "" ? true : false;
};

const tagValidator = (req, res, next) => {
  const { name } = req.body;
  //if user not input anything on field
  if (name == "") {
    return res.status(400).send({
      message: "Field should not empty",
    });
  }
  //if user input only space
  if (isSpaceOnly(name)) {
    return res.status(400).send({
      message: "Field should not empty",
    });
  }
  next();
};

module.exports = { tagValidator };
