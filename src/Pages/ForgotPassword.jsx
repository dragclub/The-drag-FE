import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { getresettoken } from "../api/data";
import "./ForgotPassword.css"
export const ForgotPassword = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");
 // const { loading } = useSelector((state) => state.auth);
 const [loading,setLoading] = useState(false)


  const submitHandler = (e) => {
    e.preventDefault();
    getresettoken({
      email,
      SetEmailSent: setEmailSent,
      setLoading: setLoading,
    });
  };
  return (
    <div className="reset-password-container">
      {loading ? (
        <div className="loading-container">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="form-containe">
          <h1 className="form-title">
            {!emailSent ? "Reset your Password" : "Check Your Email"}
          </h1>
          <p className="form-description">
            {!emailSent
              ? "Have no fear. We'll email you instructions to reset your password. If you don't have access to your email, we can try account recovery."
              : `We have sent the reset email to ${email}`}
          </p>
          <form onSubmit={submitHandler} className="res-form">
            {!emailSent && (
              <div className="form-div">
                <label className="form-label">
                  Email Address<span className="required">*</span>
                </label>
                <input
                  type="email"
                  required
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="form-input"
                />
              </div>
            )}
            <button type="submit" className="submit-button">
              {!emailSent ? "Reset Password" : "Resend Email"}
            </button>
          </form>
          <div className="back-to-login">
            <Link to={"/"}>
              <p className="back-link">
                <BiArrowBack /> Back to login
              </p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
