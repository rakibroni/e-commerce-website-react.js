import React from "react";
import { useState } from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });
  const [errors, setError] = useState({});
  const [valid, setValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    let validatorError = {};
    if (formData.username === "" || formData.username === null) {
      isValid = false;
      validatorError.username = "Username Required";
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
          <h1>Sign Up</h1>
          <div className="loginsignup-fields">
            {/* {!valid && (
              <span className="">
                {errors.username && <div>{errors.username}</div>}
                {errors.email && <div>{errors.email}</div>}
              </span>
            )} */}
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={(e) =>
                setFormData((prevState) => ({
                  ...prevState,
                  username: e.target.value,
                }))
              }
            />
            {errors.username && <span>{errors.username}</span>}
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
            <input type="password" name="password" placeholder="Password" />
          </div>
          <button type="submit">Submit</button>
          <p className="loginsignup-login">
            Already have an account? <span>Login here</span>
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
