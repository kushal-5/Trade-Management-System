import { useState, useEffect, useRef } from "react";
import { Plus, EllipsisVertical } from "lucide-react";
import { useMarket } from "../../contexts/market/MarketContext";
import Searchbar from "./searchbar";
import MarketWatchTable from "./watchlist.Table";

function MarketWatch() {
  const {
    fetchStockList,
    fetchWatchList,
    showListTitleStocks,
    handleDeleteWatchList,
    handleEditWatchList,
    selectedTitle,
    addOnWatchList,
    setSelectedTitle,
    watchList,
    setWatchList,
  } = useMarket();

  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ title: "" });
  const [visibleDropdown, setVisibleDropdown] = useState(null);
  const [editingTitle, setEditingTitle] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setVisibleDropdown(null); // Close dropdown if clicked outside
    }
  };
  useEffect(() => {
    fetchWatchList();
    fetchStockList();
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handlePlusClick = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.title.trim()) {
      try {
        await addOnWatchList(formData.title.trim());

        setFormData({ title: "" });
        setIsOpen(false);
      } catch (error) {
        console.error("Error saving watchlist:", error);
      }
    }
  };

  const handleRename = async (id) => {
    if (!newTitle.trim()) return;

    try {
      await handleEditWatchList(id, newTitle.trim());

      setWatchList((prev) =>
        prev.map((list) =>
          list._id === id ? { ...list, title: newTitle.trim() } : list
        )
      );

      setEditingTitle(null);
    } catch (error) {
      console.error("Error renaming watchlist:", error);
    }
  };

  console.log(newTitle);
  return (
    <div className="container ms-12 gap-6 flex flex-col">
      <div className="justify-center items-center flex mt-11">
        <h1 className="text-2xl font-semibold">MARKET WATCH</h1>
      </div>
      <div className="flex justify-between p-2">
        <div className="flex gap-2 items-center">
          {watchList?.map(
            (list) =>
              list && (
                <div
                  className={`${
                    selectedTitle === list.title
                      ? "bg-seeWarnings text-black flex gap-5"
                      : "border-white border-[1px] text-white flex gap-3"
                  } rounded-md p-2 relative`}
                  key={list._id}
                  onClick={() => showListTitleStocks(list.title)}
                >
                  {editingTitle === list._id ? (
                    <div className="flex gap-2 items-center">
                      <input
                        type="text"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        className="p-2 text-black rounded-lg"
                        autoFocus
                      />
                      <button
                        onClick={() => handleRename(list._id)}
                        className="bg-seeWarnings text-black px-2 py-1 rounded"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditingTitle(null)}
                        className="bg-gray-500 text-white px-2 py-1 rounded"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <>
                      <span ref={dropdownRef}>{list.title}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent the click event from propagating to the document
                          setSelectedTitle(list.title);
                          setVisibleDropdown(
                            visibleDropdown === list._id ? null : list._id
                          ); // Toggle dropdown visibility
                        }}
                      >
                        <EllipsisVertical />
                      </button>
                      {visibleDropdown === list._id && (
                        <div className="absolute border bg-black2 text-center flex flex-col left-20 rounded-md shadow-lg mt-9 w-40">
                          <button
                            onClick={() => {
                              setNewTitle(list.title);
                              setEditingTitle(list._id);
                              setVisibleDropdown(null);
                            }}
                            className="cursor-pointer text-white p-2 hover:bg-gray-800"
                          >
                            Rename
                          </button>
                          <button
                            onClick={() => handleDeleteWatchList(list._id)}
                            className="cursor-pointer text-red-600 p-2 hover:bg-gray-700"
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </div>
              )
          )}
          <Plus onClick={handlePlusClick} />
          {isOpen && (
            <form
              onSubmit={handleSubmit}
              className="flex bg-black2 w-72 rounded-md gap-2"
            >
              <input
                type="text"
                ref={inputRef}
                name="title"
                placeholder="Create New Market Watch"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="text-black rounded-lg w-60 p-2"
              />
              <button
                type="submit"
                className="bg-seeWarnings text-black p-2 rounded-lg"
              >
                Save
              </button>
            </form>
          )}
        </div>
        <Searchbar />
      </div>
      <MarketWatchTable />
    </div>
  );
}

export default MarketWatch;
