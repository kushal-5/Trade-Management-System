import Email from "../../assets/login/email.svg";
import Password from "../../assets/login/password.svg";
import React, { useState } from "react";
import { useAuth } from "../../provider/brokerAuthProvider";
import { ToastContainer,toast } from "react-toastify";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const notify = () => toast("Login Succesfull !");
  
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({}); // Clear previous errors
try{
    if (!validateForm()) return;// Validate form before proceeding
   await login(email, password);
   notify();}
  catch (error) {
      if (error.response && error.response.data.status === 401
      ) {
        // Incorrect password or email
        setErrors({ password: "Incorrect email or password" });
      } else {
        // Generic error
        console.error(error);
        setErrors({ general: "Something went wrong. Try again later." });
      }}
  };


  return (
    <div className="flex  h-screen w-screen justify-center font-roboto items-center bg-[#001217]">
      {/* 👇 This is the inner box that is now fully centered */}
      <ToastContainer position="top-right"
autoClose={5000} />
      <form 
             onSubmit={
               handleSubmit }
            >
        
      <div className="flex flex-col w-[27.3125rem] items-center gap-6">
        <h1 className="text-white font-roboto text-5xl font-semibold leading-8 mb-4">
          Sign in
        </h1>

        <div className="w-full">
          <label
            htmlFor="email"
            className="text-[#828282] font-roboto text-lg  font-[1.25rem] leading-8"
          >
            Email
          </label>

          <div className="relative flex w-full">
            <img
              src={Email}
              alt="input icon"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5"
            />
            <input
              type="email"
              id="email"
              onChange={handleInputChange(setEmail, "email")}
              value={email}
              className="w-[27.3125rem] pl-12 text-[#BDBDBD] font-roboto text-lg font-normal bg-[#001217] 
                border-2 border-[#BDBDBD] rounded-xl leading-tight py-5 px-4 outline-none"
              placeholder="Email address"
              autoComplete="off"
              />
          </div>
                {errors.email && (
                  <p className="text-red-500 text-sm text-start">{errors.email}</p>
          )}
        </div>

        <div className="w-full">
          <label
            htmlFor="password"
            className="text-[#828282] font-roboto text-lg font-normal leading-8"
          >
            Password
          </label>
          <div className="relative flex w-full">
            <img
              src={Password}
              alt="input icon"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5"
              />
            <input
              type="password"
              id="password"
              onChange={handleInputChange(setPassword, "password")}
              value={password}
              className="w-full pl-12 text-[#BDBDBD] font-roboto text-lg font-normal bg-[#001217] 
              border-2 border-[#BDBDBD] rounded-xl leading-tight py-5 px-4 outline-none"
              placeholder="Enter your password"
              />
          </div>
                 {errors.password && (
                   <p className="text-red-500 text-sm">{errors.password}</p>
                  )}
        </div>

        <button
            type="submit"
   
            className="text-black font-roboto text-base font-normal w-full flex justify-center items-center px-8 py-4 gap-3 bg-[#F1F510] rounded-lg 
              "
              >
            SIGN IN
          </button>
      </div>
            </form>

    </div>
  );
};

export default Login;

