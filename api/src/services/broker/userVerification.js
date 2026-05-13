const userSchema= require("../../models/registrationSchema/User.Schema")
const bcrypt = require("bcrypt");


export const verifyUser = async (email) => {


    const user = await userSchema.findOne({ email });
    if (!user) throw new Error('User not found');
    if (user.status !== 'pending') throw new Error('User is already verified');
  
    // Generate a temporary password
    const tempPassword = Math.random().toString(36).slice(-8);
    const hashedPassword = await bcrypt.hash(tempPassword, 10);
  
    // Update user status and set temporary password
    user.status = 'verified';
    user.password = hashedPassword;
    await user.save();
  
    // Send temp password via email
    // await sendEmail(email, 'Your Temporary Password', `Your temporary password is: ${tempPassword}`);
  
    return { message: 'User verified and temporary password has been sent.' };
  };