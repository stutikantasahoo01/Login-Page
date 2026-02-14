import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
const Password = (props) => {
  const validation_message = {
    empty_id: "User ID is required",
    invalid_userid: "Please enter a valid User ID",
    empty_password: "Password is required",
    invalid_pass: "Please enter valid password",
  };
  const removeError = (message) => {
    props.setError((prevError) =>
      prevError.filter((error) => error !== message),
    );
  };

  const [PasswordFieldValidation, setPasswordFieldValidation] = useState(true);
  const [InputValidation, setInputValidation] = useState(true);
  const [ShowPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const passwordPattern = /^(?=.*[0-9]).{8,}$/;
  const UserIdPattern = /^[a-zA-Z0-9]+$/;
  const UserId = props.UserId;
  const setUserId = props.setUserId;
  const UserPassword = props.UserPassword;
  const setUserPassword = props.setUserPassword;

  const inputFildValidation = (value) => {
    if (!value) {
      setInputValidation(false);
      return false;
    }
    if (!UserIdPattern.test(value)) {
      setInputValidation(false);
      return false;
    }
    if (value.includes(" ")) {
      setInputValidation(false);
      return false;
    }

    if (value.length < 8) {
      setInputValidation(false);
      return false;
    }
    setInputValidation(true);
    return true;
  };

  const passwordFildValidation = (value) => {
    if (!value) {
      setPasswordFieldValidation(false);
      return false;
    }
    if (value.length < 8) {
      setPasswordFieldValidation(false);
      return false;
    }
    if (!passwordPattern.test(value)) {
      setPasswordFieldValidation(false);
      return false;
    }
    setPasswordFieldValidation(true);
    return true;
  };

  const UserIdValidation = () => {
    if (!UserId) {
      setInputValidation(false);
      removeError(validation_message.empty_id);
      return false;
    }
    if (!UserIdPattern.test(UserId)) {
      removeError(validation_message.invalid_userid);
      return false;
    }
    if (UserId.includes(" ")) {
      removeError(validation_message.invalid_userid);
      return false;
    }

    if (UserId.length < 8) {
      removeError(validation_message.invalid_userid);
      return false;
    }
    return true;
  };

  const UserPasswordValidation = () => {
    if (!UserPassword) {
      setPasswordFieldValidation(false);
      removeError(validation_message.empty_password);
      return false;
    }
    if (UserPassword.length < 8) {
      removeError(validation_message.invalid_pass);
      return false;
    }
    if (!passwordPattern.test(UserPassword)) {
      removeError(validation_message.invalid_pass);
      return false;
    }
    return true;
  };

  const userData = JSON.stringify({ UserID: UserId, Password: UserPassword });

  const ButtonHandler = (elem) => {
    elem.preventDefault();
    const isUserIdValid = UserIdValidation();
    const isPasswordValid = UserPasswordValidation();
    if (isUserIdValid && isPasswordValid) {
      localStorage.setItem("userdata", userData);
      alert("Login Successful");
      navigate("/Dashboard");
    } else {
      console.log("Login Failed ,Validation checks not meet");
    }

    console.log("Button Is Clicked");
  };

  return (
    <div className="flex flex-col mt-2">
      <div className="flex flex-col justify-between gap-5">
        <input
          className={`p-3 bg-[#f1f3f5] text-black font-normal rounded ${InputValidation === false ? "border-red-500 border-2" : "border-[#f1f3f5]"}`}
          type="text"
          value={UserId}
          onChange={(elem) => {
            const newValue = elem.target.value;
            setUserId(newValue);
            inputFildValidation(newValue);
          }}
          placeholder="User Id"
          id="User-Id"
        />
        <div
          className={`w-full relative rounded ${PasswordFieldValidation === false ? "border-red-500 border-2" : "border-[#f1f3f5]"}`}
        >
          <input
            className="p-3 bg-[#f1f3f5] text-black font-normal w-full"
            type={ShowPassword ? "text" : "password"}
            value={UserPassword}
            onChange={(el) => {
              const newValue = el.target.value;
              setUserPassword(newValue);
              passwordFildValidation(newValue);
            }}
            placeholder="Password"
            id="Password"
          />
          <button
            onClick={() => setShowPassword(!ShowPassword)}
            className="absolute right-3 top-3 "
          >
            {ShowPassword ? (
              <Eye strokeWidth={1.35} />
            ) : (
              <EyeOff strokeWidth={1.35} />
            )}
          </button>
        </div>

        <a className="text-blue-600 font-normal tracking-wide" href="#">
          Forgot User Id / Password ?
        </a>
      </div>
      <button
        onClick={(elem) => {
          ButtonHandler(elem);
        }}
        className="bg-[#007bff] text-white py-2 font-medium mb-5 mt-3 rounded transition-all border border-transparent duration-500 hover:bg-white hover:text-[#007bff] hover:border-blue-600 hover:border"
      >
        Login
      </button>
    </div>
  );
};

export default Password;
