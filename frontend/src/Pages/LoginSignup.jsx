import React from "react";
import { useState } from "react";
import "./CSS/LoginSignup.css";
import { Link } from "react-router-dom";

const LoginSignup = () => {
  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });
  const [errors, setError] = useState({});
  const [valid, setValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    let validatorError = {};
    if (formData.password === "" || formData.password === null) {
      isValid = false;
      validatorError.password = "password Required";
    }
    if (formData.email === "" || formData.email === null) {
      isValid = false;
      validatorError.email = "Email Required";
    }
    setError(validatorError);
    setValid(isValid);
    console.log(valid);
  };

  return (
    <div className="loginsignup">
      <form onSubmit={handleSubmit}>
        <div className="loginsignup-container">
          <h1>Login</h1>
          <div className="loginsignup-fields">
            {/* {!valid && (
              <span className="">
                {errors.username && <div>{errors.username}</div>}
                {errors.email && <div>{errors.email}</div>}
              </span>
            )} */}

            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
            />
            {errors.email && <span>{errors.email}</span>}

            <input
              type="password"
              name="password"
              placeholder="password"
              value={formData.password}
              onChange={(e) =>
                setFormData((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }))
              }
            />
            {errors.password && <span>{errors.password}</span>}
          </div>
          <button type="submit">Submit</button>
          <p className="loginsignup-login">
            Dont have an account?{" "}
            <Link to="/registration">
              <span>Sign Up</span>
            </Link>
          </p>
          <div className="loginsignup-agree">
            <p>By continuing, I agree to the terms of use & privacy policy</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginSignup;
