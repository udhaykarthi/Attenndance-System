
import React, { useState } from "react";
import "./SelectorWithAttendance.css";

function SelectorWithAttendance({ onDataRetrieved }) {
  // const [formData, setFormData] = useState({
  //   class: "3-CSE-A",
  //   attendanceType: "present",
  //   date: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log("Submitting form data:", formData);
  
  //   try {
  //     const response = await fetch("http://localhost:5000/api/attend", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });
  
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  
  //     const data = await response.json();
  //     console.log("Received data:", data);
  //     onDataRetrieved(data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     alert("Error fetching data. Please try again.");
  //   }
  // };
  
  return (
    <div className="selectorContainer">
      <form className="selectorForm" /*onSubmit={handleSubmit}*/>
        <label htmlFor="class">Select Class</label>
        <select name="class" /*value={formData.class} onChange={handleChange}*/>
          <option value="3-CSE-A">3 CSE A</option>
          <option value="3-CSE-B">3 CSE B</option>
        </select>
        <label htmlFor="attendanceType">Select Attendance Type</label>
        <select
          name="attendanceType"
          // value={formData.attendanceType}
          // onChange={handleChange}
        >
          <option value="present">Present</option>
          <option value="absent">Absent</option>
          <option value="onDuty">On Duty</option>
        </select>
        <label htmlFor="date">Select Date</label>
        <input
          name="date"
          type="date"
          // value={formData.date}
          // onChange={handleChange}
          placeholder="yyyy-mm-dd"
        ></input>

        <button className="selectorButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SelectorWithAttendance;
