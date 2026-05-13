import { createContext, useContext } from "react";
import { authServices } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { setBrokerToken } from "../utils/cookieUtils"; // Import the function to set the token in cookies

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();  // Declare navigate here inside the functional component
    const login = async (email, password) => {
        try {
          const response = await authServices.login(email, password);
          if (response.status === "success") {
            setBrokerToken(response.token);
            navigate("/admin/home"); // Navigate after setting token
          } else if (response.status === "fail") {
            alert(response.message);
          }
        } catch (error) {
          console.log("Error during login:", error);
          throw error.response ? error.response.data.message : "Login failed";
        }
      };
      

    return (
        <AuthContext.Provider value={{ login }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
