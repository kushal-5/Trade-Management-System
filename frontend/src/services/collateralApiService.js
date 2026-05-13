
import axiosInstance from "./axiosInstance";

export const collateralApiServices={
    postCollateral: async ()=>{
        const res= await axiosInstance.post("/collateral/collateralInfo");
        return res.data;
      },
      

      getCollateral: async ()=>{
        const res= await axiosInstance.get("/collateral/collateralamount")
        return res;
      }
}