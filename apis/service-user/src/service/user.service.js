const query = require("../database/query.user.js");
const createUser = async (user) => {
  try {
    const res = await query.createUser(user);
    return res;
  } catch (error) {}
};
const getUsers = async () => {
  try {
    const res = await query.getUsers();
    return res;
  } catch (error) {}
};
module.exports = { createUser, getUsers };
