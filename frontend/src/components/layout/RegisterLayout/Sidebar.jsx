import React, { useState, useEffect } from "react";
import CircularProgress from "../RegisterLayout/CircularProgress";
import AccountType from "../../../pages/RegisterPages/General/AccountType";
import ClientType from "../../../pages/RegisterPages/General/ClientType";
import Address from "../../../pages/RegisterPages/AddressPage";
import Bank from "../../../pages/RegisterPages/BankPage";
import Depositary from "../../../pages/RegisterPages/Depositary";
import FileUpload from "../../../pages/RegisterPages/DocumentUpload";
import UserAgreement from "../../../pages/RegisterPages/UserAgreement";
import CompanyDetails1 from "../../../pages/RegisterPages/Corporate/CompanyDetail1";
import CompanyDetails2 from "../../../pages/RegisterPages/Corporate/CompanyDetail2";
import CompanyDetails3 from "../../../pages/RegisterPages/Corporate/CompanyDetail3";
import Ownership1 from "../../../pages/RegisterPages/Ownership/Ownership1";
import Ownership2 from "../../../pages/RegisterPages/Ownership/Ownership2";
import Ownership3 from "../../../pages/RegisterPages/Ownership/Ownership3";
import Ownership4 from "../../../pages/RegisterPages/Ownership/Ownership4";
import Individual1 from "../../../pages/RegisterPages/Individual/Individual1";
import Individual2 from "../../../pages/RegisterPages/Individual/Individual2";
import Individual3 from "../../../pages/RegisterPages/Individual/Individual3";
import Individual4 from "../../../pages/RegisterPages/Individual/Individual4";
import MoneyLaunder1 from "../../../pages/RegisterPages/MoneyLaundering/MoneyLaunder1";
import MoneyLaunder2 from "../../../pages/RegisterPages/MoneyLaundering/MoneyLaunder2";
import MoneyLaunder3 from "../../../pages/RegisterPages/MoneyLaundering/MoneyLaunder3";
import MoneyLaunder4 from "../../../pages/RegisterPages/MoneyLaundering/MoneyLaunder4";
import ICON from "../../../assets/images/registrationImages/info.svg";
import UICON from "../../../assets/images/registrationImages/uncolouredInfo.svg";
import Header from "../RegisterLayout/Header";
import { useFormContext } from "../../../contexts/formProvider";
import { useAuth } from "../../../contexts/authProvider";
import { toast } from "react-toastify";

