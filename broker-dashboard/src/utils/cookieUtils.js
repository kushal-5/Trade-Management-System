import Cookies from "js-cookie";


export const setBrokerToken = (token, days = 7) => {
  Cookies.set("accessToken", token, {
    expires: days,
    secure: false,
    sameSite: "Strict",
  });
};

export const getBrokerToken = () => {
  return Cookies.get("accessToken");
};
