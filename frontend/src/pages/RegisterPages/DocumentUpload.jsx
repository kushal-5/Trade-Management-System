import React, { useState, useCallback } from "react";
import { X, CheckCircle, AlertCircle } from "lucide-react";
import Upload from "../../assets/images/registrationImages/upload.svg";
import { useFormContext } from "../../contexts/formProvider";
import { userAuthServices } from "../../services/authService"; // Import the service directly

const FileUpload = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const { formData, updateFileData, setFormData } = useFormContext();

  // Access the document fields from context
  const documentName = formData.Documents.documentName;
  const documentURL = formData.Documents.documentURL;

  const validateFile = (file) => {
    const validTypes = [
      "application/pdf",
      "image/jpeg",
      "image/png",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!validTypes.includes(file.type)) {
      return ` Invalid file type: ${file.name} (${file.type}). Allowed: PDF, Word, Images.`;
    }
    if (file.size > 1 * 1024 * 1024) {
      return ` File too large: ${file.name} exceeds 1MB.`;
    }
    return null;
  };

  const handleFileUpload = useCallback(
    async (uploadedFiles) => {
      setError("");

      for (const file of uploadedFiles) {
        const errorMessage = validateFile(file);
        if (errorMessage) {
          setError(errorMessage);
          continue;
        }

        try {
          await updateFileData(file);
        } catch (err) {
          setError("Something went wrong while uploading the document.");
          console.error("Upload error:", err);
        }
      }
    },
    [updateFileData]
  );

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      setIsDragging(false);

      const droppedFiles = Array.from(e.dataTransfer.files);
      handleFileUpload(droppedFiles);
    },
    [handleFileUpload]
  );

  const handleFileInput = useCallback(
    (e) => {
      const selectedFiles = Array.from(e.target.files);
      handleFileUpload(selectedFiles);
    },
    [handleFileUpload]
  );

  const removeFile = useCallback(() => {
    // Since you're only storing one file in the context, this just clears it
    setFormData({
      ...formData,
      Documents: { documentName: "", documentURL: "" },
    });
    // Update the context to clear the file
    // This would need a proper implementation in your context
  }, []);

  return (
    <div className="flex flex-col items-start justify-start">
      <h1 className="text-white font-roboto text-4xl font-medium mb-10">
        Upload Your Documents
      </h1>

      <div className="mb-20">
        <label
          htmlFor="file-upload"
          className="text-white font-roboto text-lg font-normal leading-10 "
        >
          Upload Your Citizenship Certificate
        </label>

        <div
          className={`w-[52rem] h-[14rem] border-2 border-dashed rounded-lg p-8 my-2 text-center ${
            isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300"
          }`}
          onDragEnter={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragOver={(e) => e.preventDefault()}
          onDragLeave={(e) => {
            e.preventDefault();
            setIsDragging(false);
          }}
          onDrop={handleDrop}
        >
          <img
            src={Upload}
            alt="Upload icon"
            className="w-full h-12 mx-auto mb-4 text-gray-400"
          />
          <p className="mb-2 text-lg">
            Drag & drop or
            <label className="mx-2 text-[#01BAEF] cursor-pointer hover:text-[#01BAEF]">
              Browse
              <input
                id="file-upload"
                type="file"
                className="hidden"
                onChange={handleFileInput}
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              />
            </label>
          </p>
          <p className="text-sm text-white">
            Please upload documents up to 1MB.
          </p>
        </div>
      </div>

      {error && (
        <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-lg flex items-center whitespace-pre-line">
          <AlertCircle className="w-5 h-5 mr-2" />
          {error}
        </div>
      )}

      {formData.Documents.documentURL && (
        <div className="mt-6">
          <h3 className="text-lg font-medium mb-4 text-white">
            Uploaded Files
          </h3>
          <div className="space-y-3">
            <p>{formData.Documents.documentName}</p>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <img
                  src={"http://localhost:8000" + formData.Documents.documentURL}
                  alt="Uploaded file"
                  className="w-10 h-10 rounded-md mr-3"
                />
              </div>
              <button
                onClick={removeFile}
                className="text-gray-500 hover:text-red-500"
                aria-label="Remove file"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
