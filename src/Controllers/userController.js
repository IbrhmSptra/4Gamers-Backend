const { createUser, getAccount } = require("../Models/userModels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const account = await getAccount(email);

    // account doesnt find
    if (!account) {
      return res.status(400).send({ message: "Invalid credentials" });
    }

    //wrong password
    const isPasswordValid = bcrypt.compareSync(password, account.password);
    if (!isPasswordValid) {
      return res.status(400).send({ message: "Wrong Password" });
    }

    //give token (Authentication)
    const SECRET_KEY = process.env.SECRET_KEY;
    const DURATION = 60 * 60 * 1;
    const token = jwt.sign(
      {
        uuid: account.uuid,
        email: account.email,
        username: account.username,
      },
      SECRET_KEY,
      { expiresIn: DURATION }
    );
    res.status(200).send({
      data: {
        uuid: account.uuid,
        email: account.email,
        username: account.username,
        photo: account.photo,
      },
      token: token,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const register = async (req, res) => {
  try {
    const credentials = req.body;
    const email = await getAccount(req.body.email);
    if (email) {
      return res.status(400).send({ message: "Email already in use" });
    }
    const user = await createUser(credentials);
    res.send({
      data: {
        uuid: user.uuid,
        email: user.email,
        username: user.username,
      },
      message: "Create Account Success",
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

module.exports = { login, register };
