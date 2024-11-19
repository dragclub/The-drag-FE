import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { resetPassword } from "../api/data";
import { BiArrowBack } from "react-icons/bi";
import "./UpdatePassword.css";
export const UpdatePassword = () => {
  const location = useLocation();
  //const dispatch = useDispatch();
   const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  //const { loading } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const changeHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const token = location.pathname.split("/").at(-1);
    
      resetPassword({
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        token,
        navigate,
        setLoading,
      }
      )
   
  };
  return (
    <div className="update-password-container">
      {loading ? (
        <div className="loading-container">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="form-container2">
          <h1 className="form-title">Choose new password</h1>
          <p className="form-description">
            Almost Done! Enter your new password, and you are all set.
          </p>
          <form onSubmit={submitHandler}>
            <label className="form-label">
              <p>
                New Password <sup className="required">*</sup>
              </p>
              <input
                type={showPassword ? "text" : "password"}
                required
                name="password"
                placeholder="Enter New Password"
                value={formData.password}
                onChange={changeHandler}
                className="form-input"
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="toggle-password"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} />
                ) : (
                  <AiOutlineEye fontSize={24} />
                )}
              </span>
            </label>
            <label className="form-label">
              <p>
                Confirm New Password <sup className="required">*</sup>
              </p>
              <input
                type={showConfirmPassword ? "text" : "password"}
                required
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={changeHandler}
                className="form-input"
              />
              <span
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="toggle-password"
              >
                {showConfirmPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} />
                ) : (
                  <AiOutlineEye fontSize={24} />
                )}
              </span>
            </label>
            <button type="submit" className="submit-button">
              Reset password
            </button>
          </form>
          <div className="back-to-login">
            <Link to="/">
              <p>
                <BiArrowBack /> Back to login
              </p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
