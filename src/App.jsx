import React, { Suspense, lazy, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ForgotPassword } from "./Pages/ForgotPassword.jsx";
import { UpdatePassword } from "./Pages/UpdatePassword.jsx";


const Promotions = lazy(() => import("./Pages/Promotions/Promotions.jsx"));
const Deals = lazy(() => import("./components/Deals/Deals.jsx"));

function App() {
  const [isblur, SetBlur] = useState(false);

  return (
    <div className={`container ${isblur ? "background" : ""}`}>
      {console.log(`${process.env.REACT_APP_BASE_URL}`)}
      <BrowserRouter>
        <Navbar SetBlur={SetBlur} />

        <Suspense
          fallback={
            <div className="loading">
              <div className="loader"></div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Promotions SetBlur={SetBlur} />} />
            <Route
              path="/creators"
              element={<Promotions SetBlur={SetBlur} />}
            />
            <Route path="/deals" element={<Deals SetBlur={SetBlur} />} />
            <Route path="/forgot" element={<ForgotPassword />} />
            <Route path="/update-password/:id" element={<UpdatePassword />} />
         
          </Routes>
        </Suspense>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
