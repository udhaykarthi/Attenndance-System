import React from "react";
import "./loginNavigation.css";
import logo from "./Asserts/logoNEC.png";

function LoginNavigation() {
  return (
    <div className="SimpleNavigation">
      <div className="nav-left">
        <img src={logo} alt="Logo" className="logo" />
        <div className="nav-text">
          <h1>Nandha Engineering College</h1>
          <h2>Attendance System</h2>
          <h4>Computer Science Department</h4>
        </div>
      </div>
    </div>
  );
}

export default LoginNavigation;
