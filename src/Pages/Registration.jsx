import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const Registration = () => {
  const [CheckboxClicked, setCheckboxClicked] = useState(false);
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [Repassword, setRepassword] = useState("");
  const [Showpassword, setShowpassword] = useState(false);
  const [NameValidation, setNameValidation] = useState(true);
  const [PasswordValidation, setPasswordValidation] = useState(true);
  const [SecPasswordValidation, setSecPasswordValidation] = useState(true);

  const passwordPattern = /^(?=.*[0-9]).{8,}$/;
  const namePattern = /^[a-zA-Z ]+$/;

  const showPassword = () => {
    setShowpassword(!Showpassword);
  };

  const OtherPasswordFieldValidation = (val) => {
    if (!val) {
      setSecPasswordValidation(false);
      return false;
    }
    if (val !== Password) {
      setSecPasswordValidation(false);
      return false;
    }
    setSecPasswordValidation(true);
    return true;
  };
  const usernameFieldValidation = (val) => {
    if (!val) {
      setNameValidation(false);
      return false;
    }
    if (!namePattern.test(val)) {
      setNameValidation(false);
      return false;
    }
    if (val.length < 4) {
      setNameValidation(false);
      return false;
    }
    setNameValidation(true);
    return true;
  };
  const passwordFieldValidation = (val) => {
    if (!val) {
      setPasswordValidation(false);
      return false;
    }
    if (!passwordPattern.test(val)) {
      setPasswordValidation(false);
      return false;
    }
    if (val.length < 8) {
      setPasswordValidation(false);
      return false;
    }
    setPasswordValidation(true);

    return true;
  };
  const validatePassword = () => {
    if (!Password) {
      setPasswordValidation(false);
      return false;
    }
    if (!passwordPattern.test(Password)) {
      setPasswordValidation(false);
      return false;
    }
    if (Password.length < 8) {
      setPasswordValidation(false);
      return false;
    }
    setPasswordValidation(true);

    return true;
  };

  const validateName = () => {
    if (!Name) {
      return false;
    }
    if (!namePattern.test(Name)) {
      return false;
    }
    if (Name.length < 4) {
      return false;
    }
    return true;
  };

  const validateOtherPass = () => {
    if (!Repassword) {
      return false;
    }
    if (Repassword !== Password) {
      return false;
    }
    return true;
  };

  const ButtonHandler = (elem) => {
    elem.preventDefault();
    const isPasswordValid = validatePassword();
    const isNameValid = validateName();
    const isOtherPassValid = validateOtherPass();
    if (isPasswordValid && isNameValid && isOtherPassValid && CheckboxClicked) {
      alert("Login Successfull");
    } else {
      alert("Login Failed");
    }
    setName("");
    setPassword("");
    setRepassword("");
    setCheckboxClicked(false);
  };

  return (
    <div className="w-full min-h-screen sm:max-w-2xl flex justify-center items-center  ">
      <div className="w-full h-full flex flex-col justify-center items-center p-4">
        <h1 className="text-2xl mt-7 mb-4 font-sembold text-center">
          Create Account
        </h1>
        <h2 className="text-base mb-10 font-sembold text-center">
          Enter Your Valid Credentials Here
        </h2>
        <div className="flex flex-col w-full sm:w-[60%] gap-4">
          <input
            className={`px-3 py-2 bg-[#f1f3f5] text-black font-normal w-full rounded ${NameValidation ? "border-transparent " : "border-red-500 border-2"}`}
            type="text"
            value={Name}
            autoFocus
            onChange={(el) => {
              const value = el.target.value;
              setName(value);
              usernameFieldValidation(value);
            }}
            placeholder="Enter your name"
          />
          <div className="flex relative">
            <input
              value={Password}
              className={`px-3 py-2 bg-[#f1f3f5] text-black font-normal w-full rounded ${PasswordValidation ? "border-transparent " : "border-red-500 border-2"}`}
              type={Showpassword ? "text" : "password"}
              onChange={(el) => {
                const value = el.target.value;
                setPassword(value);
                passwordFieldValidation(value);
              }}
              placeholder="Enter password"
            />
            <button onClick={showPassword} className="absolute right-3 top-2">
              {Showpassword ? (
                <Eye strokeWidth={1.35} />
              ) : (
                <EyeOff strokeWidth={1.35} />
              )}
            </button>
          </div>

          <input
            value={Repassword}
            className={`px-3 py-2 bg-[#f1f3f5] text-black font-normal w-full rounded ${SecPasswordValidation ? "border-transparent " : "border-red-500 border-2"}`}
            onChange={(el) => {
              const value = el.target.value;
              setRepassword(value);
              OtherPasswordFieldValidation(value);
            }}
            type="password"
            placeholder="Enter password again"
          />
          <div className="flex items-center justify-baseline gap-0.5">
            <input
              checked={CheckboxClicked}
              onChange={(e) => {
                setCheckboxClicked(e.target.checked);
              }}
              type="checkbox"
            />
            <p className="text-black text-xs font-normal tracking-wide">
              agree with terms & conditions
            </p>
          </div>
          <button
            onClick={(el) => {
              ButtonHandler(el);
            }}
            className="bg-[#007bff] text-white py-2 font-medium mb-5 mt-3 rounded border border-transparent transition-all duration-500 hover:bg-white hover:text-[#007bff] hover:border-blue-600 hover:border"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
