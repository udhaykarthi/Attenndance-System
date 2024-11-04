// AttendanceSystem.js
import React, { useState } from "react";
import Navigation from "../Navigation";
import Selector from "../AttendancePoduvathu/Selector";
import Student from "../AttendancePoduvathu/Student";
import "../Navigation.css";
import "../AttendancePoduvathu/Selector.css";
import "../AttendancePoduvathu/Student.css";
function AttendanceSystem() {
  // const [selectedClass, setSelectedClass] = useState("3-CSE-A");
  // const [students, setStudents] = useState([]);

  // const handleClassChange = (event) => {
  //   setSelectedClass(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   fetch(`/api/students/${selectedClass}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setStudents(data);
  //     })
  //     .catch((error) => console.error("Error fetching students:", error));
  // };

  return (
    <>
      <Navigation ButtonName="View Attendance" value="view-attendance" />
      <Selector
        // selectedClass={selectedClass}
        // onClassChange={handleClassChange}
        // onSubmit={handleSubmit}
      />
      <Student /*students={students} selectedClass={selectedClass} *//>
    </>
  );
}

export default AttendanceSystem;
