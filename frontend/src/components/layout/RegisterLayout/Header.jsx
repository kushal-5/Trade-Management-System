import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-11/12 overflow-hidden h-auto">
      <div className="absolute right-12 top-12">
        <button className="w-80 h-16 bg-[#333333] text-[#BDBDBD] font-roboto text-lg rounded-lg flex items-center justify-center hover:bg-gray-700 transition">
          I have an account!
          <Link to="/signin" className="text-[#F1F510] hover:underline ms-2">
            Log In
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
