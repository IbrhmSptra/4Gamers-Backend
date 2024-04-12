const express = require("express");
const router = express.Router();
const { login, register } = require("../Controllers/userController");
const {
  RegisterValidation,
  loginValidation,
} = require("../Middlewares/authenticationValidation");

router.post("/login", loginValidation, login);
router.post("/register", RegisterValidation, register);

module.exports = router;
