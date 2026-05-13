const express = require("express");
const userAuthRoute = express.Router();
const upload = require("../../middleware/upload");
const {authMiddleware} = require("../../middleware/authMiddleware");
const {
  userRegistration,
  userLogin,
  forgotPassword,
  resetPasswordWithOTP,
  resetPasswordWithToken,
  uploadDocument,
  logout,
  checkAuth,
} = require("../../controllers/user/authController");

userAuthRoute.post("/register", userRegistration);
userAuthRoute.post(
  "/upload-document",
  upload.single("attachment"),
  uploadDocument
);
userAuthRoute.post("/login", userLogin);
userAuthRoute.post("/forgotpassword", forgotPassword);
userAuthRoute.post("/reset-password/otp", resetPasswordWithOTP);
userAuthRoute.post("/reset-password/", resetPasswordWithToken);
userAuthRoute.get("/check-auth", authMiddleware, checkAuth);
userAuthRoute.post("/logout", logout);

module.exports = userAuthRoute;
