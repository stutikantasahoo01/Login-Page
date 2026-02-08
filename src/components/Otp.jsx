import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Otp = (props) => {
  const navigate = useNavigate();
  console.log(props);
  const UserIdPattern = /^[a-zA-Z0-9]+$/;
  const { UserId, setUserId } = props;
  const [UserFieldValidation, setUserFieldValidation] = useState(true);
  const UserIdValidationCheck = (value) => {
    if (!value) {
      setUserFieldValidation(false);
      return false;
    }
    if (!UserIdPattern.test(value)) {
      setUserFieldValidation(false);

      return false;
    }
    if (value.includes(" ")) {
      setUserFieldValidation(false);
      return false;
    }

    if (value.length < 8) {
      setUserFieldValidation(false);
      return false;
    }
    setUserFieldValidation(true);
    return true;
  };
  const UserIdValidation = () => {
    if (!UserId) {
      alert("Validation Failed,UserId should not be empty");
      return false;
    }
    if (!UserIdPattern.test(UserId)) {
      return false;
    }
    if (UserId.includes(" ")) {
      alert("User Id should not contain any white space");
      return false;
    }

    if (UserId.length < 8) {
      alert("User Id should be greater than 8");
      return false;
    }
    return true;
  };
  const ButtonHandler = (elem) => {
    elem.preventDefault();
    if (UserIdValidation()) {
      navigate("/otp-verify");
    } else {
      console.log("Login Failed ,Validation checks not meet");
    }
    console.log("Button Clicked");
  };
  return (
    <div className="flex flex-col w-full p-3">
      <div className="flex flex-col justify-between gap-3">
        <input
          className={`p-3 bg-[#f1f3f5] text-black font-normal rounded ${UserFieldValidation === false ? "border-red-500 border-2" : "border-[#f1f3f5]"}`}
          type="text"
          value={UserId}
          onChange={(elem) => {
            const newValue = elem.target.value;
            setUserId(newValue);
            UserIdValidationCheck(newValue);
          }}
          placeholder="User Id"
        />
        <a className="text-blue-600 font-normal tracking-wide" href="#">
          Forgot User Id/Password ?
        </a>
      </div>
      <button
        onClick={(elem) => {
          ButtonHandler(elem);
        }}
        className="bg-[#007bff] text-white py-2 font-medium mb-5 mt-3 rounded transition-all duration-500 hover:bg-white hover:text-[#007bff] hover:border-blue-600 hover:border"
      >
        Login With OTP
      </button>
    </div>
  );
};

export default Otp;
