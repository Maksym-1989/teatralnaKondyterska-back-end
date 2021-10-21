const { orders: service } = require("../../services");

const getByDay = async (req, res, next) => {
  try {
    const { date } = req.params;
    const { _id } = req.user;
    const result = await service.getForDate(_id, date);
    res.json({
      status: "success",
      code: 200,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getByDay;
