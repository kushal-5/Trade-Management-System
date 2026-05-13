const userSchema = require("../../models/registrationSchema/User.Schema");
const transformUserData = require("../../utils/transformUserData");
const bcrypt = require("bcryptjs");

const registerUser = async (userData) => {
  const userEmail = userData.email;
  const password = userData.password;

  if (!userEmail) throw new Error("Email is required");
  if (!password) throw new Error("Password is required");

  // 🔴 ADD THIS VALIDATION BLOCK
  if (!userData.mobileNumber || userData.mobileNumber.trim() === "") {
    throw new Error("Mobile number is required");
  }

  if (!userData.panNumber || userData.panNumber.trim() === "") {
    throw new Error("PAN number is required");
  }

  const userExists = await userSchema.findOne({ email: userEmail });
  if (userExists) throw new Error("User already exists");

  const hashedPassword = await bcrypt.hash(password, 10);

  let formattedData = transformUserData
    ? transformUserData(userData)
    : userData;

  formattedData.email = userEmail;
  formattedData.password = hashedPassword;

  formattedData.mobileNumber = userData.mobileNumber || undefined;
  formattedData.panNumber = userData.panNumber || undefined;
  formattedData.clientType = userData.clientType;

  formattedData.companyDetails = userData.companyDetails || {};
  formattedData.ownershipDetails = userData.ownershipDetails || {};
  formattedData.addresses = userData.addresses || [];
  formattedData.bankingInfo = userData.bankingInfo || [];
  formattedData.depositoryInfo = userData.depositoryInfo || [];
  formattedData.documents = userData.documents || [];

  const newUser = new userSchema(formattedData);
  await newUser.save();

  return newUser;
};

module.exports = {
  registerUser,
};