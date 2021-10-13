const express = require("express");
const router = express.Router();

const { auth: ctrl } = require("../../controllers");

const { validateUser, authentificate } = require("../../middlewares");

router.post("/signup", validateUser, ctrl.signup);

module.exports = router;
