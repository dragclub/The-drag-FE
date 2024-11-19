import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import DragContext from "./Context/Dragcontext.js";
import dotenv from "dotenv";
import { Toaster } from "react-hot-toast";

dotenv.config();

const root = ReactDOM.createRoot(document.getElementById("root"));

// Set session state if not already set
if (sessionStorage.getItem("State") == null) {
  sessionStorage.setItem("State", "logout");
}

root.render(
  <React.StrictMode>
    <DragContext.Provider value={{}}>
      <App />
      <Toaster />
    </DragContext.Provider>
  </React.StrictMode>
);
