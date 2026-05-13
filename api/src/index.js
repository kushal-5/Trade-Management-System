require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const stockRoutes = require("./routes/stockAnalysis/stockRoutes");
const marketRoutes = require("./routes/stockAnalysis/marketRoutes");
const watchlistRoutes = require("./routes/market/watchlist/watchlistRoutes");
const envConfig = require("./config/envConfig");
const app = express();
const bodyParser = require("body-parser");
const connectDB = require("./config/dbConfig");

const orderRoutes = require("./routes/order/orderRoutes");
const collateralRoutes = require("./routes/collateral/collateralRoutes");
const sharesRoutes = require("./routes/personalShares/sharesRoutes");
const { userAuthRoute, brokerRoute, userRoute } = require("./routes");

// Define the whitelist (comma-separated substrings matched against Origin)
let whitelist = process.env.ALLOWED_ORIGIN
  ? process.env.ALLOWED_ORIGIN.split(",").map((s) => s.trim())
  : [];

const isDevLocalOrigin = (origin) =>
  /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i.test(origin);

let corsOptions = {
  origin: function (origin, callback) {
    // curl / Postman often omit Origin
    if (!origin) return callback(null, true);

    // When ALLOWED_ORIGIN is unset, [] made every browser request fail CORS → Axios "Network Error"
    if (whitelist.length === 0) {
      if (isDevLocalOrigin(origin)) return callback(null, true);
      return callback(new Error("Not allowed by CORS"));
    }

    if (whitelist.some((allowed) => origin.includes(allowed))) {
      return callback(null, true);
    }
    callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
};

// Middleware
app.use(express.json());
app.use(cors(corsOptions)); // ✅ Apply CORS middleware
app.use(bodyParser.json()); // Ensure JSON parsing
app.use(express.urlencoded({ extended: true }));

app.use("/upload", express.static(path.join(__dirname, "upload"))); // Serve static files from the upload directory

// Routes
//order
app.use("/api/v1/auth", userAuthRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/order", orderRoutes);
app.use("/api/v1/collateral", collateralRoutes);
app.use("/api/v1/shares", sharesRoutes);
//market
app.use("/api/v1/market", marketRoutes);
app.use("/api/v1/watchlist", watchlistRoutes);
app.use("/api/v1/auth", userAuthRoute);
app.use("/api/v1/user", userRoute);

// Broker routes
app.use("/broker/v1/admin", brokerRoute);


// app.use("/test", router);

// Connect to MongoDB
connectDB();

// Start server
app.listen(envConfig.port, () => {
  console.log(`Server running on port ${envConfig.port}`);
  console.log("MAIN BACKEND FILE RUNNING");
});
//kushal