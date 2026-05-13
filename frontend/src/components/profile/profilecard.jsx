import profileimg from "../../assets/profileimg/profile.png";
import { MapPin } from "lucide-react";

function ProfileCard({ generalDetails }) {
  const user = generalDetails;
  const individual = user?.individualDetails;
  const address = user?.addresses[0];
  const collateral = user?.collateral;
  const lastLogin = user?.lastLogin;
  return (
    <>
      {/* Left Section */}
      <div className="flex items-center gap-5">
        <div className="relative">
          <img
            className="h-[120px] w-[128px] rounded-full object-cover"
            src={profileimg}
            alt="Profile"
          />
          <span className="absolute bottom-1 right-1 bg-white p-1 rounded-full">
            <img src="/camera-icon.png" alt="Edit" className="w-6 h-6" />
          </span>
        </div>
        <div>
          <h1 className="text-3xl font-medium">
            {individual?.firstName} {individual?.lastName}
          </h1>
          <div className="flex items-center gap-2 mt-1">
            <MapPin className="text-yellow-400" />
            <h2 className="text-md  font-light">
              {address?.municipality}-{address?.wardNum},
              {user?.individualDetails?.nationality}
            </h2>
          </div>
          <p className="text-md mt-1 font-light flex items-center">
            User Status:
            <span className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm ml-2">
              Online
            </span>
          </p>
        </div>
      </div>
      {/* Right Section */}
      <div className="flex flex-col justify-between h-full items-end pr-6">
        <div className="flex gap-16 mt-3">
          <div className="text-right">
            <h1 className="text-xl font-semibold">
              NRP <span>{}</span>
            </h1>
            <p className="text-sm text-gray-200">Total Collateral</p>
          </div>
          <div className="text-right">
            <h1 className="text-xl font-semibold">
              NRP <span>{}</span>
            </h1>
            <p className="text-sm text-gray-200">Utilized Collateral</p>
          </div>
        </div>
        <div className="text-right text-gray-300 text-sm mt-auto">
          <p className="text-black">Last Logged In</p>
          <p className="p-1">{}</p>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
