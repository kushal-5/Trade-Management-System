import { createContext, useContext, useEffect, useState } from "react";
const CollateralContext = createContext();

export const collateralProvider = ({ Children }) => {
  const [collateralData, setCollateralData] = useState();

  const fetchCollateral = async () => {
    try {
      const response = await collateralApiServices.getCollateral();
      setCollateralData(response.data);
    } catch (err) {
      console.error("Error fetching collateral:", err.message);
    }
  };
  useEffect(() => {
    fetchCollateral();
  });

  console.log(collateralData);
  return (
    <CollateralContext.Provider
      value={{
        fetchCollateral,
        collateralData,
      }}
    >
      {Children}
    </CollateralContext.Provider>
  );
};
export const useCollateral = () => useContext(CollateralContext);
