require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

const envConfig = require("./config/envConfig");
const connectDB = require("./config/dbConfig");

// Routes
const stockRoutes = require("./routes/stockAnalysis/stockRoutes");
const marketRoutes = require("./routes/stockAnalysis/marketRoutes");
const watchlistRoutes = require("./routes/market/watchlist/watchlistRoutes");
const orderRoutes = require("./routes/order/orderRoutes");
const collateralRoutes = require("./routes/collateral/collateralRoutes");
const sharesRoutes = require("./routes/personalShares/sharesRoutes");
const { userAuthRoute, brokerRoute, userRoute } = require("./routes");

const app = express();

/* ---------------------------
   DB CONNECTION
----------------------------*/
connectDB();

/* ---------------------------
   CORS CONFIG (FIXED)
----------------------------*/
const whitelist = process.env.ALLOWED_ORIGIN
  ? process.env.ALLOWED_ORIGIN.split(",").map((s) => s.trim())
  : [];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow Postman / server-to-server requests
    if (!origin) return callback(null, true);

    // If whitelist not set → allow all (safe fallback for debugging)
    if (whitelist.length === 0) {
      return callback(null, true);
    }

    // Strict match
    if (whitelist.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

/* ---------------------------
   MIDDLEWARE
----------------------------*/
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

/* ---------------------------
   STATIC FILES
----------------------------*/
app.use("/upload", express.static(path.join(__dirname, "upload")));

/* ---------------------------
   ROUTES
----------------------------*/

// Auth + User
app.use("/api/v1/auth", userAuthRoute);
app.use("/api/v1/user", userRoute);

// Order system
app.use("/api/v1/order", orderRoutes);
app.use("/api/v1/collateral", collateralRoutes);
app.use("/api/v1/shares", sharesRoutes);

// Market
app.use("/api/v1/market", marketRoutes);
app.use("/api/v1/watchlist", watchlistRoutes);

// Stock analysis
app.use("/api/v1/stock", stockRoutes);

// Broker
app.use("/broker/v1/admin", brokerRoute);

/* ---------------------------
   HEALTH CHECK ROUTE
----------------------------*/
app.get("/", (req, res) => {
  res.send("TMS API is running...");
});

/* ---------------------------
   START SERVER
----------------------------*/
const PORT = envConfig.port || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log("MAIN BACKEND FILE RUNNING");
});