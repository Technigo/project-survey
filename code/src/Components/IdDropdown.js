import React from "react";

const IdDropdown = ({ label, identify, onIdentifyChange }) => {
  return (
    <div className="dropdown-identify">
      <label htmlFor="identify">
        <h1 tabIndex="0" className="identify-text">
          How do you identify yourself?
        </h1>
      </label>
      <select
        className="dropdown-menu"
        name={label}
        value={identify}
        onChange={onIdentifyChange}
      >
        <option value="" disabled>
          Select here
        </option>
        <option value="cutie-pie">cutie-pie</option>
        <option value="free spirit">free spirit</option>
        <option value="control freak">control freak</option>
        <option value="meat popsicle">meat popsicle</option>
      </select>
    </div>
  );
};

export default IdDropdown;
