import SearchBar from "./SearchBar.jsx";
import LiveChart from "./LiveChart.jsx";
const MainContent = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* <SearchBar /> */}
      <div className="bg-black rounded-lg h-[calc(100dvh-100px)]">
        <LiveChart />
      </div>
    </div>
  );
};

export default MainContent;
