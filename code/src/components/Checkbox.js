import React from "react";

import "./checkbox.css";

// const checkBoxArray = ["Moving", "Packing", "Cleaning"];

const Checkbox = ({ isBoxChecked, onCheckBoxChange }) => {
  // var checkBoxItem = null;

  return (
    <section className="section-container">
      <p>I would like a price estimation for:</p>
      <label htmlFor="moving">
        <input
          type="checkbox"
          id="moving"
          // onChange={(event) => onCheckBoxChange(event.target.checked)}
          onChange={() => onCheckBoxChange("Moving")}
          checked={isBoxChecked.includes("Moving")}
        >
        </input>
        Moving
      </label>
      <label htmlFor="packing">
        <input
          type="checkbox"
          id="packing"
          // onChange={(event) => onCheckBoxChange(event.target.checked)}
          onChange={() => onCheckBoxChange("Packing")}
          checked={isBoxChecked.includes("Packing")}
        >
        </input>
        Packing
      </label>
      <label htmlFor="cleaning">
        <input
          type="checkbox"
          id="cleaning"
          // onChange={(event) => onCheckBoxChange(event.target.checked)}
          onChange={() => onCheckBoxChange("Cleaning")}
          checked={isBoxChecked.includes("Cleaning")}
        >
        </input>
        Cleaning
      </label>

      {/* {checkBoxArray.map(item => {
        return (
          <label htmlFor={item} key={item}>
            <input
              type="checkbox"
              id={item}
              required
              onChange={(event) => onCheckBoxChange(event.target.checked)}
              //checking whether the item is present in the isBoxChecked array
              checked={isBoxChecked.includes(item)}
            >
            </input>
            {item}
          </label>
        );
      })} */}
    </section >
  );
};

export default Checkbox;