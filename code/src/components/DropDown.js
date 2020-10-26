import React from 'react';

import "./dropdown.css";

// const dropDownOptionsArray = ["-", "0-10 km", "20-50 km", "50+ km"];

const Dropdown = ({ dropdownText, dropdownAnswer, onDistanceChange }) => {

  return (
    <section className="section-container">
      <div className="form-container">
        <label tabIndex="0" htmlFor="drop-down"><h2>{dropdownText}</h2>
          <select
            name="distances" //not sure if necessary
            onChange={(event) => onDistanceChange(event.target.value)}
            value={dropdownAnswer}
            required
            id="drop-down"
          >
            <option value="">-</option>
            <option tabIndex="0" value="0-10 km">0-10 km</option>
            <option tabIndex="0" value="20-50 km">20-50 km</option>
            <option tabIndex="0" value="50+ km">50+ km</option>

            {/* why "required" attribute doesn't work with <select> when I use map()? */}
            {/* {dropDownOptionsArray.map((option) => {
              return <option tabindex="0" key={option} value={option}>{option}</option>;
            })} */}
          </select>
        </label>
      </div>
    </section>
  );
};

export default Dropdown;