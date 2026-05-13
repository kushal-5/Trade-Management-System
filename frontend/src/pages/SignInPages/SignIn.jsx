import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/authProvider";
import { Link } from "react-router-dom";
import BullBeer from "../../assets/images/signinImages/tms.png";
import Sms from "../../assets/images/signinImages/sms.svg";
import Lock from "../../assets/images/signinImages/lock.svg";
import LabelInput from "../../shared/LabelInput";
import { toast } from "react-toastify";

const SignInPage = () => {
  const { signin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [rememberMe, setRememberMe] = useState(false);

  // Load saved email from localStorage
  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedEmail");
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  // Handle input changes
  const handleInputChange = (setter, field) => (e) => {
    setter(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, [field]: "" })); // Clear error when typing
  };

  // Form validation
  const validateForm = () => {
    let newErrors = {};
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Invalid email format";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
  
    if (!validateForm()) return;
  
    try {
      await signin(email, password);
      toast.success("Login successful");
    } catch (error) {
      const message =
        error?.response?.data?.message || "Something went wrong";
  
      // handle specific cases if needed
      if (error?.response?.status === 401) {
        toast.error("Invalid email or password");
        setErrors({ password: "Invalid email or password" });
      } else {
        toast.error(message);
        setErrors({ general: message });
      }
    }
  };

  return (
    <div className="flex flex-row w-full h-screen overflow-hidden">
      {/* Left Side: Image */}
      <div className="w-1/2 py-10 ms-14">
        <img
          src={BullBeer}
          alt="sidebar"
          className="h-full w-full rounded-lg"
        />
      </div>

      {/* Right Side: Form */}
      <div className="w-1/2 flex justify-center items-center">
        <form
          className="flex flex-col w-full max-w-md px-8 space-y-6"
          onSubmit={handleSubmit}
        >
          <h1 className="text-white font-roboto text-5xl font-semibold leading-8 mb-12">
            Sign In
          </h1>

          {/* Email Input */}
          <LabelInput
            htmlFor="email"
            src={Sms}
            type="email"
            id="email"
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChange={handleInputChange(setEmail, "email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

          {/* Password Input */}
          <LabelInput
            htmlFor="password"
            src={Lock}
            type="password"
            id="password"
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={handleInputChange(setPassword, "password")}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}

          {/* Remember Me */}
          <div className="flex items-center gap-2 text-[#828282] w-full">
            <input
              type="checkbox"
              id="rememberMe"
              className="w-4 h-4 accent-[#001217]"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label
              htmlFor="rememberMe"
              className="font-roboto text-base font-normal"
            >
              Remember me
            </label>
          </div>

          {/* Forgot Password */}
          <div className="text-[#FFF] font-roboto text-base font-normal">
            <Link to="/forgot-password" className="hover:underline">
              Forgot your password?
            </Link>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
           className="text-black font-roboto text-base font-normal w-full flex justify-center items-center px-8 py-4 gap-3 bg-[#F1F510] rounded-lg"

            // disabled={!email || !password}
          >
            SIGN IN
          </button>

          {/* Register Link */}
          <div className="text-[#828282] font-roboto text-base font-normal">
            Don't have an account?{" "}
            <Link to="/register" className="text-[#FFFFFF]">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
