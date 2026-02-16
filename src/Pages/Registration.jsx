import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const [CheckboxClicked, setCheckboxClicked] = useState(false);
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [Repassword, setRepassword] = useState("");
  const [Showpassword, setShowpassword] = useState(false);
  const [NameValidation, setNameValidation] = useState(true);
  const [PasswordValidation, setPasswordValidation] = useState(true);
  const [SecPasswordValidation, setSecPasswordValidation] = useState(true);
  const [Error, setError] = useState([]);

  const validation_message = {
    empty_name: "Empty user name",
    invalid_name: "Invalid user name",
    empty_pass: "Empty Password",
    invalid_pass: "Invalid Password",
    empty_conpass: "Empty confirm password",
    missmatch_pass: "Password do not match",
  };
  const removeError = (message) => {
    setError((prevError) => {
      const updatedError = prevError.filter(
        (error) => !message.includes(error),
      );
      return updatedError;
    });
  };

  const addError = (message) => {
    setError((prevError) => {
      if (prevError.includes(message)) return prevError;
      return [...prevError, message];
    });
    setTimeout(() => {
      removeError([message]);
    }, 2000);
  };

  const passwordPattern = /^(?=.*[0-9]).{8,}$/;
  const namePattern = /^[a-zA-Z ]+$/;

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

  const validateName = () => {
    const idError = [
      validation_message.empty_name,
      validation_message.invalid_name,
    ];
    const isValid = Name && namePattern.test(Name) && Name.length >= 4;
    setNameValidation(isValid);
    isValid ? removeError(idError) : addError(!Name ? idError[0] : idError[1]);
    return isValid;
  };

  const validatePassword = () => {
    const idError = [
      validation_message.empty_pass,
      validation_message.invalid_pass,
    ];
    const isValid =
      Password && passwordPattern.test(Password) && Password.length >= 8;
    setPasswordValidation(isValid);
    isValid
      ? removeError(idError)
      : addError(!Password ? idError[0] : idError[1]);
    return isValid;
  };

  const validateOtherPass = () => {
    const idError = [
      validation_message.empty_conpass,
      validation_message.missmatch_pass,
    ];
    const isValid = Password !== "" && Repassword === Password;
    setSecPasswordValidation(isValid);
    isValid
      ? removeError(idError)
      : addError(Repassword === "" ? idError[0] : idError[1]);
    return isValid;
  };

  const userData = JSON.stringify({ name: Name, password: Password });

  const ButtonHandler = (elem) => {
    elem.preventDefault();
    const isPasswordValid = validatePassword();
    const isNameValid = validateName();
    const isOtherPassValid = validateOtherPass();
    if (isPasswordValid && isNameValid && isOtherPassValid && CheckboxClicked) {
      localStorage.clear();
      localStorage.setItem("userdata", userData);
      alert("Login Successfull");
      setName("");
      setPassword("");
      setRepassword("");
      setCheckboxClicked(false);
      navigate("/Dashboard");
    } else {
      alert("Login Failed");
    }
  };

  return (
    <div className="w-full min-h-screen sm:max-w-2xl flex justify-center items-center  mx-auto">
      <div className="w-full h-full flex flex-col justify-center items-center p-4">
        <h1 className="text-2xl mt-7 mb-4 font-semibold text-center">
          Create Account
        </h1>
        <h2 className="text-xl mb-10 text-center">
          Enter Your Valid Credentials Here
        </h2>
        <div className="error-box flex flex-col w-[90%] sm:w-[65%] md:w-[65%] text-center gap-1">
          {Error.map((el, idx) => {
            return (
              <h1 key={idx} className="bg-[#f1f3f5] text-red-500">
                {el}
              </h1>
            );
          })}
        </div>
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
            <button
              onClick={() => setShowpassword(!Showpassword)}
              className="absolute right-3 top-2"
            >
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
            placeholder="Confirm password"
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
          <h2 className="text-black text-xl mb-3 text-center font-normal">
            Already have An account with us ?
            <Link to="/" className="text-blue-700 text-xl font-normal">
              Click Here To Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Registration;
