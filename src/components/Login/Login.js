"use client";
import React, { useState } from "react";
import "./Login.css";
import email_icon from "../Assests/email.png";
import password_icon from "../Assests/lock.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setForData] = useState({
    email: "",
    password: "",
  });
  const handelChange = (e) => {
    const { name, value } = e.target;
    setForData({
      ...formData,
      [name]: value,
    });
  };
  const handelSubmit = async (e) => {
    e.preventDefault();


    try {
      console.log('Form Data:', formData); // Log the form data
      // Send login data to backend
      const response = await axios.post('http://localhost:5005/login', formData);

      if (response.data.success) {
        // Successful login
        // Show alert on successful login
        alert('Login successful!');

        // Redirect to dashboard or any other page
        navigate('/GetReg');
      } else {
        // Unsuccessful login
        // setError(response.data.error);
      }
    } catch (err) {
        console.error('Error:', err.response.data); // Log the error response details
      
        if (err.response.data.message) {
          // Show the specific error message from the server in the alert
          window.alert(err.response.data.message);
        } else {
          // If no specific message, show a generic error message
          window.alert('An error occurred');
        }
      }


    // try {
    //   const response = await axios.post(
    //     "http://localhost:5005/insert",
    //     formData
    //   );

    //   console.log(response.data);
      
    //   console.log("submitted", formData);
    //   if (
    //     formData.email === "hemanthrshemu@gmail.com" &&
    //     formData.password === "123"
    //   ) {
    //     alert("Login sucessfully");
    //     navigate("/");
    //   } else {
    //     alert("invalied data");
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <div className="log">
      {/* <img src={require("../Assests/bgm1 (2).jpg")} className='bgm' alt="" /> */}
      <div className="container">
        <div className="header">
          <div className="text">Login</div>
        </div>
        <form className="inputs" onSubmit={handelSubmit}>
          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handelChange}
              placeholder="email"
            />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handelChange}
              placeholder="Password"
            />
          </div>
          <div className="submit-con">
            <button className="btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
