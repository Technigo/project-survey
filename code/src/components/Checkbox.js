import React from "react";

import "./form.css";
import "./checkbox.css";

const Checkbox = ({ isBoxChecked, onCheckBoxChange }) => {

  return (
    <section className="section-container">
      <h2 tabIndex="0">I would like a price estimation for:</h2>
      <label >
        <input
          tabIndex="0"
          type="checkbox"
          onChange={() => onCheckBoxChange("moving")}
          checked={isBoxChecked.includes("moving")}
        />
        Moving
      </label>
      <label>
        <input
          tabIndex="0"
          type="checkbox"
          onChange={() => onCheckBoxChange("packing")}
          checked={isBoxChecked.includes("packing")}
        />
        Packing
      </label>
      <label>
        <input
          tabIndex="0"
          type="checkbox"
          // onChange={(event) => onCheckBoxChange(event.target.checked)} - what is the difference?
          onChange={() => onCheckBoxChange("cleaning")}
          checked={isBoxChecked.includes("cleaning")}
        />
        Cleaning
      </label>
    </section >
  );
};

export default Checkbox;