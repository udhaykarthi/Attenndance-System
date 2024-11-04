// Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../loginNavigation";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();
    if (result.success) {
      navigate("/attendance");
    } else {
      alert("Login failed!");
    }
  };

  return (
    <div className="Login">
      <Navigation />
      <FormBox
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

function FormBox({ email, setEmail, password, setPassword, handleSubmit }) {
  return (
    <div className="mainformDiv">
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <div className="inp">
          <label htmlFor="Name">Email</label>
          <input
            type="text"
            name="Name"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="inp">
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            name="Password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
