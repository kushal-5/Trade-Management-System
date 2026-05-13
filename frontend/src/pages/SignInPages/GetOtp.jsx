import OTP from "../../assets/images/signinImages/otp.png";
import { OtpInput } from "reactjs-otp-input";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const GetOTP = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(false);
  const [resend, setResend] = useState(false);
  const navigate = useNavigate();

  const handleChange = (value) => {
    setOtp(value);
    setError(false); // Reset error when user types
  };

  const handleVerify = () => {
    if (otp !== "1234") {
      // Simulating incorrect OTP
      setError(true);
      setResend(true);
    } else {
      // Proceed to reset password
      setError(false);
      alert("OTP Verified! Redirecting...");
      navigate("/reset-password");
    }
  };

  const handleResend = () => {
    setOtp("");
    setError(false);
    setResend(false);
    // alert("OTP Resent! Check your email.");
  };

  return (
    <div className="flex flex-row w-full h-screen overflow-hidden">
      {/* Left Side: Image */}
      <div className="w-1/2 py-12 ms-14">
        <img src={OTP} alt="sidebar" className="h-full w-full rounded-lg" />
      </div>

      {/* Right Side: OTP Form */}
      <div className="w-1/2 flex justify-center items-center mb-20">
        <div>
          <h1 className="text-white font-roboto text-5xl font-semibold">
            OTP Verification
          </h1>
          <p className="text-white text-base leading-10 mb-12">
            We have sent a code to your email
          </p>

          {/* OTP Input */}
          <OtpInput
     
            inputStyle={{
              backgroundColor: "black",
              color: `${error ? "red":"white"}`,
              width: "5rem",
              height: "5rem",
              fontSize: "2rem",
              textAlign: "center",
              border: `2px solid ${error ? "red" : "white"}`, // Dynamic border color
              borderRadius: "0.375rem",

            }}
            containerStyle={{
              display: "flex",
              gap: "1rem", // Correct way to add spacing between inputs
            }}
            numInputs={4}
            value={otp}
            onChange={handleChange}
          />

          {/* Error Message */}
          {error && <p className="text-red-500 mt-2">Invalid OTP</p>}

          {/* Resend OTP Link */}
          <div className="flex text-[#FFF] font-roboto text-sm ms-2 font-normal leading-10">
            <p>Didn't receive email?</p>
            <span>
              <button onClick={handleResend} className="hover:underline text-yellow-400 ms-2">
                Click to resend
              </button>
            </span>
          </div>

          {/* Dynamic Button */}
          <button
            onClick={resend ? handleResend : handleVerify}
            className="text-black font-roboto text-base font-normal w-full flex justify-center items-center px-8 py-4 gap-3 bg-[#F1F510] rounded-lg mt-10"
          >
            {resend ? "RESEND OTP" : "VERIFY & PROCEED"}
          </button>

          {/* Back to Login */}
          <div className="text-[#FFF] font-roboto text-base ms-2 font-normal leading-10 mt-24">
            <Link to="/signin" className="hover:underline"> ← Back to login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetOTP;
