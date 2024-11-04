import logo from "./Asserts/logoNEC.png";
import React from "react";
import "./Navigation.css";
import { useNavigate } from "react-router-dom";

function Navigation({ ButtonName, value }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const response = await fetch("http://localhost:5000/logout", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    if (result.success) {
      navigate("/");
    } else {
      alert("Logout failed!");
    }
  };

  return (
    <div className="Navigation">
      <div className="nav-left">
        <img src={logo} alt="Logo" className="logo" />
        <div className="nav-text">
          <h1>Nandha Engineering College</h1>
          <h2>Attendance System</h2>
          <h4>Computer Science Department</h4>
        </div>
      </div>
      <div className="nav-right">
        <button onClick={() => navigate(`/${value}`)} className="nav-button">
          {ButtonName}
        </button>
        <button onClick={handleLogout} className="nav-button">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navigation;