const Sidebar = () => {
  const { register } = useAuth();

  // Ensure it's at least an empty object
  const { formData,calculateProgress } = useFormContext();

 const progress = Math.round(calculateProgress() * 100) / 100;

const pro= Math.floor(progress)
  const handleSubmit = async () => {
    try {
      await register(formData);
      toast.success(
        "Registration successful! A broker will verify your account soon."
      );
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Registration failed. Please try again.";
      toast.error(message);
    }
  };

  const [currentTab, setCurrentTab] = useState(0);
  const [currentPages, setCurrentPages] = useState([0, 0, 0, 0, 0, 0]);
  const [clientType, setClientType] = useState(null);

  const [accountTypeData, setAccountTypeData] = useState({});
  const [clientTypeData, setClientTypeData] = useState({});
  const [addressData, setAddressData] = useState({});
  const [bankData, setBankData] = useState({});
  const [depositoryData, setDepositoryData] = useState({});
  const [documentsData, setDocumentsData] = useState({});
  const [userAgreementData, setUserAgreementData] = useState({});

  // Store corporate and individual details
  const [corporateData, setCorporateData] = useState({});
  const [ownershipData, setOwnershipData] = useState({});
  const [individualData, setIndividualData] = useState({});
  const [moneyLaunderingData, setMoneyLaunderingData] = useState({});

  useEffect(() => {}, [currentTab, currentPages]);
  const baseTabs = [
    {
      name: "General",
      activeIcon: ICON,
      inactiveIcon: UICON,
      pages: [
        {
          content: (
            <AccountType data={accountTypeData} setData={setAccountTypeData} />
          ),
        },
        {
          content: (
            <ClientType
              data={clientTypeData}
              setData={setClientTypeData}
              setClientType={setClientType}
            />
          ),
        },
      ],
    },
    {
      name: "Address",
      activeIcon: ICON,
      inactiveIcon: UICON,
      pages: [
        { content: <Address data={addressData} setData={setAddressData} /> },
      ],
    },
    {
      name: "Bank",
      activeIcon: ICON,
      inactiveIcon: UICON,
      pages: [{ content: <Bank data={bankData} setData={setBankData} /> }],
    },
    {
      name: "Depositary",
      activeIcon: ICON,
      inactiveIcon: UICON,
      pages: [
        {
          content: (
            <Depositary data={depositoryData} setData={setDepositoryData} />
          ),
        },
      ],
    },
    {
      name: "Documents",
      activeIcon: ICON,
      inactiveIcon: UICON,
      pages: [
        {
          content: (
            <FileUpload data={documentsData} setData={setDocumentsData} />
          ),
        },
      ],
    },
    {
      name: "User Agreement",
      activeIcon: ICON,
      inactiveIcon: UICON,
      pages: [
        {
          content: (
            <UserAgreement
              data={userAgreementData}
              setData={setUserAgreementData}
            />
          ),
        },
      ],
    },
  ];

  const insertTabsBasedOnClientType = (tabs) => {
    if (clientType === "corporate" || clientType === "mutual") {
      return [
        ...tabs.slice(0, 1),
        {
          name: "Corporate",
          activeIcon: ICON,
          inactiveIcon: UICON,
          pages: [
            {
              content: (
                <CompanyDetails1
                  data={corporateData}
                  setData={setCorporateData}
                />
              ),
            },
            {
              content: (
                <CompanyDetails2
                  data={corporateData}
                  setData={setCorporateData}
                />
              ),
            },
            {
              content: (
                <CompanyDetails3
                  data={corporateData}
                  setData={setCorporateData}
                />
              ),
            },
          ],
        },
        {
          name: "Ownership",
          activeIcon: ICON,
          inactiveIcon: UICON,
          pages: [
            {
              content: (
                <Ownership1 data={ownershipData} setData={setOwnershipData} />
              ),
            },
            {
              content: (
                <Ownership2 data={ownershipData} setData={setOwnershipData} />
              ),
            },
            {
              content: (
                <Ownership3 data={ownershipData} setData={setOwnershipData} />
              ),
            },
            {
              content: (
                <Ownership4 data={ownershipData} setData={setOwnershipData} />
              ),
            },
          ],
        },
        ...tabs.slice(1),
      ];
    } else if (clientType === "individual") {
      return [
        ...tabs.slice(0, 1),
        {
          name: "Individual",
          activeIcon: ICON,
          inactiveIcon: UICON,
          pages: [
            {
              content: (
                <Individual1
                  data={individualData}
                  setData={setIndividualData}
                />
              ),
            },
            {
              content: (
                <Individual2
                  data={individualData}
                  setData={setIndividualData}
                />
              ),
            },
            {
              content: (
                <Individual3
                  data={individualData}
                  setData={setIndividualData}
                />
              ),
            },
            {
              content: (
                <Individual4
                  data={individualData}
                  setData={setIndividualData}
                />
              ),
            },
          ],
        },
        {
          name: "Money Launder Prevention",
          activeIcon: ICON,
          inactiveIcon: UICON,
          pages: [
            {
              content: (
                <MoneyLaunder1
                  data={moneyLaunderingData}
                  setData={setMoneyLaunderingData}
                />
              ),
            },
            {
              content: (
                <MoneyLaunder2
                  data={moneyLaunderingData}
                  setData={setMoneyLaunderingData}
                />
              ),
            },
            {
              content: (
                <MoneyLaunder3
                  data={moneyLaunderingData}
                  setData={setMoneyLaunderingData}
                />
              ),
            },
            {
              content: (
                <MoneyLaunder4
                  data={moneyLaunderingData}
                  setData={setMoneyLaunderingData}
                />
              ),
            },
          ],
        },
        ...tabs.slice(1),
      ];
    }
    return tabs;
  };

  const tabs = insertTabsBasedOnClientType(baseTabs);

  useEffect(() => {
    if (clientType) {
      let newPagesLength = baseTabs.length;

      if (clientType === "corporate" || clientType === "mutual") {
        newPagesLength += 2;
      } else if (clientType === "individual") {
        newPagesLength += 2;
      }

      // Preserve existing progress, extend/reset only if needed
      setCurrentPages((prevPages) => {
        const updatedPages = [...prevPages];
        while (updatedPages.length < newPagesLength) {
          updatedPages.push(0);
        }
        while (updatedPages.length > newPagesLength) {
          updatedPages.pop();
        }
        return updatedPages;
      });
    }
  }, [clientType]);

  const goToNextPage = () => {
    setCurrentPages((prev) => {
      const updatedPages = [...prev];
      if (updatedPages[currentTab] < tabs[currentTab].pages.length - 1) {
        updatedPages[currentTab] += 1;
      } else if (currentTab < tabs.length - 1) {
        setCurrentTab((prevTab) => prevTab + 1);
      }
      return updatedPages;
    });
  };

  const goToPrevPage = () => {
    setCurrentPages((prev) => {
      const updatedPages = [...prev];
      if (updatedPages[currentTab] > 0) {
        updatedPages[currentTab] -= 1;
      } else if (currentTab > 0) {
        setCurrentTab((prevTab) => prevTab - 1);
        updatedPages[currentTab - 1] = tabs[currentTab - 1].pages.length - 1;
      }
      return updatedPages;
    });
  };

  const isFirstPage = currentTab === 0 && currentPages[0] === 0;
  const isLastPage =
    currentTab === tabs.length - 1 &&
    currentPages[currentTab] === tabs[currentTab].pages.length - 1;

  const renderPageContent = () => {
    if (!tabs[currentTab]) {
      return null;
    }

    const tab = tabs[currentTab];
    if (!tab.pages || !tab.pages[currentPages[currentTab]]) {
      return null;
    }

    const page = tab.pages[currentPages[currentTab]];
    return <div className="p-4">{page.content}</div>;
  };

  const renderPageProgress = (index) => {
    if (!tabs[index]) {
      return "1";
    }

    const totalPages = tabs[index].pages.length;
    const currentPage = currentPages[index] + 1;
    return totalPages > 1 ? `${currentPage}/${totalPages}` : "1";
  };


  return (
    <div className="flex flex-col md:flex-row bg-black ms-0 w-full overflow-hidden gap-4">
      {/* Sidebar */}
      <div className="w-full md:w-[22rem] h-screen overflow-y-auto overflow-hidden flex flex-col scrollbar-hide">

        <div className=" flex justify-center py-10">
          <CircularProgress progress={pro}/>
        </div>

        <div className="flex flex-col p-2 md:p-4 py-4 md:py-8 flex-grow md:ms-4">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className="w-full flex flex-col items-center mb-2 md:mb-4"
            >
              <button
                className={`w-full text-left px-2 md:px-3 py-4  mb-1 flex items-start gap-2 md:gap-3 text-xl md:text-xl font-medium transition-all justify-start ${
                  currentTab === index
                    ? "text-[#e1e500] border-l-2 border-[#e1e500]"
                    : "text-[#828282]"
                }`}
                onClick={() => setCurrentTab(index)}
              >
                <img
                  src={currentTab === index ? tab.activeIcon : tab.inactiveIcon}
                  alt={`${tab.name} icon`}
                  className="w-5 h-5 md:w-5 md:h-5 mt-1 md:mt-2"
                />
                {tab.name}
                <div
                  className={`ml-auto w-10 md:w-14 bg-[#2D2D2D] ${
                    currentTab === index ? "text-[#e1e500]" : " text-white"
                  } px-2 md:px-3 py-1 rounded-lg text-sm md:text-base text-center`}
                >
                  {renderPageProgress(index)}
                </div>
              </button>

              {/* Dots below tab */}
              <div className="flex items-center gap-1 mr-auto md:mr-48 mt-[-15px] md:mt-[-15px] ml-10 md:ml-0">
                {tab.pages.map((_, pageIndex) => (
                  <div
                    key={pageIndex}
                    className={`w-2 h-2 md:w-2 md:h-2 rounded-full ${
                      currentTab === index && currentPages[index] === pageIndex
                        ? "bg-[#e1e500]"
                        : "bg-black border-[1px] border-[#828282]"
                    }`}
                  ></div>
                ))}
                <div className="w-4 md:w-6 h-[2px] rounded-md bg-[#828282] mx-1 md:mx-2"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full md:w-[19.9375rem] h-[3rem] md:h-[4rem]">
          <Header />
        </div>
      </div>

      {/* Content Area and Navigation */}
      <div className="flex-1 flex flex-col">
        
        <div className="flex-1 overflow-y-auto flex pt-40">
          {renderPageContent()}
        </div>
        {/* Navigation Buttons */}
        <div className="px-4 md:px-8 md:py-5 py-6 md:mb-14 bg-[#161616] flex gap-4 md:gap-4 w-11/12">
          {!isFirstPage && (
            <button
              className="flex w-[11rem] py-3 justify-center items-center gap-3 rounded-lg  
              bg-[#282828] text-[#BDBDBD] font-roboto text-lg md:text-xl font-normal capitalize"
              onClick={goToPrevPage}
            >
              Prev
            </button>
          )}

          <button
            className="flex w-[11rem] py-3 justify-center items-center gap-3 rounded-lg 
            bg-[#e1e500] text-black hover:bg-[#d1d400] font-roboto text-lg md:text-xl font-normal capitalize"
            onClick={isLastPage ? handleSubmit : goToNextPage}
          >
            {isLastPage ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
