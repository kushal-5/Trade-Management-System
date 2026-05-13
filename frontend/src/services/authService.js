import axiosInstance from "./axiosInstance";

export const userAuthServices = {
  // Login
  login: async (email, password) => {
    const res = await axiosInstance.post("/auth/login", {
      email,
      password,
    });
    return res.data;
  },

  // Register (clean + minimal payload)
  register: async (data) => {
    const client = data.General?.clientInfo ?? {};
    const email = data.email ?? client.email;
    const password = data.password ?? client.password;
    const mobileNumber = data.mobileNumber ?? client.mobileNumber;
    const ind = data.Individual ?? {};
    const joinedName = [ind.firstName, ind.middleName, ind.lastName]
      .filter(Boolean)
      .join(" ");
    const fullName = data.fullName ?? (joinedName || "");

    const res = await axiosInstance.post("/auth/register", {
      email,
      password,
      mobileNumber: mobileNumber || undefined,
      fullName,
      clientType: data.clientType ?? client.clientType,
      panNumber: client.panNumber ?? data.panNumber,
    });

    return res.data;
  },
  // Upload document
  uploadDocument: async (file) => {
    const formData = new FormData();
    formData.append("attachment", file);

    const res = await axiosInstance.post(
      "/auth/upload-document",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    return res.data;
  },

  // Reset password
  resetPasswordWithToken: async (token, newPassword) => {
    const res = await axiosInstance.post(
      `/auth/reset-password?token=${token}`,
      { newPassword }
    );

    return res.data;
  },

  // Logout
  logout: async () => {
    const res = await axiosInstance.post("/auth/logout");
    return res.data;
  },

  // Auth check
  isLoggedIn: async () => {
    try {
      const res = await axiosInstance.get("/auth/check-auth");
      return res.data;
    } catch (err) {
      return err.response?.data;
    }
  },
};