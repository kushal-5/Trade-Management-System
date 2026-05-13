const UserSchema = require("../../models/registrationSchema/User.Schema");
const sendEmailCode = require("../../config/email");

const getPendingUsers = async (req, res) => {
  try {
    const pendingUsers = await UserSchema.find({ status: "pending" });
    if (!pendingUsers || pendingUsers.length === 0) {
      return res.status(404).json({
        success: "Fail",
        message: "No pending users found",
      });
    }

    res.status(200).json({
      success: "Success",
      message: "Pending users fetched successfully",
      data: pendingUsers,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: "Fail",
      message: "Something went wrong",
    });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserSchema.findById(id);
    if (!user) {
      return res.status(404).json({
        success: "Fail",
        message: "User not found",
      });
    }

    
    if(user.clientType === "individual") {
     firstName = user.individualDetails?.firstName;
      lastName = user.individualDetails?.lastName;
      phoneNumber = user.mobileNumber || '';
      panNumber = user.panNumber;
      email = user.email;
      
    }

    res.status(200).json({
      success: "Success",
      message: "User BY ID fetched successfully",
      data: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: "Fail",
      message: "Something went wrong",
    });
  }
};

const getVerifiedUser = async (req, res) => {
  try {
    const verifiedUsers = await UserSchema.find({ status: "verified" });
    if (!verifiedUsers || verifiedUsers.length === 0) {
      return res.status(404).json({
        success: "Fail",
        message: "No Verified users found",
      });
    }

    res.status(200).json({
      success: "Success",
      message: "Verified users fetched successfully",
      data: verifiedUsers,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: "Fail",
      message: "Something went wrong",
    });
  }
};

const getRejectedUser = async (req, res) => {
  try {
    const verifiedUsers = await UserSchema.find({ status: "rejected" });
    if (!verifiedUsers || verifiedUsers.length === 0) {
      return res.status(404).json({
        success: "Fail",
        message: "No Rejected users found",
      });
    }

    res.status(200).json({
      success: "Success",
      message: "Rejected users fetched successfully",
      data: verifiedUsers,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: "Fail",
      message: "Something went wrong",
    });
  }
};

const verifyPendingUser = async (req, res) => {

  const { id } = req.params;

const password = Math.random().toString(36).slice(-8);


  try {
    const user = await UserSchema.findById(id);
    if (!user) {
      return res.status(404).json({
        success: "Fail",
        message: "User not found",
      });
    }

    if(user.status === "verified") {
      return res.status(400).json({
        success: "Fail",
        message: "User already verified",
      });
    }
     
    user.password= password;

    user.status = "verified";
    await user.save();

    sendEmailCode(user.email, password);

    res.status(200).json({
      success: "Success",
      message: "User verified successfully",
      data: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: "Fail",
      message: "Something went wrong",
    });
  }
};

const rejectPendingUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserSchema.findById(id);
    if (!user) {
      return res.status(404).json({
        success: "Fail",
        message: "User not found",
      });
    }
    user.status = "rejected";
    await user.save();

    res.status(200).json({
      success: "Success",
      message: "User rejected successfully",
      data: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: "Fail",
      message: "Something went wrong",
    });
  }
};

module.exports = {
  getPendingUsers,
  verifyPendingUser,
  rejectPendingUser,
  getVerifiedUser,
  getRejectedUser,
  getUserById,
};
