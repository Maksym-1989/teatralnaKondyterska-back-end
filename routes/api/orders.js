const express = require("express");
const router = express.Router();
const cloudinary = require("../../utils/cloudinary");
const upload = require("../../utils/multer");

const { orders: ctrl } = require("../../controllers");

const { authentificate } = require("../../middlewares");

router.post("/", authentificate, ctrl.add);
router.get("/", authentificate, ctrl.getAll);
router.get("/client/:id", ctrl.getOne);
router.get("/:month", authentificate, ctrl.getAllForMonth);
router.get("/day/:date", authentificate, ctrl.getByDay);
router.delete("/:id", authentificate, ctrl.del);

router.post("/uploadFiles", upload.single("image"), ctrl.cloudinariUpload);

module.exports = router;
