import React from "react";
import "./Selector.css";

function Selector(/*{ selectedClass, onClassChange, onSubmit }*/) {
  return (
    <div className="selectorContainer">
      <form className="selectorForm" /*onSubmit={onSubmit}*/>
        <label htmlFor="Class">Select Class</label>
        <select name="Class" /*value={selectedClass} onChange={onClassChange}*/>
          <option value="3-CSE-A">3 CSE A</option>
          <option value="3-CSE-B">3 CSE B</option>
        </select>
        <button className="selectorButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Selector;
