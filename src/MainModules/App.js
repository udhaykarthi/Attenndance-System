// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import AttendanceSystem from "./AttendanceSystem";
import ViewAttendance from "./ViewAttendance";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/attendance" element={<AttendanceSystem />} />
        <Route path="/view-attendance" element={<ViewAttendance />} />
      </Routes>
    </Router>
  );
}

export default App;
