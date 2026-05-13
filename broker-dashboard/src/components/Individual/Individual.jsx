import { useState } from "react";
import Button from "../../shared/Button";
import Indi1 from "./Indi1";
import Indi2 from "./Indi2";
import Indi3 from "./Indi3";
import Indi4 from "./Indi4";
import { useNavigate } from "react-router";
import axiosInstance from "../../services/axiosInstance";
import {ToastContainer, toast} from "react-toastify";


const Individual = ({ userData }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;
  const navigate = useNavigate();


  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleAccept = async () => {
    toast("Accepted!");
   
    const userId = userData._id; // the user ID from the userData prop

    await axiosInstance.put(`/admin/verifyUser/${userId}`);

    setTimeout(() => {
      navigate("/admin/home");
    }, 1000);
  
  };

  const handleReject = async () => {
    console.log("Rejected");
    const userId = userData._id; // the user ID from the userData prop
    toast("rejected!")
    await axiosInstance.put(`/admin/rejectUser/${userId}`);
 
    setTimeout(() => {
      navigate("/admin/home");
    }, 1000);
 
  };

  return (
    <div className="relative flex flex-col gap-6 w-[65rem] ">
      {/* Page content */}
      {currentPage === 1 && (
        <div className="rounded-lg text-white">
          <h2 className="font-semibold text-3xl">
            Individual Information & Details
          </h2>
          <Indi1 data={userData} />
        </div>
      )}
      {currentPage === 2 && (
        <div className=" rounded-lg text-white">
          <Indi2 data={userData} />
        </div>
      )}
      {currentPage === 3 && (
        <div className="rounded-lg text-white">
          <Indi3 data={userData} />
        </div>
      )}
      {currentPage === 4 && (
        <div className="rounded-lg text-white">
          <h3 className="text-3xl font-bold">Documents</h3>
          <Indi4 data={userData} />
        </div>
      )}

      {/* Navigation buttons */}

      {/* For last page - top right */}
           {/* For last page - top right */}
           {currentPage === totalPages ? (
  <>
    {/* Top: Accept/Reject (only if status is pending) */}
    {userData.status === "pending" && (
      <div className="absolute -top-[13rem] right-6 flex gap-4">
        <button
          className="bg-[#27AE60] text-white py-2 px-4 rounded hover:bg-[#219653]"
          onClick={handleAccept}
        >
          Accept
        </button>
        <button
          className="bg-[#EB5757] text-white py-2 px-4 rounded hover:bg-[#C0392B]"
          onClick={handleReject}
        >
          Reject
        </button>
      </div>
    )}
    <ToastContainer/>

    {/* Bottom: Prev + Done (if status is not pending) */}
    {(userData.status !== "pending" || currentPage > 1) && (
      <div className="absolute top-[30rem] right-16 flex gap-4">
        {currentPage > 1 && (
          <Button isNext={false} onClick={handlePrev} />
        )}
        {userData.status !== "pending" && (
          <button
            className="bg-[#9E77ED] text-white py-2 px-8 border-2 border-white rounded hover:bg-[#9E77ED]"
            onClick={() => navigate("/admin/home")}
          >
            Done
          </button>
        )}
      </div>
    )}
  </>
) : (
  // Non-last pages
  <div className="absolute top-[35rem] right-16 flex gap-4">
    {currentPage > 1 && (
      <Button isNext={false} onClick={handlePrev} />
    )}
    <Button isNext={true} onClick={handleNext} />
  </div>
)}

    </div>
  );
};

export default Individual;
