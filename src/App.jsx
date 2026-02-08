import React from "react";
import Loginpage from "./Pages/Loginpage";
import { Routes, Route } from "react-router-dom";
import OtpVerification from "./Pages/OtpVerification";
import Dashborad from "./Pages/Dashboard";

const App = () => {
  return (
    <div
      // style={{ height: "600px", width: "600px", backgroundColor: "green" }}
      className="Form-Box min-h-screen w-full flex justify-center items-center"
    >
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/otp-verify" element={<OtpVerification />} />
        <Route path="/Dashboard" element={<Dashborad />} />
      </Routes>
    </div>
  );
};

export default App;
//
