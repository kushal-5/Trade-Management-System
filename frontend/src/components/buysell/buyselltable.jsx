import MyTable from "../../components/market/table";
import { useMarket } from "../../contexts/market/MarketContext";
function OrderBuySellTable() {
  const { selected } = useMarket();

  const columns = [
    {
      accessorKey: "order",
      header: "ORDER",
    },
    {
      accessorKey: "quantity",
      header: "QUANTITY",
    },
    {
      accessorKey: "price",
      header: "PRICE",
    },
  ];
  return (
    <div className=" flex flex-col justify-center items-center w-[1300px]">
      <div className=" gap-7 flex flex-col w-[1250px]">
        <div className="flex w-full justify-between items-center ">
          <div className="w-[550px] flex flex-col  items-center justify-center gap-1">
            <h1 className="bg-red1 w-full p-2 items-center flex justify-center rounded-md font-medium">
              TOP 5 SELLS
            </h1>

            <MyTable data={selected} columns={columns} showType="topsell" />
          </div>
          <div className="w-[560px] flex flex-col ms-36 items-center justify-center gap-1">
            <h1 className="bg-blue1 p-2 w-full flex justify-center items-center rounded-md font-medium">
              TOP 5 BUY
            </h1>

            <MyTable data={selected} columns={columns} showType="topbuy" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderBuySellTable;
