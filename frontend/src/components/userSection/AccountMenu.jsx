import { X, Plus } from "lucide-react";
import Nepal from "@/assets/nepal.png";

const AccountsMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed right-0 top-0 h-screen w-[300px] bg-black shadow-lg overflow-hidden z-50">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <h2 className="text-white text-base">Accounts</h2>
        <button
          onClick={onClose}
          className="hover:bg-[#1D1D1D] p-2 transition-colors"
          aria-label="Close"
        >
          <X className="h-4 w-4 text-white" />
        </button>
      </div>

      {/* Account Card */}
      <div className="px-4 mt-2">
        <div className="bg-[#1D1D1D] p-4 rounded-lg">
          <div className="flex items-center gap-3 mb-3">
            <img
              src={Nepal}
              alt="Nepal Flag"
              className="w-6 h-6 rounded-full"
            />
            <div>
              <div className="text-white text-sm">NRP Account</div>
              <div className="text-gray-400 text-xs">NPR 10,000.00</div>
            </div>
          </div>
          <button className="w-full bg-[#F1F510] text-black py-2 rounded text-sm font-medium hover:bg-yellow-400 transition-colors">
            Deposit
          </button>
        </div>
      </div>

      {/* Add Account Button */}
      <div className="px-4 mt-4">
        <button className="w-full flex items-center gap-2 text-white text-sm p-4 hover:bg-[#1D1D1D] transition-colors">
          <Plus className="h-4 w-4" />
          <span>Add Account</span>
        </button>
      </div>
    </div>
  );
};

export default AccountsMenu;
