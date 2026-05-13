import Box from "../../shared/box";
import InBox from "./inBox";
import moneyImg from "../../assets/images/collateralLogo/money.svg";
import accountImg from "../../assets/images/collateralLogo/icon.svg";
import Buttons from "../../shared/buttons";
function RefundCollateral() {
  return (
    <div className="flex flex-col gap-6 ms-5">
      <div className="flex gap-5 ">
        <Box label="NRP 800000" input="Total Collateral" />
        <Box label="NRP 800000" input="Collateral Utilized" />
        <Box label="NRP 800000" input="Pending Refund Requist" />
        <Box label="NRP 800000" input="Max Refund Allowed" />
      </div>
      <div className="flex gap-9 ">
        <InBox
          label="ACCOUNT NUMBER"
          input="Select Account Number"
          src={accountImg}
        />
        <InBox label="AMOUNT" input="AMOUNT" src={moneyImg} />
      </div>
      <div className="flex gap-3">
        <Buttons label="Submit" />
        <Buttons label="Cancel" />
      </div>
    </div>
  );
}

export default RefundCollateral;
