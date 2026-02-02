import { useNavigate } from "react-router-dom";

const Password = (props) => {
  // console.log(props);
  const navigate = useNavigate();
  const passwordPattern = /^(?=.*[0-9]).{8,}$/;
  const UserIdPattern = /^[a-zA-Z0-9]+$/;
  const UserId = props.UserId;
  const setUserId = props.setUserId;
  const UserPassword = props.UserPassword;
  const setUserPassword = props.setUserPassword;
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
        <input
          className="p-3 bg-amber-50 text-black font-medium"
          type="password"
          value={UserPassword}
          onChange={(el) => {
            setUserPassword(el.target.value);
          }}
          placeholder="Password"
          id="Password"
        />
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
