import { useState } from "react";
import { useNavigate } from "react-router-dom";

const OtpVerification = () => {
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
    <div className="w-full h-full">
      <div className=" h-[80%] otp-container flex flex-col justify-center gap-2">
        <h2 className="text-black text-2xl font-medium ">Enter OTP</h2>
        <h3 className="text-black text-xs font-medium ">
          Enter the OTP we sent to your Mobile Number
        </h3>
        <h4 className="text-black text-xs font-normal ">+91 7608883110</h4>
        <input
          className="p-3 bg-white text-black font-normal"
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
            className="bg-amber-50 text-black px-3 py-2 font-medium mb-5 mt-3"
          >
            Submit
          </button>
          <button className="bg-amber-50 text-black  font-medium mb-5 mt-3 px-3 py-2">
            Resend OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
