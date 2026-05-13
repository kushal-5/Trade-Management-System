import Cookies from "js-cookie";

// Set userToken in cookies with optional expiration (default 7 days)
export const setUserToken = (token, days = 7) => {
  Cookies.set("userToken", token, {
    expires: days,
    secure: false,
    sameSite: "Strict", // Prevent CSRF
  });
};

// Clear userToken from cookies
export const clearUserToken = () => {
  Cookies.remove("userToken");
};

export const getUserToken = () => {
  return Cookies.get("userToken"); // Returns the token string or undefined if not set
};
