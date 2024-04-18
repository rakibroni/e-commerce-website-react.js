import React, { useState } from "react";
import "./CSS/LoginSignup.css";

const Registration = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setError] = useState({});
  const [step, setStep] = useState(1);

  const handleNext = () => {
    // Validate current step before proceeding to the next step
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    // Go back to the previous step
    setStep(step - 1);
  };

  const validateStep = () => {
    let isValid = true;
    let validatorError = {};

    if (step === 1) {
      if (formData.username === "" || formData.username === null) {
        isValid = false;
        validatorError.username = "Username Required";
      }
      if (formData.email === "" || formData.email === null) {
        isValid = false;
        validatorError.email = "Email Required";
      }
    } else if (step === 2) {
      if (formData.password === "" || formData.password === null) {
        isValid = false;
        validatorError.password = "Password Required";
      }
    }

    setError(validatorError);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform final submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="loginsignup">
      <form onSubmit={handleSubmit}>
        <div className="loginsignup-container">
          <h1>Sign Up</h1>
          {step === 1 && (
            <div className="loginsignup-fields">
              <div className="input-container">
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
                {errors.username && (
                  <div className="error">{errors.username}</div>
                )}
              </div>
              <div className="input-container">
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
                {errors.email && <div className="error">{errors.email}</div>}
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="loginsignup-fields">
              <div className="input-container">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      password: e.target.value,
                    }))
                  }
                />
                {errors.password && (
                  <div className="error">{errors.password}</div>
                )}
              </div>
            </div>
          )}
          <div className="button-container">
            {step > 1 && <button onClick={handlePrev}>Previous</button>}
            {step < 2 ? (
              <button onClick={handleNext}>Next</button>
            ) : (
              <button type="submit">Submit</button>
            )}
          </div>
          <div className="loginsignup-agree">
            <p>By continuing, I agree to the terms of use & privacy policy</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Registration;
