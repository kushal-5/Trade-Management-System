const transporter= require("../config/emailConfig")
const envConfig=require("../config/envConfig")

const sendEMail= async(to, subject,text)=>{

    const mailOptions = {
        from: envConfig.emailUser,
        to,
        subject,
        text,
      };


      try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
      } catch (error) {
        console.error('Error sending email:', error);
      }
    
}

module.exports= sendEMail