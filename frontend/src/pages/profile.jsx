import ProfileCard from "../components/profile/profilecard";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GeneralPage from "../components/profile/general";
import ClientDetailPage from "../components/profile/details";
import Documents from "../components/profile/documents";
import uploadimg from "../assets/profileimg/upload.svg";
import { useCheckAuth } from "@/providers/CheckAuthProvider";

const Profile = () => {
  const { user, loading, isAuthenticated } = useCheckAuth();
  console.log(user);
  if (loading || !isAuthenticated) {
    return null;
  }
  console.log(user);
  const tabs = [
    { id: "general", label: "General" },
    { id: "clientDetails", label: "Client Details" },
    { id: "documents", label: "Documents" },
  ];

  const { pathId } = useParams(); // Get tab ID from the URL
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(pathId || "general");

  useEffect(() => {
    setActiveTab(pathId || "general");
  }, [pathId]);

  return (
    <div className="flex flex-col ms-16 mt-5">
      <div className="container  xl: lg:w-[1240px] md:w-[1210px] xl:h-[150px] lg:h-[200px] rounded-lg text-white bg-primary flex justify-between items-center p-6">
        <ProfileCard generalDetails={user} />
      </div>
      <div className="flex justify-between mt-4 items-center gap-5">
        <div>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => navigate(`/${tab.id}`)}
              className={`px-3 text-lg  transition ${
                activeTab === tab.id
                  ? "border-b-2 border-white "
                  : "text-gray-500 "
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {activeTab === "documents" && (
          <div>
            <button className="bg-seeWarnings p-2 flex gap-1 rounded-lg text-black">
              <img src={uploadimg} alt="Upload" />
              <h1>Upload File</h1>
            </button>
          </div>
        )}
      </div>
      <div className=" ">
        {activeTab === "general" && <GeneralPage generalDetails={user} />}
        {activeTab === "clientDetails" && (
          <ClientDetailPage personalDetails={user} />
        )}
        {activeTab === "documents" && <Documents />}
      </div>
    </div>
  );
};

export default Profile;
