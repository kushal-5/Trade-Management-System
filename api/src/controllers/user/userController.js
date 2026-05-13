const userSchema = require("../../models/registrationSchema/User.Schema");

const userDetails = async (req, res) => {
  try {
    const user = await userSchema.findById(req.user.id);

    console.log(user)
    // ; // Exclude password
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json(user);
  } catch (error) {
 console.log(error);
  }
};
module.exports = { userDetails };
