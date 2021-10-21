const { orders: service } = require("../../services");

const getAllForMonth = async (req, res, next) => {
  try {
    const { month } = req.params;
    const { _id } = req.user;
    const result = await service.getForMonth(_id, month);
    if (result.length === 0) {
      res.json({
        status: "error",
        code: 404,
        data: result,
        message: "Not found",
      });
    }

    res.json({
      status: "success",
      code: 204,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = getAllForMonth;
