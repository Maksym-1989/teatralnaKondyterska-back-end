const { users: service } = require("../../services");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { SECRET_KEY } = process.env;

const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await service.getOne({ email });

    if (!user || !user.comparePassword(password)) {
      return res.status(400).json({
        status: "error",
        code: 400,
        message: "Wrong email or password",
      });
    }

    const payload = {
      id: user._id,
    };
    const { SECRET_KEY } = process.env;
    const token = jwt.sign(payload, SECRET_KEY);

    const updateUser = await service.update(user._id, { token });

    res.json({
      status: "success",
      code: 200,
      result: updateUser,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = signin;
