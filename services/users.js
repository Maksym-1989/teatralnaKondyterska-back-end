const { User } = require("../models");

const getOne = (filter) => {
  return User.findOne(filter);
};

const getById = (id) => {
  return User.findById(id);
};

const add = ({ password, ...rest }) => {
  const newUser = new User(rest);
  newUser.setPassword(password);
  return newUser.save();
};

const update = (id, updateUser) =>
  User.findByIdAndUpdate(id, updateUser, { new: true });

module.exports = {
  getOne,
  add,
  getById,
  update,
};
