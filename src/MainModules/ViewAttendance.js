import React, { useState } from "react";
import Navigation from "../Navigation";
import SelectorWithAttendance from "../AttendanceParpathu/SelectorWithAttendance";
import AttendanceView from "../AttendanceParpathu/AttendanceView";
import "../Navigation.css";
import "../AttendanceParpathu/SelectorWithAttendance.css";
import "../AttendanceParpathu/AttendanceView.css";
function ViewAttendance() {
  // const [filteredData, setFilteredData] = useState([]);

  // const handleDataRetrieved = (data) => {
  //   setFilteredData(data);
  // };

  return (
    <>
      <Navigation ButtonName="Submit Attendance" value="attendance" />
      <SelectorWithAttendance /*onDataRetrieved={handleDataRetrieved} *//>
      <AttendanceView /*filteredData={filteredData}*/ />
    </>
  );
}

export default ViewAttendance;
