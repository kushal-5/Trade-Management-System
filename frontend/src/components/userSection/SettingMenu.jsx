import { useState } from "react";
import {
  ArrowRight,
  User,
  Shield,
  X,
  KeyRound,
  Palette,
  LineChart,
  Bell,
  LogOut,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import PasswordChangeForm from "./PasswordChangeForm";
import { userAuthServices } from "../../services/authService";


const SettingsMenu = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [isPasswordOpen, setIsPasswordOpen] = useState(false);

  if (!isOpen) return null;

  const handleOpenPasswordMenu = () => {
    setIsPasswordOpen(true);
  };

  const handleClosePasswordMenu = () => {
    setIsPasswordOpen(false);
  };


  const handleLogout = async () => {
    try {
      await userAuthServices.logout(); // Call logout API
      navigate("/signin"); // Redirect to login page
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <>
      {!isPasswordOpen ? (
        <div className="fixed right-0 top-0 h-screen w-[300px] bg-[#141414] shadow-lg overflow-hidden z-50">
          {/* Header */}
          <div className="flex items-center justify-between p-4 mb-6">
            {/* Back Button - Closes the User Menu */}
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              aria-label="Close User Menu"
            >
              <ArrowRight className="h-5 w-5 text-white" />
            </button>

            {/* X Button - Also Closes the Menu */}
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              aria-label="Close User Menu"
            >
              <X className="h-5 w-5 text-white" />
            </button>
          </div>

          {/* Profile Section */}
          <div className="px-4 space-y-3">
            <div className="text-lg font-medium text-white mb-2 px-4">Profile</div>
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-left bg-[#1D1D1D] rounded-lg transition-colors text-white">
              <User className="h-5 w-5" />
              <Link to={"/profile"}>Personal Information</Link>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-left bg-[#1D1D1D] rounded-lg transition-colors text-white">
              <Shield className="h-5 w-5" />
              <span>Two-factor Authentication</span>
            </button>
            <button
              className="w-full flex items-center space-x-3 px-4 py-3 text-left bg-[#1D1D1D] rounded-lg transition-colors text-white"
              onClick={handleOpenPasswordMenu}
            >
              <KeyRound className="h-5 w-5" />
              <span>Password</span>
            </button>
          </div>

          {/* Setup Section */}
          <div className="px-4 mt-6 space-y-3">
            <div className="text-lg font-medium mb-2 px-4">Setup</div>
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-left bg-[#1D1D1D] rounded-lg transition-colors text-white">
              <Palette className="h-5 w-5" />
              <span>Appearance</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-left bg-[#1D1D1D] rounded-lg transition-colors text-white">
              <LineChart className="h-5 w-5" />
              <span>Trading</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-left bg-[#1D1D1D] rounded-lg transition-colors text-white">
              <Bell className="h-5 w-5" />
              <span>Notifications</span>
            </button>
          </div>

          {/* Logout Button */}
          <div className="absolute bottom-8 left-4 right-4">
            <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-red-500 border border-red-500 hover:bg-red-500 hover:text-white">
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      ) : (
        <PasswordChangeForm onBack={handleClosePasswordMenu} />
      )}
    </>
  );
};

export default SettingsMenu;
