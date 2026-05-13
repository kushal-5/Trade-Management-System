const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../../middleware/authMiddleware");

const {
  postPersonalShares,
  getPersonalShares,
} = require("../../controllers/personalShares/sharesController");

router.post("/sharesInfo", authMiddleware, postPersonalShares);
router.get("/sharesList", authMiddleware, getPersonalShares);

module.exports = router;
