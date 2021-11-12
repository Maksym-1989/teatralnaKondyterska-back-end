const { Order } = require("../models");

const add = async (body) => {
  const result = await Order.create(body);
  return result;
};

const getForMonth = async (id, month) => {
  const data = await Order.find({ owner: id });
  const filtered = data.filter((obj) => {
    const monthSlice = obj.date.slice(3);
    return monthSlice === month;
  });

  return filtered;
};

const listOrders = async (filter) => {
  const data = await Order.find(filter);

  return data;
};
const getOneById = async (id) => {
  const data = await Order.findById(id);

  return data;
};

const getForDate = async (id, date) => {
  const result = await Order.find({
    owner: id,
    date: date,
  });

  return result;
};

const remove = async (id, userId) => {
  const filter = { _id: id, userId: userId };
  const order = await Order.findById(filter);
  if (!order || order.length < 1) return false;

  const result = await Order.findByIdAndDelete({ _id: id });
  return result;
};


module.exports = {
  add,
  getForMonth,
  getForDate,
  listOrders,
  remove,
  getOneById
};
