const validator = require("validator");

const isSpaceOnly = (string) => {
  const trimmedString = string?.trim();
  return trimmedString == "" ? true : false;
};

const postValidator = (req, res, next) => {
  const { title, content } = req.body;
  //if user not input anything on field
  if (title == "" || content == "") {
    return res.status(400).send({
      message: "Field should not empty",
    });
  }
  //if user input only space
  if (isSpaceOnly(title) || isSpaceOnly(content)) {
    return res.status(400).send({
      message: "Field should not empty",
    });
  }
  next();
};

module.exports = { postValidator };
