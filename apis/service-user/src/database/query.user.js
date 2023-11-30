const userModel = require("../models/model.users");
const createUser = async (user) => {
  try {
    const res = await userModel.create(user);
    return res;
  } catch (error) {}
};
const getUsers = async () => {
  try {
    const res = await userModel.find();
    return res;
  } catch (error) {}
};
module.exports = { createUser, getUsers };
