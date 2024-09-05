import { Outlet } from "react-router-dom";
import Navbar from "./compnents/Navbar";
import Footer from "./compnents/Footer";
import { useState } from "react";
import LoginPopup from "./compnents/LoginPopup";

export default function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="relative w-full ">
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <Navbar setShowLogin={setShowLogin} />
      <div className="w-4/5 m-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
