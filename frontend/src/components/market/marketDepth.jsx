import { ChevronDown } from "lucide-react";
import MyTable from "./table";
import { useState, useEffect } from "react";
import { useMarket } from "../../contexts/market/MarketContext";
import DropdownMenu from "./depthButton";

function MarketDepth() {
  const { depthList, fetchTopBuySellList, loading, error } = useMarket();
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState({});

  useEffect(() => {
    fetchTopBuySellList();

    // Retrieve selected data from localStorage
    const savedSelectedData = localStorage.getItem("selectedCompany");
    if (savedSelectedData) {
      setSelected(JSON.parse(savedSelectedData));
    }
  }, []);

  useEffect(() => {
    // Save the selected data to localStorage whenever it changes
    if (selected && selected.securityName) {
      localStorage.setItem("selectedCompany", JSON.stringify(selected));
    }
  }, [selected]);

  const uniqueData = [
    ...new Map(depthList.map((item) => [item.securityName, item])).values(),
  ];

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

  const columns2 = [
    { accessorKey: "point", header: "POINT" },
    { accessorKey: "change", header: "% CHANGE" },
    { accessorKey: "ltp", header: "LTP" },
    { accessorKey: "avgprice", header: "AVG PRICE" },
    { accessorKey: "open", header: "OPEN" },
    { accessorKey: "dhigh", header: "D HIGH" },
    { accessorKey: "dlow", header: "D LOW" },
    { accessorKey: "close", header: "CLOSE" },
    { accessorKey: "ltq", header: "LTQ" },
    { accessorKey: "volume", header: "VOLUME" },
    { accessorKey: "yearlyhigh", header: "52W HIGH" },
    { accessorKey: "yearlylow", header: "52W LOW" },
    { accessorKey: "ltt", header: "LTT" },
  ];

  const handleSelect = (item) => {
    const selectedData = depthList.find(
      (data) => data.securityName === item.securityName
    );
    setSelected(selectedData || {});
    setIsOpen(false);
  };

  return (
    <div className="container mt-8 gap-5 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-semibold">MARKET DEPTH</h1>
      <div className="ms-14 gap-7 flex flex-col ">
        <div className="flex gap-6 justify-between ">
          <h1 className="">
            Company:{" "}
            <span className="text-gray-500">{selected.securityName}</span>
          </h1>
          <h1>
            Security name:{" "}
            <span className="text-gray-500">{selected.company}</span>
          </h1>
          <div className="flex gap-5">
            <button className="flex w-24 justify-between border border-gray-400 p-1 rounded-lg">
              EQ <ChevronDown className="text-gray-500" />
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex w-32 text-center  border border-gray-400 p-1 justify-between  rounded-lg relative "
            >
              {selected.securityName}
              <ChevronDown className="text-gray-500 " />
            </button>

            {/* droupdown menu */}
            {isOpen && (
              <div className="absolute mt-9 w-32 h-52 overflow-y-scroll right-12 bg-black rounded-md text-center ">
                {uniqueData.length > 0 ? (
                  uniqueData.map((item, index) => (
                    <div
                      onClick={() => handleSelect(item)}
                      key={index}
                      href="#"
                      className="block px-4 py-3 "
                    >
                      {item.securityName}
                    </div>
                  ))
                ) : (
                  <p className="px-4 py-2 text-gray-500">No names available</p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* mid table */}
        <div className="flex w-full justify-between items-center ">
          <div className="w-[550px] flex flex-col  items-center justify-center gap-1">
            <h1 className="bg-red1 w-full p-2 items-center flex justify-center rounded-md font-medium">
              TOP 5 SELLS
            </h1>

            <MyTable data={selected} columns={columns} showType="topsell" />
            <button className="bg-red1 ms-5 w-[225px] p-2 rounded-md font-medium">
              SELL
            </button>
          </div>
          <div className="w-[560px] flex flex-col ms-36 items-center justify-center gap-1">
            <h1 className="bg-blue1 p-2 w-full flex justify-center items-center rounded-md font-medium">
              TOP 5 BUY
            </h1>

            <MyTable data={selected} columns={columns} showType="topbuy" />
            <button className="bg-blue1 ms-4 w-[225px] p-2 rounded-md font-medium">
              BUY
            </button>
          </div>
        </div>

        {/* bottom table */}

        <div className="">
          <table className="w-full">
            <thead>
              <tr>
                {columns2.map((col) => (
                  <th
                    key={col.accessorKey}
                    className="bg-teal-400 border border-black font-medium p-2"
                  >
                    {col.header}
                  </th>
                ))}
              </tr>
            </thead>

            {selected.details ? (
              <tbody>
                <tr>
                  {columns2.map((col) => (
                    <td
                      key={col.accessorKey}
                      className="bg-black2 text-gray-400 p-2 border border-black text-center"
                    >
                      {selected.details[col.accessorKey] ?? "-"}
                    </td>
                  ))}
                </tr>
              </tbody>
            ) : (
              <tr>
                <td
                  colSpan={columns2.length}
                  className="text-gray-500 text-center py-2"
                >
                  No data selected
                </td>
              </tr>
            )}
          </table>
        </div>
      </div>
    </div>
  );
}

export default MarketDepth;
