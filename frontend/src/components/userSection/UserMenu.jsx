import { useEffect, useState, useRef } from "react";
import {
  User,
  Info,
  Settings,
  ArrowRight,
  Bell,
  Copy,
} from "lucide-react";
import SettingsMenu from "./SettingMenu";
import { useNavigate, useLocation } from "react-router-dom";

const UserMenu = ({ isOpen, onClose }) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const menuRef = useRef(null); 

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [onClose]);

  useEffect(() => {
    if (location.pathname === "/profile") {
      onClose();
    }
  }, [location.pathname, onClose]);

  if (!isOpen) return null;

  const handleCopyId = () => {
    navigator.clipboard.writeText("8788379");
  };

  const handleSettingsClick = () => {
    setIsSettingsOpen(true);
  };

  const handleCloseAll = () => {
    setIsSettingsOpen(false);
    onClose();
  };

  const handleInfoClick = () => {
    if (location.pathname === "/profile") {
      onClose();
    } else {
      navigate("/profile");
    }
  };

  return (
    <>
      {!isSettingsOpen && (
        <div
          ref={menuRef} po0i8765
          className="fixed right-0 top-0 h-screen w-[300px] bg-[#141414] shadow-lg overflow-hidden z-50"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 mb-6">
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              aria-label="Close User Menu"
            >
              <ArrowRight className="h-5 w-5 text-white" />
            </button>
            <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
              <Bell className="h-5 w-5 text-white" />
            </button>
          </div>

          {/* Profile */}
          <div className="px-6 pb-6 flex flex-col items-center border-b border-gray-800">
            <div className="h-12 w-12 bg-[#1D1D1D] rounded-full flex items-center justify-center mb-3">
              <User className="h-6 w-6 text-white" />
            </div>
            <div className="text-center">
              <div className="text-base font-medium text-white mb-1">
                ARMITA THAPA
              </div>
              <div className="text-sm text-white flex items-center gap-1">
                ID: 8788379
                <button
                  onClick={handleCopyId}
                  className="hover:bg-gray-800 rounded-full p-1 transition-colors"
                  aria-label="Copy ID"
                >
                  <Copy className="h-3 w-3 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="p-2">
            <button
              className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-800 rounded-lg transition-colors text-white"
              onClick={handleInfoClick}
            >
              <Info className="h-5 w-5" />
              <span>My Information</span>
            </button>

            <button
              className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-800 rounded-lg transition-colors text-white"
              onClick={handleSettingsClick}
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </button>
          </div>
        </div>
      )}

      {isSettingsOpen && (
        <SettingsMenu isOpen={isSettingsOpen} onClose={handleCloseAll} />
      )}
    </>
  );
};

export default UserMenu;
