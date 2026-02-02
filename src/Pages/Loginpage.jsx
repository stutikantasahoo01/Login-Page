import React, { useState } from "react";
import Password from "../components/Password";
import Otp from "../components/Otp";

const Loginpage = () => {
  const [UserPassword, setUserPassword] = useState("");
  const [UserId, setUserId] = useState("");
  const [ActiveTab, setActiveTab] = useState("Password");
  const ShowPassword = () => setActiveTab("Password");
  const ShowOtp = () => setActiveTab("Otp");
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <h1 className="text-2xl mt-3 mb-3 font-normal">Login to continue</h1>
      <h2 className="text-black text-xl font-light  mb-3">
        Don't have An account with us ?
        <a className="text-blue-700 font-normal" href="#">
          Click Here To Register
        </a>
      </h2>
      <div className="flex items-center gap-8">
        <button
          className="bg-amber-50 text-black py-2 px-2 font-normal mb-5 mt-3 "
          onClick={ShowPassword}
        >
          Login with password
        </button>
        <button
          className="bg-amber-50 text-black py-2 px-3 font-normal mb-5 mt-3 "
          onClick={ShowOtp}
        >
          Login with OTP
        </button>
      </div>
      <div className="w-[60%]">
        {ActiveTab === "Password" ? (
          <Password
            UserId={UserId}
            setUserId={setUserId}
            UserPassword={UserPassword}
            setUserPassword={setUserPassword}
          />
        ) : (
          <Otp UserId={UserId} setUserId={setUserId} />
        )}
      </div>

      <div className="flex flex-col items-center justify-center w-[60%]">
        <h3 className="text-xl font-semibold mb-4">Sign In Use</h3>
        <div className="flex items-center justify-between w-[60%] mt-4 mb-4">
          <a
            className="font-medium bg-amber-50 rounded-full w-7 h-7 overflow-hidden"
            href="https://www.facebook.com/"
          >
            <img
              className="object-cover"
              src="https://tse1.mm.bing.net/th/id/OIP.zOCcVTv6jKMsTbljKTNnZgHaHa?pid=Api&P=0&h=180"
              alt=""
            />
          </a>
          <a
            className="font-medium bg-amber-50 rounded-full w-7 h-7 overflow-hidden"
            href="https://www.google.com/"
          >
            <img
              className="object-cover"
              src="https://tse4.mm.bing.net/th/id/OIP.QySY28jpHzbggrzTd6a14QHaHa?pid=Api&P=0&h=180"
              alt=""
            />
          </a>
          <a
            className="font-medium bg-amber-50 rounded-full w-7 h-7 overflow-hidden"
            href="https://x.com/"
          >
            <img
              className="object-cover"
              src="https://tse1.mm.bing.net/th/id/OIP.sARywZlcPRTPijRbkbiwfAHaHa?pid=Api&P=0&h=180"
              alt=""
            />
          </a>
          <a
            className="font-medium bg-amber-50 rounded-full w-7 h-7 overflow-hidden"
            href="https://github.com/"
          >
            <img
              className="object-cover"
              src="https://tse3.mm.bing.net/th/id/OIP.eoZPB2gfGH-1ckaL_JSZdwHaHg?pid=Api&P=0&h=180"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
