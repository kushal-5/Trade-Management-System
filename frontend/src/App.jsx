import React from "react";
import Dashboard from "@/pages/Dashboard"; // Import the Dashboard component
import "./App.css";

import Profile from "./pages/profile.jsx";
import DashboardLayout from "./components/layout/DashboardLayout.jsx";
import Information from "./components/information/Information.jsx";
import History from "./components/history/History.jsx";

import { BrowserRouter, Route, Routes, Navigate, Link } from "react-router-dom";

import SignInPage from "./pages/SignInPages/SignIn";
import ForgotPassword from "./pages/SignInPages/ForgetPassword";
import GetOTP from "./pages/SignInPages/GetOtp";
import ResetPassword from "./pages/SignInPages/ResetPassword";
import ResetSuccess from "./pages/SignInPages/ResetSuccess";
import Sidebar from "./components/layout/RegisterLayout/Sidebar.jsx";
import TradeData from "./components/ui/tradeInput/TradeData.jsx";
import TableWithPagination from "./components/ui/tradeInput/TradeHistory.jsx";
import DailyTrade from "./pages/DailyTradeBook.jsx";
import BuySell from "./pages/buySell.jsx";
import HistoricOrder from "./components/ui/dailyTrade/HistoricOrderBook.jsx";

import MarketWatch from "./components/market/marketwatch.jsx";
import MarketDepth from "./components/market/marketDepth.jsx";
import DailyOrderBook from "./components/ui/dailyTrade/OpenTrade.jsx";
import CollateralPage from "./pages/collateral.jsx";
import HistoricOrders from "./components/ui/dailyTrade/historicOrder.jsx";
import SimpleForm from "./components/ui/dailyTrade/test.jsx";
import HomeLayout from "./components/home/Layout/HomeLayout.jsx";

import Home from "./pages/Home.jsx";
import Terms from "./pages/Terms.jsx";
import FAQ from "./pages/FAQ.jsx";
import Privacy from "./pages/Privacy.jsx";
function App() {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/get-otp" element={<GetOTP />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/reset-success" element={<ResetSuccess />} />

      {/*Register Route */}
      <Route path="/register" element={<Sidebar />} />

      <Route element={<HomeLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Route>

      <Route element={<DashboardLayout />}>
        <Route path="/profile" element={<Navigate to="/general" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/:pathId" element={<Profile />} />
        <Route path="/trade_data" element={<TradeData />} />
        <Route path="/historic_trade" element={<TableWithPagination />} />
        <Route path="/information" element={<Information />} />
        <Route path="/history" element={<History />} />

        <Route path="/trade" element={<Navigate to="/daily_order" />} />
        <Route path="/market-watch" element={<MarketWatch />} />
        <Route path="/market-depth" element={<MarketDepth />} />
        <Route path="/daily_order" element={<DailyTrade />} />
        <Route path="collateral" element={<CollateralPage />} />
        <Route path="/orderentry" element={<BuySell />} />
        <Route path="/historic_order" element={<HistoricOrders />} />
        <Route path="test" element={<SimpleForm />} />
      </Route>
      {/* Catch-All Route (404 Handling) */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
