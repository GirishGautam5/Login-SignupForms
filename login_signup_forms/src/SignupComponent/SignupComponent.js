import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signupstyles.css";
import Register from "../actions/useractions";

const SignupComponent = () => {
  const initialValues = { username: "", email: "", password: "" };
  const [formData, setformData] = useState(initialValues);
  const [errorMesg, seterrorMesg] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    seterrorMesg(validateForm(formData));

    setIsSubmit(true);
  };
  useEffect(() => {
    console.log(errorMesg);
    if (Object.keys(errorMesg).length === 0 && isSubmit) {
      navigate("/home");
      <Register name={formData.username} />;
    }
  }, [errorMesg]);
  const validateForm = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be more than 8 characters";
    } else if (values.password.length > 12) {
      errors.password = "Password cannot exceed more than 12 characters";
    }
    return errors;
  };

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <li>
            <h2>Create Account</h2>
          </li>
          <li>
            <label htmlFor="name">Name</label>
            <input
              type="name"
              name="username"
              id="name"
              value={formData.username}
              onChange={handleChange}
            ></input>
            <p className="error">{errorMesg.username}</p>
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            ></input>
            <p className="error">{errorMesg.email}</p>
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            ></input>
            <p className="error">{errorMesg.password}</p>
          </li>
          <li>
            <button type="submit" className="primary">
              Register
            </button>
          </li>
          <li>
            Already have an account? <Link to="/signin">Sign-in</Link>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default SignupComponent;
