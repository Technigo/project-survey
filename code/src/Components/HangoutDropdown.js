import React from "react";

const hangoutDropdown = ({ label, hangout, onHangoutChange }) => {
  return (
    <div className="dropdown-hangout">
      <label htmlFor="hangout">
        <h1 tabIndex="0" className="hangout-text">
          What group would you rather hang out with?
        </h1>
      </label>
      <select
        className="dropdown-menu"
        name={label}
        value={hangout}
        onChange={onHangoutChange}
      >
        <option value="" disabled>
          Select here
        </option>
        <option value="sumo wrestlers">sumo wrestlers</option>
        <option value="prisoners">prisoners</option>
        <option value="Taylor Swift fans">Taylor Swift fans</option>
        <option value="single mothers">single mothers</option>
      </select>
    </div>
  );
};

export default hangoutDropdown;
