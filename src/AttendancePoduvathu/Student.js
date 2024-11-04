import React, { useState } from "react";
import StudentActual from "./StudentActual";
import "./Student.css";

function Student(/*{ students, selectedClass }*/) {
  // const [attendances, setAttendances] = useState({});

  // const updateAttendance = (register, attendance) => {
  //   setAttendances((prevState) => ({
  //     ...prevState,
  //     [register]: attendance,
  //   }));
  // };

  // const handleAllPresent = () => {
  //   const updatedAttendances = {};
  //   students.forEach((student) => {
  //     updatedAttendances[student.register] = {
  //       present: true,
  //       absent: false,
  //       onDuty: false,
  //     };
  //   });
  //   setAttendances(updatedAttendances);
  // };

  // const handleLogAttendance = () => {
  //   const presentStudents = [];
  //   const absentStudents = [];
  //   const onDutyStudents = [];

  //   students.forEach((student) => {
  //     const attendance = attendances[student.register];
  //     if (attendance) {
  //       if (attendance.present) {
  //         presentStudents.push(student.register);
  //       } else if (attendance.absent) {
  //         absentStudents.push(student.register);
  //       } else if (attendance.onDuty) {
  //         onDutyStudents.push(student.register);
  //       }
  //     }
  //   });

  //   const totalMarkedStudents =
  //     presentStudents.length + absentStudents.length + onDutyStudents.length;
  //   if (totalMarkedStudents !== students.length) {
  //     alert("Complete Submission: Please mark attendance for all students.");
  //     return;
  //   }

  //   const attendanceData = {
  //     present: presentStudents,
  //     absent: absentStudents,
  //     onDuty: onDutyStudents,
  //     class_name: selectedClass,
  //   };

  //   fetch("/api/attendance", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(attendanceData),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Attendance data saved:", data);
  //     })
  //     .catch((error) => {
  //       console.error("Error saving attendance data:", error);
  //     });

  //   const resetAttendances = {};
  //   students.forEach((student) => {
  //     resetAttendances[student.register] = {
  //       present: false,
  //       absent: false,
  //       onDuty: false,
  //     };
  //   });
  //   setAttendances(resetAttendances);
  //   alert("Attendance Logged Successfully");
  //   const targetSection = document.querySelector(".nav-button");
  //   if (targetSection) {
  //     targetSection.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <div className="MainContainer">
      <div className="buttonContainer">
        <button /*onClick={handleAllPresent}*/ className="allPresentButton">
          All Present
        </button>
      </div>
      {/* {students.map((student) => ( */}
      <StudentActual

      // key={student.register}
      // student={student}
      // attendance={
      //   attendances[student.register] || {
      //     present: false,
      //     absent: false,
      //     onDuty: false,
      //   }
      // }
      // updateAttendance={updateAttendance}
      />
      <StudentActual></StudentActual>
      <StudentActual></StudentActual>
      <StudentActual></StudentActual>
      <StudentActual></StudentActual>
      {/* ))} */}
      <div className="buttonContainer">
        <button /*onClick={handleLogAttendance}*/ className="logButton">
          Log Attendance
        </button>
      </div>
    </div>
  );
}

export default Student;
