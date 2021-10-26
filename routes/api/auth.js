const express = require("express");
const router = express.Router();

const { auth: ctrl } = require("../../controllers");

const { validateUser, authentificate } = require("../../middlewares");

router.post("/signup", validateUser, ctrl.signup);
router.post("/signin", validateUser, ctrl.signin);
router.get("/logout", authentificate, ctrl.logout);
router.get("/current", authentificate, ctrl.getCurrentUser);


module.exports = router;
