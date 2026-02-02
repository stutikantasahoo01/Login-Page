import React from "react";
import Loginpage from "./Pages/Loginpage";
import { Routes, Route } from "react-router-dom";
import OtpVerification from "./Pages/OtpVerification";
import Dashborad from "./Pages/Dashboard";

const App = () => {
  return (
    <div className="Form-Box bg-amber-100 p-4 w-[40%] h-[80%]">
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/otp-verify" element={<OtpVerification />} />
        <Route path="/Dashboard" element={<Dashborad />} />
      </Routes>
    </div>
  );
};

export default App;
