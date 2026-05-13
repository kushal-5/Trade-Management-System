import axiosInstance from "./axiosInstance";


export const authServices = {
    login: async (email, password) => {

        const response = await axiosInstance.post("/admin/login", {
            email,
            password,
        });
       
        return response.data;
    },

    isLoggedIn: async () => {
        try {
          const response = await axiosInstance.get("/admin/check-auth");
          return response.data;
        } catch (err) {
          return err.response?.data ?? { status: "fail", message: "Unauthorized" };
        }
      },
  }