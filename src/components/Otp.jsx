import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Otp = (props) => {
  const navigate = useNavigate();
  const UserIdPattern = /^[a-zA-Z0-9]+$/;
  const { UserId, setUserId } = props;
  const [UserFieldValidation, setUserFieldValidation] = useState(true);

  const userdata = JSON.stringify({ userId: UserId });

  const validationMessage = {
    empty_id: "Empty User ID",
    invalid_id: "Invalid User ID",
  };

  const removeError = (message) => {
    props.setError((prevError) => {
      const updatedError = prevError.filter(
        (error) => !message.includes(error),
      );
      return updatedError;
    });
  };
  const addError = (message) => {
    props.setError((prevError) => {
      if (prevError.includes(message)) return prevError;
      return [...prevError, message];
    });
    setTimeout(() => {
      removeError([message]);
    }, 2000);
  };

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
    const idError = [validationMessage.empty_id, validationMessage.invalid_id];
    if (!UserId) {
      setUserFieldValidation(false);
      addError(validationMessage.empty_id);
      return false;
    }
    if (!UserIdPattern.test(UserId)) {
      addError(validationMessage.invalid_id);
      return false;
    }
    if (UserId.includes(" ")) {
      addError(validationMessage.invalid_id);
      return false;
    }

    if (UserId.length < 8) {
      addError(validationMessage.invalid_id);
      return false;
    }
    removeError(idError);
    return true;
  };

  const ButtonHandler = (elem) => {
    elem.preventDefault();
    if (UserIdValidation()) {
      localStorage.setItem("userdata", userdata);
      navigate("/otp-verify");
    } else {
      console.log("Login Failed ,Validation checks not meet");
    }
  };

  return (
    <div className="flex flex-col mt-2">
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
        className="bg-[#007bff] text-white py-2 font-medium mb-5 mt-3 rounded transition-all border border-transparent duration-500 hover:bg-white hover:text-[#007bff] hover:border-blue-600 hover:border"
      >
        Login With OTP
      </button>
    </div>
  );
};

export default Otp;
