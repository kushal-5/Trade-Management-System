import React from "react";
import rectangleimg from "../../assets/profileimg/rectangle.svg";
import settingimg from "../../assets/profileimg/setting.svg";
const files = [
  {
    name: "Bank Management System",
    type: "Zip File",
    size: "4.57 MB",
    uploadDate: "11 Nov 2022",
  },
  {
    name: "Account Statement",
    type: "PDF File",
    size: "8.89 MB",
    uploadDate: "23 Aug 2023",
  },
];

const Documents = () => {
  return (
    <div className="flex mt-9">
      <div className="w-[1300px] ">
        <table className="w-full border-collapse bg-black2 text-white overflow-hidden">
          <thead>
            <tr className="text-left text-gray-300">
              <th className="p-4">FILE NAME</th>
              <th className="p-4">TYPE</th>
              <th className="p-4">SIZE</th>
              <th className="p-4">UPLOAD DATE</th>
              <th className="p-4">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file, index) => (
              <tr
                key={index}
                className="border-t border-black font-normal text-gray4 hover:bg-gray-800 "
              >
                <td className="p-4 flex items-center">
                  <span className="mr-3">
                    <img src={rectangleimg} />
                  </span>
                  {file.name}
                </td>
                <td className="p-3">{file.type}</td>
                <td className="p-3">{file.size}</td>
                <td className="p-3">{file.uploadDate}</td>
                <td className="p-3">
                  <button className="ms-4">
                    <img src={settingimg} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Documents;
