import Box from "../../shared/box";
import Buttons from "../../shared/buttons";
import InBox from "./inBox";
import bankImg from "../../assets/images/collateralLogo/bank.svg";
import moneyImg from "../../assets/images/collateralLogo/money.svg";
import paymentImg from "../../assets/images/collateralLogo/payment.svg";
import remarkImg from "../../assets/images/collateralLogo/remark.svg";
import { useCollateral } from "../../contexts/collateral/collateralContext";

function LoadCollateral() {
  const { collateralData } = useCollateral();
  console.log(collateralData);
  return (
    <div className="flex flex-col gap-6 ms-2">
      <div className="flex gap-5">
        <Box label="NRP 800000" input="Total Collateral" />
        <Box label="NRP 800000" input="Available Trading Limit" />
        <Box label="NRP 800000" input="Utilized Collateral" />
        <Box label="NRP 800000" input="Available Collateral" />
        <Box label="NRP 800000" input="Total Trading Limit" />
        <Box label="NRP 800000" input="Utilized Trading Limit" />
      </div>
      <div className="grid grid-cols-2 gap-4 w-[1000px] ">
        <InBox label="BANK" input="Account Name" src={bankImg} />
        <InBox label="AMOUNT" input="Amount" src={moneyImg} />
        <InBox
          label="PAYMENT METHOD"
          input="Select Payment Method"
          src={paymentImg}
        />
        <InBox label="REMARKS" input="Remarks" src={remarkImg} />
      </div>
      <Buttons label="Cancel" />
    </div>
  );
}

export default LoadCollateral;
