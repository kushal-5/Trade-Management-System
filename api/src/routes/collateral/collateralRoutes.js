const express = require("express");
const router = express.Router();
const {
  postCollateral,
  getCollateral,
} = require("../../controllers/collateral/collateralController");
const { authMiddleware } = require("../../middleware/authMiddleware");

router.post("/collateralInfo", authMiddleware, postCollateral);
router.get("/collateralamount", authMiddleware, getCollateral);

module.exports = router;
