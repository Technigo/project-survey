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
        <option value="">&#9660; Select a pass</option>
        <option value="gold">Gold pass</option>
        <option value="silver">Silver pass</option>
        <option value="platinum">Platinum pass</option>
      </select>
    </div>
  );
};

export default SelectPage;
