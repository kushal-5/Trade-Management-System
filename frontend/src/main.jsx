import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import "@fontsource/poppins";
import AppProvider from "./providers/AppProvider.jsx";
import "nepali-datepicker-reactjs/dist/index.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppProvider>
      <App />
      <ToastContainer position="top-right" autoClose={3000} />
    </AppProvider>
  </BrowserRouter>
);