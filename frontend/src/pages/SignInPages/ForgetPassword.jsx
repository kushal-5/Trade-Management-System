import { Link, useNavigate } from "react-router-dom";
import What from "../../assets/images/signinImages/what.png";
import Sms from "../../assets/images/signinImages/sms.svg";
import { useState } from "react";
import LabelInput from "../../shared/LabelInput";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validate = () => {
    if (!email) {
      setError("Email is required");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email format");
      return false;
    }
    setError(""); // Clear errors if valid
    return true;
  };

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;
    alert("OTP sent! Check your email."); // Temporary success message
    navigate("/get-otp"); // ✅ Correct way to redirect
  };

  return (
    <div className="flex flex-row w-full h-screen overflow-hidden">
      {/* Left Side: Image */}
      <div className="w-1/2 py-12 ms-14">
        {" "}
        {/* Adjusted margin */}
        <img src={What} alt="sidebar" className="h-full w-full rounded-lg" />
      </div>

      {/* Right Side: Form */}
      <div className="w-1/2 flex justify-center items-center mb-20">
        {" "}
        {/* Adjusted padding */}
        <div className="">
          <h1 className="text-white font-roboto text-5xl font-semibold">
            Forgot Password{" "}
          </h1>
          <p className="text-white text-base leading-10 mb-12">
            {" "}
            No worries,we'll send you instructions
          </p>

          <form onSubmit={handleSubmit}>
            <LabelInput
              htmlFor="email"
              src={Sms}
              type="email"
              id="email"
              label="Email"
              placeholder="Enter your email"
              value={email}
              onChange={handleInputChange(setEmail)}
            />

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            {/* Get OTP Button - Calls handleSubmit */}
            <button
              type="submit"
              className="text-black font-roboto text-base font-normal w-full flex justify-center items-center px-8 py-4 gap-3 bg-[#F1F510] rounded-lg mt-10"
            >
              GET OTP
            </button>
          </form>

          <div className="text-[#FFF] font-roboto text-base ms-2 font-normal leading-10 mt-40">
            <Link to="/signin" className="hover:underline">
              {" "}
              ← Back to login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
