import InputLabel from "../../shared/InputLabel";
import Corporate from "../../components/Corporate/Corporate";
import Individual from "../../components/Individual/Individual";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../services/axiosInstance";


const PendingProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axiosInstance.get(`/admin/getUserBy/${id}`);

        setUser(res.data.data);
      } catch (err) {
        setError("User not found.");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) return <div className="text-white p-6">Loading...</div>;
  if (error) return <div className="text-red-500 p-6">{error}</div>;

  const clientType = user?.clientType;
  const panNumber = user?.panNumber || "-";
  const phone = user?.mobileNumber || "-";
  const email = user?.email || "-";
  const bankName = user?.bankingInfo[0]?.bankName || "-";
  const fullName =
    clientType === "individual"
      ? `${user?.individualDetails?.firstName || "-"} ${user?.individualDetails?.lastName || ""}`
      : `${user?.ownershipDetails?.firstName || "-"} ${user?.ownershipDetails?.lastName || ""}`;

  const companyName = user?.companyDetails?.companyName || "-";
  const companyType = user?.companyDetails?.companyType || "-";
  const regNum = user?.companyDetails?.companyRegistrationNum || "-";

  return (
    <div className="w-full bg-[#0C0E12]">
      <div className="bg-[#13161B] py-3">
        <h1 className="text-[#BDBDBD] text-xl font-semibold mx-14">Request View</h1>
      </div>

      <div>
        {clientType === "individual" ? (
          <div className="grid grid-cols-4 gap-4 px-10 mt-4">
            <InputLabel labelClass="text-xl text-white" label={fullName} placeholder={user._id} />
            <InputLabel label="Number" placeholder={phone} />
            <InputLabel label="Pan Number" placeholder={panNumber} />
            <InputLabel label="Email Address" placeholder={email} />
            <InputLabel label="Client Type" placeholder={clientType} />
            <InputLabel label="Bank Name" placeholder={bankName} />
            <div className="col-span-4 mt-4">
              <Individual userData={user} />
            </div>
          </div>
        ) : clientType === "corporate" || clientType === "mutual" ? (
          <div className="grid grid-cols-4 gap-4 px-10 mt-4">
            <InputLabel labelClass="text-xl text-white" label={fullName} placeholder={user._id} />
            <InputLabel label="Number" placeholder={phone} />
            <InputLabel label="Pan Number" placeholder={panNumber} />
            <InputLabel label="Email Address" placeholder={email} />
            <InputLabel label="Client Type" placeholder={clientType} />
            <InputLabel label="Company Name" placeholder={companyName} />
            <InputLabel label="Company Type" placeholder={companyType} />
            <InputLabel label="Company Registration Number" placeholder={regNum} />
            <InputLabel label="Bank Name" placeholder={bankName} />
            <div className="col-span-4 mt-4">
              <Corporate userData={user} />
            </div>
          </div>
        ) : (
          <div className="mt-4 p-4 bg-gray-600 rounded text-white">
            <p>Unknown client type. Please check your data.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PendingProfile;