const InfoBlock = ({ title, description }) => (
  <div>
    <h1 className="text-gray-500 text-sm">{title}</h1>
    <p className=" text-gray-400">{description}</p>
  </div>
);
const InfoBlock2 = ({ title, description }) => (
  <div className="">
    <h1 className="text-gray-500 text-sm">{title}</h1>
    <p className="text-base text-gray-400">{description}</p>
  </div>
);

const CollateralDetails = ({ details }) => (
  <div className="flex flex-col mt-4">
    <h1>Collateral Details</h1>
    <div className="mt-2 w-full text-sm grid grid-cols-4">
      {details.map((item, index) => (
        <div key={index} className="w-40">
          <h1 className="text-gray-500 text-sm">{item.title}</h1>
          <p className="text-gray-400 text-base">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const SummarySection = ({ title, buttonLabel, summaryList }) => (
  <div className="">
    <h1>{title}</h1>
    <div className="flex justify-between mt-4  text-sm w-[600px]">
      {summaryList?.map((item, index) => (
        <div key={index} className="w-36">
          <h1 className="text-gray-500 text-sm">{item.title}</h1>
          <p className="text-gray-400 text-base">
            NRP <span>{item.description}</span>
          </p>
        </div>
      ))}

      <button className="bg-seeWarnings rounded-lg mr-20 text-black p-2 ">
        {buttonLabel}
      </button>
    </div>
  </div>
);

const GeneralPage = ({ generalDetails }) => {
  const address = generalDetails?.addresses[0];
  const deposit = generalDetails?.depositoryInfo[0];

  const detailList = [
    {
      title: "Total Collateral",
      description: <span>{}</span>,
    },
    {
      title: "Utilized Collateral",
      description: <span>{}</span>,
    },
    {
      title: "Total Trading Limit",
      description: <span>{}</span>,
    },
    {
      title: "Utilized Trading Limit",
      description: <span>{}</span>,
    },
  ];

  const detailList2 = [
    {
      title: "Available Collateral",
      description: <span>{}</span>,
    },
    {
      title: "Available Trading Limit",
      description: <span>{}</span>,
    },
  ];

  const userInfo = [
    {
      title: "Address",
      description: (
        <span>
          {address?.municipality},{address?.street}-{address?.wardNum}
        </span>
      ),
    },
    {
      title: "Mobile No",
      description: <span>{generalDetails?.mobileNumber}</span>,
    },
    { title: "Code", description: <span>{generalDetails?.mobileNumber}</span> },
    { title: "PAN", description: <span>{generalDetails?.panNumber}</span> },
    { title: "Email", description: <span>{generalDetails?.email}</span> },

    {
      title: "Client Group",
      description: <span>{}</span>,
    },

    { title: "UCC", description: <span>{}</span> },
    {
      title: "Margin Lending",
      description: <span>{}</span>,
    },
    {
      title: "Boid",
      description: <span>{deposit?.BOID}</span>,
    },
    {
      title: "Referred By",
      description: <span>{}</span>,
    },
  ];

  const summary = [
    {
      title: "Total Due amount",
      description: <span>{}</span>,
    },
  ];
  return (
    <div className="flex flex-col w-[1200px] gap-2 2xl:mt-10 xl:mt-5 lg:mt-9 md:mt-11 h-[440px]">
      {/* User Info Section */}

      <div className="flex justify-between flex-col">
        <div className="grid grid-cols-4 gap-2 w-full">
          {userInfo.map((info, index) => (
            <InfoBlock
              key={index}
              title={info.title}
              description={info.description}
            />
          ))}
        </div>
      </div>

      <CollateralDetails details={detailList} />

      {/* Additional Trading Details */}
      <div className="mt-2 text-sm grid grid-flow-col grid-rows-1">
        {detailList2.map((item, index) => (
          <div key={index} className="w-56 ">
            <h1 className="text-gray-500 text-sm">{item.title}</h1>
            <p className="text-base text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="flex w-full mt-6">
        <SummarySection
          summaryList={summary}
          title="Sell Summary"
          buttonLabel="Make Payment Request"
        />
        <SummarySection
          summaryList={summary}
          title="Buy Summary"
          buttonLabel="Make Clearance"
        />
      </div>
    </div>
  );
};

export default GeneralPage;
