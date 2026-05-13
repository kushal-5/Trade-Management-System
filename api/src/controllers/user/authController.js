const {
  sendOTP,
  verifyAndResetPassword,
  registerUser,
} = require("../../services/user/userService");
const bcrypt = require("bcryptjs");
const { generateAccessToken } = require("../../config/jwtConfig");
const UserSchema = require("../../models/registrationSchema/User.Schema");
const envConfig = require("../../config/envConfig");
const crypto = require("crypto");

// User Registration
const userRegistration = async (req, res) => {
  try {
    const { email, password, clientType } = req.body;

    const existingUser = await UserSchema.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    const user = await UserSchema.create({
      email,
      password,
      clientType,
      mobileNumber: req.body.mobileNumber || "",
      panNumber: req.body.panNumber || "",

      // store everything else here
      profileData: req.body,
    });

    res.status(201).json({
      success: true,
      message: "Registration successful",
      data: user,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Registration failed",
    });
  }
};
// User Login
const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserSchema.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid password",
      });
    }

    const token = generateAccessToken(user);

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      data: user,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Login failed",
    });
  }
};

const checkAuth = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: req.user,
  });
};

const forgotPassword = async (req, res) => {
  try {

    const { email } = req.body;
    const response = await sendOTP(email);
    console.log(response);
    res.status(200).json({ status: "success", data: response });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const resetPasswordWithToken = async (req, res) => {
  try {
    const { newPassword } = req.body;
    const { token } = req.query;
    console.log("NEWPASSWORD",newPassword,"TOKEN FOR FIRSTTIMELOGIN", token);

    if (!token || !newPassword) {
      return res
        .status(400)
        .json({ message: "Token and new password are required" });
    }

    // Hash the token to compare with stored hash
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    console.log("Hashed Token:", hashedToken);

    // Find user with valid reset token and token not expired
    const user = await UserSchema.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({
        status: "fail",
        message: "Token is invalid or has expired",
      });
    }


    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;
    console.log("Hashed Password:", hashedPassword);
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    if (user.loginFirstTime) {
      user.loginFirstTime = false;
    }
    console.log("Before Save:", user);
    await user.save();
    console.log("After Save:", user);
    

    return res.status(200).json({
      status: "success",
      message: "Password reset successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Error resetting password",
      error: error.message,
    });
  }
};

const resetPasswordWithOTP = async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;

    if (!email || !otp || !newPassword) {
      return res
        .status(400)
        .json({ message: "Email, OTP and new password are required" });
    }
    // Verify OTP
    await verifyAndResetPassword(email, otp, newPassword);
    return res.status(200).json({
      status: "success",
      message: "Password reset successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Error resetting password",
      error: error.message,
    });
  }
};

const uploadDocument = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const documentURL = `/upload/${req.file.filename}`;

    return res.status(200).json({
      status: "success",
      message: "Document uploaded successfully",
      data: {
        documentName: "Citizenship File",
        documentURL: documentURL,
      },
    });
  } catch (error) {
    console.error("Upload error:", error);
    return res
      .status(500)
      .json({ status: "error", message: "Something went wrong" });
  }
};

// Logout
const logout = (req, res) => {
  res.json({ message: "Logged out successfully" });
};

module.exports = {
  userRegistration,
  userLogin,
  forgotPassword,
  resetPasswordWithToken,
  resetPasswordWithOTP,
  uploadDocument,
  logout,
  checkAuth,
};
