const { orders: service } = require("../../services");

const getAll = async (req, res, next) => {
  try {
    const filter = { owner: req.user._id };
    const result = await service.listOrders(filter);

    res.json({
      status: "success",
      code: 200,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
