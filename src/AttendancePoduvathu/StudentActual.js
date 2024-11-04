// StudentActual.js
import React from "react";
import "./StudentActual.css";

function StudentActual(/*{ student, attendance, updateAttendance }*/) {
  // const handleChange = (type) => {
  //   const newAttendance = {
  //     present: type === "present" ? !attendance.present : false,
  //     absent: type === "absent" ? !attendance.absent : false,
  //     onDuty: type === "onDuty" ? !attendance.onDuty : false,
  //   };
  //   updateAttendance(student.register, newAttendance);
  // };

  return (
    <div className="StudentActual">
      <div className="MarkerDetail">
        <p>22CS108</p>
      </div>
      <div className="MarkerButton">
        <input
          type="checkbox"
          // id={`present-${student.register}`}
          className="checkbox checkBoxPre"
          // checked={attendance.present}
          // onChange={() => handleChange("present")}
        />
        <label
          // htmlFor={`present-${student.register}`}
          // className={`checkboxLabel ${attendance.present ? "checked" : ""}`}
          className="checkboxLabel"
        >
          Present
        </label>

        <input
          type="checkbox"
          // id={`absent-${student.register}`}
          className="checkbox checkBoxAbs"
          // checked={attendance.absent}
          // onChange={() => handleChange("absent")}
        />
        <label
          // htmlFor={`absent-${student.register}`}
          // className={`checkboxLabel ${attendance.absent ? "checked" : ""}`}
          className="checkboxLabel"
        >
          Absent
        </label>

        <input
          type="checkbox"
          // id={`onDuty-${student.register}`}
          className="checkbox checkBoxOD"
          // checked={attendance.onDuty}
          // onChange={() => handleChange("onDuty")}
        />
        <label
          // htmlFor={`onDuty-${student.register}`}
          // className={`checkboxLabel ${attendance.onDuty ? "checked" : ""}`}
          className="checkboxLabel"
        >
          OnDuty
        </label>
      </div>
    </div>
  );
}

export default StudentActual;
