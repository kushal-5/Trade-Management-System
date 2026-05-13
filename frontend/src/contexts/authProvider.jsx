import { createContext, useContext, useState, useEffect } from "react";
import { setUserToken, clearUserToken } from "../utils/cookieUtils";
import { userAuthServices } from "../services/authService";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const signin = async (email, password) => {
    try {
      const response = await userAuthServices.login(email, password);
      console.log(response);
      if (response.code === "first_time_login") {
        window.location.href = response.resetURL;
      }
      if (response.success) {
        setUserToken(response.token);
      
        localStorage.setItem("token", response.token);
      
        navigate("/dashboard");
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.log(error);
      throw error.response ? error.response.data.message : "Login failed";
    }
  }

  const register = async (data) => {
    try {
      const response = await userAuthServices.register(data);

      console.log("Registration response:", response);
      // register() returns the API JSON body: { success, message, data }
      if (response.success) {
        localStorage.setItem("registrationSuccess", "true");

        setTimeout(() => {
          navigate("/signin", {
            state: { registrationSuccess: true },
            replace: true,
          });
        }, 100);

        return response.data;
      }

      throw new Error(response.message || "Registration failed");
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  };

  const signout = async () => {
    clearUserToken();
  };

  return (
    <AuthContext.Provider value={{ signin, signout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);