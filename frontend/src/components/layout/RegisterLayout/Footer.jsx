import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Define the navigation paths in order
// const CORPORATE_PATHS = [
//   '/register/general/1',
//   '/register/general/2',
//   '/register/corporate/1',
//   '/register/corporate/2',
//   '/register/corporate/3',
//   '/register/corporate/ownership/1',
//   '/register/corporate/ownership/2',
//   '/register/corporate/ownership/3',
//   '/register/corporate/ownership/4',
//   '/register/address',
//   '/register/bank',
//   '/register/depositary',
//   '/register/document',
//   '/register/user-agreement'
// ];

// const INDIVIDUAL_PATHS = [
//   '/register/general/1',
//   '/register/general/2',
//   '/register/individual/1',
//   '/register/individual/2',
//   '/register/individual/3',
//   '/register/individual/4',
//   '/register/moneylaunder/1',
//   '/register/moneylaunder/2',
//   '/register/moneylaunder/3',
//   '/register/moneylaunder/4',
//   '/register/address',
//   '/register/bank',
//   '/register/depositary',
//   '/register/document',
//   '/register/user-agreement'
// ];

// const MUTUAL_PATHS = [
//   '/register/general/1',
//   '/register/general/2',
//   '/register/mutual/1',
//   '/register/mutual/2',
//   '/register/mutual/3',
//   '/register/mutual/ownership/1',
//   '/register/mutual/ownership/2',
//   '/register/mutual/ownership/3',
//   '/register/mutual/ownership/4',
//   '/register/address',
//   '/register/bank',
//   '/register/depositary',
//   '/register/document',
//   '/register/user-agreement'
// ];



const NavigationButton = () => {
    const [currentPages, setCurrentPages] = useState([0, 0, 0]);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Select the appropriate path array based on account type

  
  // Find current index in the path array
  // const currentIndex = paths.findIndex(path => path === currentPath);
  
  // const handleNext = () => {
  //   if (currentIndex < paths.length - 1) {
  //     navigate(paths[currentIndex + 1]);
  //   }
  // };
  
  // const handlePrevious = () => {
  //   if (currentIndex > 0) {
  //     navigate(paths[currentIndex - 1]);
  //   }
  // };

      // Handle next page or advance to next tab if on last page
      const goToNextPage = () => {
        const maxPages = tabs[currentTab].pages.length;
        
        if (currentPages[currentTab] < maxPages - 1) {
          // If not on last page of current tab, go to next page
          const newPages = [...currentPages];
          newPages[currentTab] = currentPages[currentTab] + 1;
          setCurrentPages(newPages);
        } else if (currentTab < tabs.length - 1) {
          // If on last page of current tab and not the last tab, go to next tab
          setCurrentTab(currentTab + 1);
        }
      };
    
      // Handle previous page
      const goToPrevPage = () => {
        if (currentPages[currentTab] > 0) {
          const newPages = [...currentPages];
          newPages[currentTab] = currentPages[currentTab] - 1;
          setCurrentPages(newPages);
        } else if (currentTab > 0) {
          // If on first page of current tab and not the first tab, go to previous tab's last page
          const prevTab = currentTab - 1;
          setCurrentTab(prevTab);
          const newPages = [...currentPages];
          newPages[prevTab] = tabs[prevTab].pages.length - 1;
          setCurrentPages(newPages);
        }
      };

  // const isFirstPage = currentIndex === 0;
  // const isLastPage = currentIndex === paths.length - 1;

  return (
      <div className=" py-8 px-8  w-[74.438rem] h-32 flex justify-start mx-16 my-4 bg-[#161616] items-start gap-6 absolute left-80 bottom-4"> 
        <button
          onClick={goToPrevPage}
          // disabled={isFirstPage}
          className={`flex w-64 py-4 px-10 justify-center items-center gap-3 rounded-lg ${
            // isFirstPage 
              // ? 'hidden ' 
               'bg-[#282828] text-[#BDBDBD] '
          } font-roboto text-xl font-normal capitalize`}
        >
         ← Previous 
        </button>
        
        <button
          onClick={goToNextPage}
          // disabled={isLastPage}
          className={`flex w-64 py-4 px-10 justify-center items-center gap-3  rounded-lg 
 
                hover bg-[#e1e500]
               text-black hover:bg-[#e1e500]
        font-roboto text-xl font-normal capitalize`}
        >
        Next
        </button>
    </div>
  );
};

export default NavigationButton;