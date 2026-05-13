import { Search } from "react-feather"
import notification from "../../assets/dashboard/notification.svg"
import Arrow from "../../assets/dashboard/arrow.svg"


const Header = ({ pageTitle = "Welcome To Swivt TMS"}) => {



  // Format the date to "Mon DD"
  const date = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
  })
  const formattedDate = date.replace(/,/g, "") // Remove commas from the date string

  return (
    <header className="p-4 py-8 flex justify-between items-center  h-16 bg-[#0C0E12]">
      <div className="flex items-center gap-4">
        <h1 className='text-[#BDBDBD] text-xl font-semibold ms-2 flex flex-row gap-6'>
          {pageTitle !== "Welcome To TMS" && (
            <span><img src={Arrow} alt="arrowBack" /></span>
          )}
          {pageTitle}
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="bg-[#1a1a1a] border border-gray-800 rounded-md py-2 pl-4 pr-10 w-[220px] text-sm focus:outline-none focus:ring-1 focus:ring-gray-700"
          />
          <Search className="absolute right-3 top-2.5 text-gray-400 w-4 h-4" />
        </div>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-xs">
            <img src={notification || "/placeholder.svg"} alt="Notification" className="w-4 h-4" />
          </div>
          <span className="text-xs text-gray-400">{formattedDate}</span>
          <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-xs">
   B
         </div>
        </div>
      </div>
    </header>
  )
}

export default Header
