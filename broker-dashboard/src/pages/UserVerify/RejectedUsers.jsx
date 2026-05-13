import React,{useState,useEffect} from "react"
import Table from "../../shared/Table"
import Calender from "../../assets/dashboard/calender.svg"
import Email from "../../assets/dashboard/email.svg"
import Phone from "../../assets/dashboard/phone.svg"
import Button from "../../shared/Button"
import axiosInstance from "../../services/axiosInstance"
import {useNavigate} from "react-router-dom"

const RejectedUsers = () => {    
    const navigate= useNavigate()
   const [users, setUsers] = useState([]);  
    const headers = [
        "Full Name/Client Code",
    "Registered Date",
    "E-mail Address",
    "Phone Number",
  "Action"]

  const fetchRejectedUsers = async () => {
    try {
      const response = await axiosInstance.get('/admin/getRejectedUsers');
   
      const rows = Array.isArray(response.data?.data) ? response.data.data : [];
      const mappedUsers = rows.map((item) => {
        let firstName = '';
        let lastName = '';

        if (item.clientType === "individual") {
          firstName = item.individualDetails?.firstName || '';
          lastName = item.individualDetails?.lastName || '';
        } else if (item.clientType === "mutual" || item.clientType === "corporate") {
          firstName = item.ownershipDetails?.firstName || '';
          lastName = item.ownershipDetails?.lastName || '';
        }

        return {
          fullName: `${firstName} ${lastName}`.trim(),
          ClientCode: item.panNumber || 'N/A',
          registeredDate: item.createdAt ? item.createdAt.split('T')[0] : 'N/A',
          email: item.email || 'N/A',
          phone: item.mobileNumber || 'N/A',
          _id: item._id || 'N/A', //
        };
      });

      setUsers(mappedUsers); 
    } catch (error) {
      console.error('Error fetching Rejected users:', error.response?.data?.message || error.message);
    }
  }

  
  useEffect(() => {
    fetchRejectedUsers();
  }, []);
  
    const renderRow = (row, index) => {
      return (
        <tr key={index} className="bg-[#0C0E12] text-white border-b-[.1px] border-[#828282]">
          <td className="py-4 px-6">
            <div className="flex flex-col">
              <span className="font-medium">{index + 1}. {row.fullName}</span>
              <span className="text-sm text-[#828282]">{row.ClientCode}</span>
            </div>
          </td>
    
          <td className="py-4 px-4">
            <div className="flex items-center gap-2 text-[#828282]">
              <img src={Calender} alt="Calendar icon" className="w-5 h-5" />
              <span>{row.registeredDate}</span>
            </div>
          </td>
    
          <td className="py-4 px-4">
            <div className="flex items-center gap-2 text-[#828282]">
              <img src={Email} alt="Email icon" className="w-5 h-5" />
              <span>{row.email}</span>
            </div>
          </td>
    
          <td className="py-4 px-4">
            <div className="flex items-center gap-2 text-[#828282]">
              <img src={Phone} alt="Phone icon" className="w-5 h-5" />
              <span>{row.phone}</span>
            </div>
          </td>

          <td>
            <div>
          <Button isCompleted={false}/>
            </div>
          </td>
          <td>

          <button onClick={() => navigate(`/admin/getUserBy/${row._id}`)} className="p-2 rounded py-5">
     ⁝
       </button>
          </td>
        </tr>
      );
    };

    return(
        <div className="flex  gap-4 w-full bg-slate-50 mt-4">
         <Table headers={headers} data={users} renderRow={renderRow}/>
        </div>
    )}

export default RejectedUsers