const transporter = require("./emailConfig");
const {User_Password} = require("../libs/emailTemplate");

const sendEmailCode = async (email, password) => {
    try {
      const response = transporter.sendMail({
        from: '"SWIVT TMS" <preeyeol27@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "Verify Your Email", // Subject line
        text: "Verify Your Email", // plain text body
        html: User_Password.replace(
          "{Password}",
          password
        ).replace("{UserName}", email), // html body    
    }
        )
      
      console.log("Email sent successfully", response);
    } catch (error) {
      console.log(error);
    }
  };

    module.exports = sendEmailCode;