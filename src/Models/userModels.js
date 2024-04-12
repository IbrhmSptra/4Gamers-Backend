const prisma = require("../db");
const bcrypt = require("bcrypt");

const getAccount = async (dataEmail) => {
  const account = await prisma.user.findUnique({
    where: {
      email: dataEmail,
    },
  });
  return account;
};

const createUser = async (userCredentials) => {
  const hashedPass = bcrypt.hashSync(userCredentials.password, 8);
  const user = await prisma.user.create({
    data: {
      email: userCredentials.email,
      username: userCredentials.username,
      photo: userCredentials.photo,
      password: hashedPass,
    },
  });
  return user;
};

module.exports = { createUser, getAccount };
