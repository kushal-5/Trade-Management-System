const InfoBlock = ({ title, description }) => (
  <div>
    <h1 className="text-sm text-gray-500">{title}</h1>
    <p className="text-md text-gray-400">{description}</p>
  </div>
);

const Section = ({ title, data }) => (
  <div className="grid grid-cols-4 gap-4 mt-1">
    {data.map((info, index) => (
      <div key={index} className=" flex flex-col gap-5">
        <InfoBlock title={info.title} description={info.description} />
      </div>
    ))}
  </div>
);

const ClientDetailPage = ({ personalDetails }) => {
  const details = personalDetails?.individualDetails;
  const address = personalDetails?.addresses[0];
  const bank = personalDetails?.bankingInfo[0];
  console.log(personalDetails);
  const personalInfo = [
    {
      title: "Father's Name",
      description: <span>{details?.fatherName}</span>,
    },
    {
      title: "Mother's Name",
      description: <span>{details?.motherName}</span>,
    },
    {
      title: "Date Of Birth",
      description: <span>{details?.dateOfBirthBS}</span>,
    },
    {
      title: "Marital Status",
      description: <span>{details?.maritalStatus}</span>,
    },
    {
      title: "Organization Name",
      description: <span>{}</span>,
    },
    {
      title: "Organization Address",
      description: <span>{}</span>,
    },
    {
      title: "Spouse Name",
      description: <span>{}</span>,
    },
    {
      title: "Nationality",
      description: <span>{details?.nationality}</span>,
    },
    {
      title: "Occupation",
      description: <span>{}</span>,
    },
    {
      title: "Grand Father's Name",
      description: <span>{details?.grandfatheName}</span>,
    },
    {
      title: "Contact No",
      description: <span>{personalDetails?.mobileNumber}</span>,
    },
    {
      title: "Gender",
      description: <span>{details?.gender}</span>,
    },
    {
      title: "Citizenship No",
      description: <span>{details?.citizenshipNumber}</span>,
    },
    {
      title: "Citizenship Issue Date",
      description: <span>{details?.citizenshipIssuedDateBS}</span>,
    },
    {
      title: "Citizenship Issue Place",
      description: <span>{details?.citizenshipIssuedDistrict}</span>,
    },
    {
      title: "Financial Details",
      description: <span>{}</span>,
    },
  ];

  const bankDetails = [
    {
      title: "Bank Name",
      description: <span>{bank?.bankName}</span>,
    },
    {
      title: "Account Number",
      description: <span>{bank?.accountNumber}</span>,
    },
    {
      title: "Temporary Address",
      description: (
        <span>
          {address?.municipality},{address?.street}-{address.wardNum}
        </span>
      ),
    },
    {
      title: "Permanent Address",
      description: (
        <span>
          {" "}
          {address?.municipality},{address?.street}-{address.wardNum}
        </span>
      ),
    },
    {
      title: "Account Type",
      description: <span>{}</span>,
    },
  ];

  const productDetails = [
    { title: "Products", description: <span>{}</span> },
    {
      title: "Order Types",
      description: <span>{}</span>,
    },
  ];

  return (
    <div className="gap-4 mt-4 flex flex-col w-[1200px] ">
      {/* Personal Info Section */}
      <Section title="Personal Info" data={personalInfo} />
      {/* <Section title="Additional Info" data={additionalInfo} /> */}

      {/* Bank & Address Details */}
      <div className="flex text-white mt-3 w-full">
        <h1 className="w-2/6">Bank Details</h1>
        <h1 className="ms-52">Address Details</h1>
      </div>

      <Section title="Bank Details" data={bankDetails} />

      {/* Product & Order Details */}
      <div className="relative">
        <h1 className="text-white text-md">Products and Order Details</h1>

        <Section title="Product Details" data={productDetails} />

        <button className="p-2 text-black rounded-lg bg-seeWarnings right-11 bottom-0 flex absolute">
          Export To PDF
        </button>
      </div>
    </div>
  );
};

export default ClientDetailPage;
