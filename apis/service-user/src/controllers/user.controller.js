const service = require("../service/user.service");
const getUsers = async (req, res) => {
  const response = await service.getUsers();
  res.status(200).send(response);
};
const createUser = async (req, res) => {
  const { name, email } = req.body;
  const user = {
    name,
    email,
  };
  const response = await service.createUser(user);
  console.log("user", response);
  res.status(200).send(response);
};
module.exports = { getUsers, createUser };
