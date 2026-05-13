import Table from "../../shared/Table";
import Document from "../../assets/dashboard/document.svg";
import Action from "../../assets/dashboard/frame.svg";
import { useState } from "react";

const Indi4 = ({ data }) => {
  const [previewImage, setPreviewImage] = useState(null);

  const headers = ["File Name", "Type", "Size", "Upload Date", "Action"];

  const datas =
    data?.documents?.map((doc, index) => ({
      fileName: (
        <div className="flex items-center gap-2">
          <img src={Document} alt="Document" className="w-6 h-6" />
          <span>{doc.documentName}</span>
        </div>
      ),
      type: doc.type || "PDF",
      size: doc.size || "Unknown",
      uploadDate: new Date(
        doc.uploadedAt || data?.updatedAt
      ).toLocaleDateString(),
      action: (
        <div className="items-center cursor-pointer">
          <img
            onClick={() =>
              setPreviewImage("http://localhost:8000" + doc.documentURL)
            }
            src={Action}
            alt="Preview"
            className="w-6 h-6"
          />
        </div>
      ),
    })) || [];

  // Extract file extension to check if it's a PDF
  const isPDF = previewImage?.toLowerCase().endsWith(".pdf");

  return (
    <div>
      <Table headers={headers} data={datas} />

      {/* 🔍 Preview Modal */}
      {previewImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded shadow-xl max-w-[90%] max-h-[90%] overflow-hidden">
            {isPDF ? (
              <iframe
                src={previewImage}
                className="w-[80vw] h-[80vh]"
                title="PDF Preview"
              />
            ) : (
              <img
                src={previewImage}
                alt="Preview"
                className="max-w-full max-h-[80vh] object-contain"
              />
            )}
            <div className="text-center mt-4">
              <button
                onClick={() => setPreviewImage(null)}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Indi4;
