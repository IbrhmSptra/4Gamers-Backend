const validator = require("validator");

const isSpaceOnly = (string) => {
  const trimmedString = string.trim();
  return trimmedString == "" ? true : false;
};

const RegisterValidation = (req, res, next) => {
  const { email, password, username } = req.body;
  //if user not input anything on field
  if (email == "" || password == "" || username == "") {
    return res.status(400).send({
      message: "Field should not empty",
    });
  }
  //if user input only space
  if (isSpaceOnly(email) || isSpaceOnly(username) || isSpaceOnly(password)) {
    return res.status(400).send({
      message: "Field should not empty",
    });
  }

  // if user doesnt input correct email format
  if (!validator.isEmail(email)) {
    return res.status(400).send({
      message: "Invalid email address",
    });
  }

  //if user input username more than 12 char
  if (username.length > 12) {
    return res.status(400).send({
      message: "Username max 12 character",
    });
  }

  //if user doesnt input strong password
  if (!validator.isStrongPassword(password)) {
    return res.status(400).send({
      message:
        "Password not strong. Minimun 8 character and include lowercase, uppercase, numbers, symbols",
    });
  }
  next();
};

const loginValidation = (req, res, next) => {
  const { email, password } = req.body;
  //if user not input anything on field
  if (email == "" || password == "") {
    return res.status(400).send({
      message: "Field should not empty",
    });
  }
  //if user input only space
  if (isSpaceOnly(email) || isSpaceOnly(password)) {
    return res.status(400).send({
      message: "Field should not empty",
    });
  }
  // if user doesnt input correct email format
  if (!validator.isEmail(email)) {
    return res.status(400).send({
      message: "Invalid email address",
    });
  }
  next();
};

module.exports = { RegisterValidation, loginValidation };
