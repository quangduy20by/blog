import { Link } from "react-router-dom";
import React, { useState } from "react";

import "./register.css";
import axios from "axios";

const Register =() => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async () => {
    try {
      const response = await axios.post(
        `https://61a9984633e9df0017ea3e6d.mockapi.io/api/v1/blog`,
        {
          userName,
          email,
          password,
        }
      );
      if (response) {
          console.log(response);
        const { status } = response;
        if (status === 201 || status === 200) {
          setPassword("");
          setUserName("");
          setEmail("");
          alert("Register success");
          return;
        }
        alert("Error");
      }
      alert("Error");
    } catch (error) {
      alert(error);
    }
  };

  const changeUsername = (e) => {
    const { value } = e?.target;
    setUserName(value);
  };

  const changePassword = (e) => {
    const { value } = e?.target;
    setPassword(value);
  };

  const changeEmail = (e) => {
    const { value } = e?.target;
    setEmail(value);
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <div className="registerForm">
        <label>UserName</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your usename..."
          value={userName}
          onChange={changeUsername}
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
          value={email}
          onChange={changeEmail}
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
          value={password}
          onChange={changePassword}
        />
        <button 
        className="registerButton" onClick={submit} type="submit">
          Register
        </button>
      </div>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
    </div>
  );
}
export default Register;
