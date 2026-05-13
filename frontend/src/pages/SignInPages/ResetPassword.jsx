import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react"; // Icons for password visibility
import Lock from "../../assets/images/signinImages/lock.png";
import LockLogo from "../../assets/images/signinImages/lock.svg";
import LabelInput from "../../shared/LabelInput";
import { useSearchParams } from "react-router-dom";
import { userAuthServices } from "../../services/authService";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const handleReset = async () => {
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await userAuthServices.resetPasswordWithToken(
        token,
        password
      );

      if (response.status === "success") {
        navigate("/signin");
      } else {
        setError(response.message || "Something went wrong.");
      }
    } catch (error) {
      setError("Failed to reset password. Try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex w-full h-screen overflow-hidden">
      {/* Left Side: Image */}
      <div className="w-1/2 py-12 ms-14 flex items-center justify-center">
        <img src={Lock} alt="sidebar" className="h-full w-full rounded-lg" />
      </div>

      {/* Right Side: Form */}
      <div className="w-1/2 flex justify-center items-center">
        <div className="">
          <h1 className="text-white font-roboto text-5xl font-semibold">
            Set New Password
          </h1>
          <p className="text-white text-base leading-10 mb-10">
            Must be at least 8 characters.
          </p>

          {/* Password Input */}
          <div className="relative mb-6">
            <LabelInput
              htmlFor="password"
              src={LockLogo}
              type={showPassword ? "text" : "password"}
              id="password"
              label="New Password"
              placeholder="New password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-16 text-white"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Confirm Password Input */}
          <div className="relative">
            <LabelInput
              htmlFor="newpassword"
              src={LockLogo}
              type={showConfirmPassword ? "text" : "password"}
              id="newpassword"
              label="Confirm New Password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-16 text-white"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500">{error}</p>}

          {/* Reset Password Button */}
          <button
            onClick={handleReset}
            className="text-black font-roboto text-sm w-full font-normal flex p-3 justify-center items-center bg-[#F1F510] rounded-md mt-16"
            disabled={!password || !confirmPassword}
          >
            RESET PASSWORD
          </button>

          {/* Back to Login */}
          <div className="text-white font-roboto text-base mt-32">
            <Link to="/signin" className="hover:underline">
              ← Back to login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
