import axiosInstance from "./axiosInstance";

export const orderApiServices={
    postOrderData: async (orderData)=>{
        const res= await axiosInstance.post("/order/orderInfo",orderData);
        return res.data;
      },
      

      getOrderList: async ()=>{
        const res= await axiosInstance.get("/order/orderList")
        return res;
      },
      
      deleteOrder: async (id)=>{
        const res= await axiosInstance.delete(`/order/deleteOrder/${id}`)
        console.log("res",res)
        return res.data;
      }


      
}