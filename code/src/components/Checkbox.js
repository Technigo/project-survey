import React from "react";

import "./checkbox.css";

const Checkbox = ({ isBoxChecked, onCheckBoxChange }) => {

  return (
    <section className="section-container">
      <p tabIndex="0">I would like a price estimation for:</p>
      <label htmlFor="moving">
        <input
          tabIndex="0"
          type="checkbox"
          id="moving"
          onChange={() => onCheckBoxChange("moving")}
          checked={isBoxChecked.includes("moving")}
        >
        </input>
        Moving
      </label>
      <label htmlFor="packing">
        <input
          tabIndex="0"
          type="checkbox"
          id="packing"
          onChange={() => onCheckBoxChange("packing")}
          checked={isBoxChecked.includes("packing")}
        >
        </input>
        Packing
      </label>
      <label htmlFor="cleaning">
        <input
          tabIndex="0"
          type="checkbox"
          id="cleaning"
          // onChange={(event) => onCheckBoxChange(event.target.checked)} - what is the difference?
          onChange={() => onCheckBoxChange("cleaning")}
          checked={isBoxChecked.includes("cleaning")}
        >
        </input>
        Cleaning
      </label>
    </section >
  );
};

export default Checkbox;