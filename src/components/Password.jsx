import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
const Password = (props) => {
  // console.log(props);

  const [ShowPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const passwordPattern = /^(?=.*[0-9]).{8,}$/;
  const UserIdPattern = /^[a-zA-Z0-9]+$/;
  const UserId = props.UserId;
  const setUserId = props.setUserId;
  const UserPassword = props.UserPassword;
  const setUserPassword = props.setUserPassword;
  const showPassword = () => {
    setShowPassword(!ShowPassword);
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
  const UserPasswordValidation = () => {
    if (!UserPassword) {
      alert("Validation Failed,Password should not be empty");
      return false;
    }
    if (UserPassword.length < 8) {
      alert("Password should be greater than 8");
      return false;
    }
    if (!passwordPattern.test(UserPassword)) {
      return false;
    }
    return true;
  };
  const ButtonHandler = (elem) => {
    elem.preventDefault();
    if (UserIdValidation() && UserPasswordValidation()) {
      alert("Login Successful");
      navigate("/Dashboard");
    } else {
      console.log("Login Failed ,Validation checks not meet");
    }

    console.log("Button Is Clicked");
  };
  return (
    <div className="flex flex-col p-3 ">
      <div className="flex flex-col justify-between gap-3">
        <input
          className="p-3 bg-amber-50 text-black font-medium"
          type="text"
          value={UserId}
          onChange={(elem) => {
            setUserId(elem.target.value);
          }}
          placeholder="User Id"
          id="User-Id"
        />
        <div className="w-full relative">
          <input
            className="p-3 bg-amber-50 text-black font-medium w-full"
            type={ShowPassword ? "text" : "password"}
            value={UserPassword}
            onChange={(el) => {
              setUserPassword(el.target.value);
            }}
            placeholder="Password"
            id="Password"
          />
          <button
            onClick={() => {
              showPassword();
            }}
            className="absolute right-3 top-3"
          >
            {ShowPassword ? (
              <Eye strokeWidth={1.35} />
            ) : (
              <EyeOff strokeWidth={0.75} />
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
        className="bg-amber-50 text-black py-2 font-medium mb-5 mt-3"
      >
        Login
      </button>
    </div>
  );
};

export default Password;
