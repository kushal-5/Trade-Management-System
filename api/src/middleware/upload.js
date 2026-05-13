const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Create folder if it doesn't exist
const uploadPath = path.join(__dirname, "../upload");
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const fileExtension = path.extname(file.originalname);
    const baseName = path.basename(file.originalname, fileExtension);


    const shortName =  "-" + baseName.slice(0, 5) + Date.now();
    cb(null, `${shortName}${fileExtension}`);
  },
});


const fileFilter= (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only JPEG, PNG, and JPG images are allowed"));
  }
}

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Max 5MB
  fileFilter:fileFilter
});


module.exports = upload;
