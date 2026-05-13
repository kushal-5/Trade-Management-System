import axiosInstance from "./axiosInstance";

export const marketApiServices = {
  stockList: async () => {
    const res = await axiosInstance.get("/market/stocklist");
    return res;
  
  },
  deleteWatchList: async (id) => {
    const res = await axiosInstance.delete(`/market/deletewatchlist/${id}`);
    return res.data;
  },

  editWatchList: async(id,newTitle)=>{
    const res= await axiosInstance.put(`/market/updatewatchlist/${id}`,{
        title:newTitle
    });
    return res.data;
  },
  
  getwatchList: async (symbol) => {
    const res = await axiosInstance.get(`/market/watchlists`)
    return res.data;
  },

  postWatchList: async (title,symbol=undefined)=>{
    const res= await axiosInstance.post("/market/watchlist",{title,symbol });
    return res.data
  },

  getOrderList: async (symbol) => {
    if (!symbol) {
      throw new Error('Symbol is required');
    }
    const res = await axiosInstance.get(`/market/order/${symbol}`);
    return res.data;
  },

  getBuySell: async ()=> {
    const res= await axiosInstance.get("/market/top-buysell-list");
    return res.data
  }

};


