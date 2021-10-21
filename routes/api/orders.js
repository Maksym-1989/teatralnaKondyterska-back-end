const express = require("express");
const router = express.Router();

const { orders: ctrl } = require("../../controllers");

const { authentificate } = require("../../middlewares");

router.post("/", authentificate, ctrl.add);
router.get("/", authentificate, ctrl.getAll);
router.get("/:month", authentificate, ctrl.getAllForMonth);
router.get("/day/:date", authentificate, ctrl.getByDay);
router.delete("/:id", authentificate, ctrl.del);

module.exports = router;
