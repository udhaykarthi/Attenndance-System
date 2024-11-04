import React from "react";
import "./AttendanceView.css";
import "bootstrap/dist/css/bootstrap.min.css";

function OneVal(/*{ fullval }*/) {
  return (
    <div className="oneVal">
      <p>22CS108</p>
    </div>
  );
}
//{fullval}

function AttendanceView(/*{ filteredData }*/) {
  return (
    <div className="containerAttend">
      <div className="Scrollable">
        {/* {filteredData.map((value, index) => ( */}
        <OneVal /*key={index} fullval={value}*/ />
        <OneVal></OneVal>
        <OneVal></OneVal>
        <OneVal></OneVal>
        <OneVal></OneVal>
        <OneVal></OneVal>
        <OneVal></OneVal>
        <OneVal></OneVal>
        <OneVal></OneVal>
        <OneVal></OneVal>

        {/* ))} */}
      </div>
    </div>
  );
}

export default AttendanceView;
