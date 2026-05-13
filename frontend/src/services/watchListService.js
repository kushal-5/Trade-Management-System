import axiosInstance from "./axiosInstance";

export const watchListApiServices = {
  getAllWatchList: async () => {
    const res = await axiosInstance.get("/watchlist/demo");
    return res;
  },

  getwatchList: async () => {
    const res = await axiosInstance.get(`/watchlist/me`);
    return res;
  },

  addWatchList: async (symbol) => {
    const res = await axiosInstance.post("/watchlist/add", {
      symbol,
    });
    return res.data;
  },
  removeWatchList: async (symbol) => {
    const res = await axiosInstance.post("/watchlist/remove", {
      symbol,
    });
    return res.data;
  },
};
