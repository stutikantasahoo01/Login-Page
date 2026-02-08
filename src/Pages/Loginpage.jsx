import React, { useState } from "react";
import Password from "../components/Password";
import Otp from "../components/Otp";

const Loginpage = () => {
  const [Error, setError] = useState([]);
  const ActiveButtonStyle = "text-blue-600 border-blue-600 border-b-4";
  const inactiveButtonStyle = "text-black";
  const [UserPassword, setUserPassword] = useState("");
  const [UserId, setUserId] = useState("");
  const [ActiveTab, setActiveTab] = useState("Password");
  const ShowPassword = () => setActiveTab("Password");
  const ShowOtp = () => setActiveTab("Otp");
  return (
    <div className="flex flex-col items-center justify-center h-full w-full ">
      <h1 className="text-2xl mt-3 mb-3 font-sembold">Login to continue</h1>
      <h2 className="text-black text-lg mb-3 text-center font-normal">
        Don't have An account with us ?
        <a className="text-blue-700 text-lg font-normal" href="#">
          Click Here To Register
        </a>
      </h2>
      <div className="flex items-center justify-center gap-2 w-[65%]  mb-2 mt-5">
        <button
          className={` text-black text-lg py-2 px-2  w-1/2 ${ActiveTab === "Password" ? ActiveButtonStyle : inactiveButtonStyle}`}
          onClick={ShowPassword}
        >
          Login with password
        </button>
        <button
          className={`text-black text-lg py-2 px-2  w-1/2 ${ActiveTab === "Password" ? inactiveButtonStyle : ActiveButtonStyle}`}
          onClick={ShowOtp}
        >
          Login with OTP
        </button>
      </div>
      <div className="w-[70%]">
        {ActiveTab === "Password" ? (
          <Password
            UserId={UserId}
            setUserId={setUserId}
            UserPassword={UserPassword}
            setUserPassword={setUserPassword}
            setError={setError}
            Error={Error}
          />
        ) : (
          <Otp
            UserId={UserId}
            setUserId={setUserId}
            setError={setError}
            Error={Error}
          />
        )}
      </div>

      <div className="flex flex-col items-center justify-center w-[60%] p-3">
        <h3 className="text-xl font-semibold mb-4">Sign In Use</h3>
        <div className="flex items-center justify-between w-[30%] mt-1 mb-2 gap-1">
          <a
            className="font-medium  rounded w-7 h-7 overflow-hidden"
            href="https://www.facebook.com/"
          >
            <img
              className="object-cover w-full h-full"
              src="https://tse1.mm.bing.net/th/id/OIP.zOCcVTv6jKMsTbljKTNnZgHaHa?pid=Api&P=0&h=180"
              alt=""
            />
          </a>
          <a
            className="font-medium  rounded w-7 h-7 overflow-hidden"
            href="https://www.google.com/"
          >
            <img
              className="object-cover w-full h-full"
              src="https://imgs.search.brave.com/HwC9NgF0FaeZvZMCjLEDMeM0E5oWYJ3N8iIUyL6I_gE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTMvR29v/Z2xlLUxvZ28tUE5H/LUltYWdlLnBuZw"
              alt=""
            />
          </a>
          <a
            className="font-medium  rounded w-7 h-7 overflow-hidden"
            href="https://x.com/"
          >
            <img
              className="object-cover w-full h-full"
              src="https://imgs.search.brave.com/y2cZmXAJqMwlRDPMbe7-Z9C6XqIvkV0C9Dt9D9Q_kck/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L3R3aXR0ZXIteC1s/b2dvLXBuZy90d2l0/dGVyLXgtbG9nby1w/bmctOS5wbmc"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
{
  /* <a
            className="font-medium bg-amber-50 rounded-full w-7 h-7 overflow-hidden"
            href="https://github.com/"
          >
            <img
              className="object-cover"
              src="https://tse3.mm.bing.net/th/id/OIP.eoZPB2gfGH-1ckaL_JSZdwHaHg?pid=Api&P=0&h=180"
              alt=""
            />
          </a> */
}
