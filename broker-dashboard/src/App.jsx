import React from "react";
import "./App.css";
import Login from "./pages/LoginPage/Login";
import { Route, Routes, Navigate } from "react-router-dom";
import DashboardLayout from "./components/layout/DashboardLayout";
import Home from "./pages/DashboardPages/HomePage";
import PendingProfile from "./pages/PendingUser/PendingUserPage";
import TradeContent from "./pages/DashboardPages/TradePage";
import TradeUserContent from "./pages/DashboardPages/TradeUserPage";
import BrokerManagementContent from "./pages/DashboardPages/UserPage";
import StockCompanyManagement from "./pages/DashboardPages/StockCompanyManagement";
import FinanceContent from "./pages/DashboardPages/FinancePage";
import SettingContent from "./pages/DashboardPages/SettingPage";
import { AuthProvider } from "./provider/brokerAuthProvider";


const App = () => {
  return (
    <AuthProvider>

    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />

      <Route path="/admin" element={<DashboardLayout />}>
        <Route index element={<Navigate to="home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="trade" element={<TradeContent/>}/>
        <Route path="trademanagement" element={<TradeUserContent/>}/>
        <Route path="brokermanagement" element={<BrokerManagementContent/>}/>
        <Route path="stockmanagement" element={<StockCompanyManagement/>}/>
        <Route path="transactionSettlement" element={<FinanceContent/>}/>
        <Route path="settings" element={<SettingContent/>} />
        <Route path={'verifyUser/:id'} element={<PendingProfile/>}/>
        <Route path={"getUserBy/:id"} element={<PendingProfile/>}/>

      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
    </AuthProvider>
  );
};

export default App;
