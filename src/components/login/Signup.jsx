import React, {  useState } from 'react'
import "./Signup.css"

import { sendOTP } from '../../api/data';
import toast from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom";
export const Signup = ({ setResponse, close }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [name, setname] = useState("");
  // const [state, setstate] = useState("signup");
  // const [visible, setvisible] = useState(false);
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [clicked, setclicked] = useState(false);
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [errorMessageEmail, setErrorMessageEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate();

  // const [showPassword, setShowPassword] = useState(false);
  const [otp, setOTP] = useState("");
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const validateEmail = (email) => {
    // Basic email regex pattern
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };
  const handleEmail = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    if (validateEmail(inputEmail)) {
      setIsValidEmail(true);
      setErrorMessageEmail("");
    } else {
      setIsValidEmail(false);
      setErrorMessageEmail("Please enter a valid email address");
    }
  };

  const validatePassword = (password) => {
    const minLength = 8;
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/;
    const upperCase = /[A-Z]/;
    const lowerCase = /[a-z]/;
    const number = /[0-9]/;

    if (password.length < minLength) {
      return "Password must be at least 8 characters long";
    }
    if (!specialChar.test(password)) {
      return "Password must contain at least one special character";
    }
    if (!upperCase.test(password)) {
      return "Password must contain at least one uppercase letter";
    }
    if (!lowerCase.test(password)) {
      return "Password must contain at least one lowercase letter";
    }
    if (!number.test(password)) {
      return "Password must contain at least one number";
    }
    return "";
  };
  // useEffect(() => {
  //   const password = document.getElementById("password");
  //   if (visible) {
  //     password.setAttribute("type", "text");
  //   } else {
  //     password.setAttribute("type", "password");
  //   }
  // }, [visible]);
  // let name="";
  // let email="";
  // let password="";

  const handlelogin = async () => {
    const formdata = {
      email: document.getElementById("email-log").value,
      password: document.getElementById("password-log").value,
    };

    await fetch(`${process.env.REACT_APP_BASE_URL}v1/apis/login`, {
      credentials: "include",
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formdata),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((res) => {
        console.log("login response", res);
        if (res.success) {
          alert("You are Successfully Logged In");
          sessionStorage.setItem("State", "login");
          console.log(res.iscreator);
          setResponse(res.iscreator, sessionStorage.getItem("State"));
          sessionStorage.setItem("creator", res.iscreator);
          sessionStorage.setItem("email", res.email);
          navigate("/");
          window.location.reload();
        } else {
          alert(res.error);
        }
      });
  };
  const handleChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);

    const error = validatePassword(inputPassword);
    setErrorMessage(error);
    setIsValid(!error);
  };
  const OTPchangeHandler = (e) => {
    const OTP = e.target.value;
    setOTP(OTP);
  };
  const handlePassword = (e) => {
    if (e.target.value.length === 0 && !clicked) {
      alert(`Password Should include:
        * Password must be at least 8 characters long.
        * Password must contain at least one special character.
        * Password must contain at least one uppercase letter.
        * Password must contain at least one lowercase letter.
        * Password must contain at least one number.`);
      setclicked(true);
    }
  };

  const handlesignup = async (e) => {
    e.preventDefault();
    if (isValid && isValidEmail) {
      const formdata = {
        name,
        email,
        password,
        isChecked,
        otp,
      };
      console.log("formdata", formdata);
      await fetch(`${process.env.REACT_APP_BASE_URL}v1/apis/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formdata),
        credentials: "include",
      })
        .then((res) => res.json())
        .then((res) => {
          console.log("res", res);
          if (res.success) {
            sessionStorage.setItem("State", "login");
            setResponse(res.iscreator, sessionStorage.getItem("State"));
            sessionStorage.setItem("creator", res.iscreator);
            sessionStorage.setItem("email", res.email);
            toast.success("Sign Up Sucessfull!");
            //alert("Sign Up Sucessfull!");
            window.location.reload();
          } else {
            toast.error(res.message);
            //alert(res.message);
          }
        });
    } else if (isValidEmail) {
      alert(`Password is Invalid`);
    } else if (isValid) {
      alert("Email is Invalid");
    } else {
      alert(`Password and Email are Invalid`);
    }
  };
  const OTPHandler = async (e) => {
    e.preventDefault();
    try {
      if (email === "") {
        toast.error("Enter Email");
        return;
      }
      await sendOTP({ email });
    } catch (error) {}
  };
  return (
    <section className={`auth-wrapper ${isLogin ? "auth-active" : ""}`}>
      <div className="auth-form auth-signup">
        <header onClick={() => setIsLogin(false)}>Signup</header>
        <form onSubmit={(e) => handlesignup(e)}>
          <input
            type="text"
            placeholder="Full name"
            required
            name="name"
            id="name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <input
            placeholder="Email address"
            type="email"
            name="email"
            id="email-sign"
            value={email}
            onInput={(e) => {
              handleEmail(e);
            }}
            required
          />
          <div
            style={{
              fontSize: "12px",
              color: isValidEmail ? "green" : "red",
            }}
          >
            {isValidEmail ? "Email is valid" : errorMessageEmail}
          </div>
          <div className="password">
            <input
              type="password"
              placeholder="Password"
              id="password-sign"
              value={password}
              onClick={(e) => handlePassword(e)}
              onChange={handleChange}
              required
            />
            {/* <span
              onClick={() => {setShowPassword((prev) => !prev)
                setvisible(!visible);
              }}
              className=" eye absolute right-3 top-[38px] z-[10] cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span> */}
          </div>
          <div
            style={{
              fontSize: "12px",
              color: isValid ? "green" : "red",
            }}
          >
            {isValid ? "Password is valid" : errorMessage}
          </div>
          <div className="OTP">
            <input
              type="text"
              name=""
              id=""
              className="OTP-in"
              placeholder="Enter OTP"
              onChange={OTPchangeHandler}
            />
            <button className="OTP-btn" onClick={OTPHandler}>
              Get
            </button>
          </div>
          <div className="auth-checkbox">
            <input
              type="checkbox"
              id="auth-signupCheck"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="auth-signupCheck">Signup as a Brand</label>
          </div>
          <input type="submit" value="Signup" />
        </form>
      </div>

      <div className="auth-form auth-login">
        <header onClick={() => setIsLogin(true)}>Login</header>
        <form
          onSubmit={(e) => {
            handlelogin();
            e.preventDefault();
          }}
        >
          <input
            placeholder="Email address"
            required
            type="email"
            name="email"
            id="email-log"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            name="password"
            id="password-log"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link to={"/forgot"} className="forgot" onClick={() => close()}>
            Forgot password
          </Link>
          {/* <a href="#">Forgot password?</a> */}
          <input type="submit" value="Login" />
        </form>
      </div>
    </section>
  );
};
