import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userAuthServices } from "../services/authService";

const CheckAuthContext = createContext(undefined);

export const CheckAuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  // useEffect(() => {
  //   async function verifyAuth() {
  //     try {
  //       setLoading(true);
  //       const response = await userAuthServices.isLoggedIn();
  //       if (response.status === "success") {
  //         setIsAuthenticated(true);
  //         setUser(response.data);
  //         return true;
  //       } else {
  //         setIsAuthenticated(false);
  //         if (navigate) navigate("/signin");
  //         return false;
  //       }
  //     } catch (error) {
  //       setIsAuthenticated(false);
  //       if (navigate) navigate("/signin");
  //       return false;
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   verifyAuth();
  // }, [navigate]);
  useEffect(() => {
    setIsAuthenticated(true);
    setUser({ name: "Dev User" });
    setLoading(false);
  }, []);
  return (
    <CheckAuthContext.Provider value={{ isAuthenticated, loading, user }}>
      {children}
    </CheckAuthContext.Provider>
  );
};

export const useCheckAuth = () => useContext(CheckAuthContext);
