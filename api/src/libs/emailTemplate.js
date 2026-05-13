const User_Password = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <title>Welcome Email Template</title>
</head>
<body>
  <div style="font-family: Poppins">
    <!--   HEADER   -->
 
    
    <!--   CONTENT   -->
    <table role="content" style="padding: 80px 64px; color: #363740;">
      <tr>
        <td style="font-weight: 600; font-size: 32px; line-height: 48px; color: #F1F510; padding-bottom: 56px">
          <span>User Verification</span>
        </td>
      </tr>
      
      <tr>
        <td style="padding-bottom: 30px">
          <span>
            <span>Hi {UserName},</span> <br />
            <br />
          </span>
        </td>
      </tr>
      
      <tr>
        <td style="padding-bottom: 40px">
           <span>
              Your registraion has been successfully verified. <br />
              Your temporary password is <span style="font-weight: 600;">{Password}</span>.
               Please use this password to login to your account. <br />
            </span>
        </td>
      </tr>
      
      <tr>
        <td style="padding-bottom: 20px">
         
        </td>
      </tr>
      
 
      <tr>
        <td style="line-height: 30px;">
          Yours, <br />
          <span style="line-height: 56px; font-weight: 600;">SWIVT TMS.</span>
        </td>
      </tr>
      
    </table>
    
    <!--    FOOTER    -->
       <table role="footer" width="100%">
      <tr align="center">
        <td  style="background: #F1F510; padding: 40px 0;">
        
          <div style="color: #fff; font-weight: 300; padding-bottom: 34px">
            <span>You are receiving this email because you are registrered with Swivt TMS. <br />
            © 2025, SWIVT TMS . All rights reserved.
            </span>
          </div>
          
          <div style="color: #fff; font-weight: 300;">
            <a href="#" style="text-decoration: none; color: #fff;">Unsubscribe</a>
            <span style="padding: 0 16px;">|</span>
            <a href="#" style="text-decoration: none; color: #fff;">Privacy Policy</a>
            <span style="padding: 0 16px;">|</span>
            <a href="#" style="text-decoration: none; color: #fff;">Help Center</a>
          </div>
        </td>
      </tr>
    </table>
  </div>
</body>
</html>`;

module.exports = {
  User_Password,
};