import React from "react";
import "./select.css";

const SelectPage = ({ setLocation, location }) => {
  return (
    <div className="select-container">
      <h2>What ticket do you want?</h2>
      <select
        onChange={(event) => setLocation(event.target.value)}
        value={location}
      >
        <option value="">Select a pass</option>
        <option value="gold pass">Gold pass</option>
        <option value="silver pass">Silver pass</option>
        <option value="platinum pass">Platinum pass</option>
      </select>
    </div>
  );
};

export default SelectPage;
