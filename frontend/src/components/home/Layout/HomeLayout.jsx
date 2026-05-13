import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
const HomeLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomeLayout;
