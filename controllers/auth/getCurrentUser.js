const getCurrentUser = async (req, res, next) => {
  try {
    const user = req.user;
    res.json({
      status: "success",
      code: 200,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getCurrentUser;
