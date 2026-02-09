import { useState } from "react";
import { useNavigate } from "react-router-dom";

const OtpVerification = () => {
  const phoneNumber = "7608883110";
  const maskedNumber = phoneNumber.replace(/\d{5}$/, "XXXXX");
  const navigate = useNavigate();
  const OtpPattern = /^\d{4}$/;
  const [ValidateOtp, setValidateOtp] = useState("");
  const OtpValidation = () => {
    if (!ValidateOtp) {
      alert("Enter OTP first");
      return false;
    }
    if (!OtpPattern.test(ValidateOtp)) {
      alert("Password must contain 4 digits");
      return false;
    }
    if (ValidateOtp !== "1111") {
      alert("Enter the correct OTP");
      return false;
    }
    return true;
  };
  const ButtonHandler = (elem) => {
    elem.preventDefault();
    if (OtpValidation()) {
      alert("Login Successful");
      navigate("/Dashboard");
    } else {
      alert("Login Failed ! OTP incorrect");
    }
    console.log("Otp Button Clicked");
  };
  return (
    <div className="w-full sm:w-[60%] min-h-screen flex justify-center items-center ">
      <div className=" w-full h-screen sm:h-auto sm:min-h-86 max-w-2xl otp-container flex flex-col justify-center gap-2 sm:border-gray-100 sm:shadow-xl sm:border-2 sm:rounded p-4 ">
        <h2 className="text-blue-700 text-2xl font-medium ">Enter OTP</h2>
        <h3 className="text-black text-xs font-medium">
          Enter the OTP we sent to your Mobile Number
        </h3>
        <h4 className="text-black text-xs font-normal ">{maskedNumber}</h4>
        <input
          className="p-3 bg-[#f1f3f5] text-black font-normal"
          placeholder="Enter OTP Here"
          type="text"
          value={ValidateOtp}
          onChange={(el) => {
            setValidateOtp(el.target.value);
          }}
        />
        <div className="flex items-center justify-center gap-5">
          <button
            onClick={(elem) => {
              ButtonHandler(elem);
            }}
            className="bg-[#007bff] text-white py-2 px-3 font-medium mb-5 mt-3 rounded transition-all duration-500 hover:bg-white hover:text-[#007bff] border border-transparent hover:border-blue-600 hover:border"
          >
            Submit
          </button>
          <button className="bg-[#007bff] text-white py-2 px-3 font-medium mb-5 mt-3 rounded transition-all duration-500 hover:bg-white hover:text-[#007bff] hover:border-blue-600 hover:border">
            Resend OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
