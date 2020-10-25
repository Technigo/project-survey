import React from "react";

import "./checkbox.css";

const checkboxArray = ["Moving", "Packing", "Cleaning"];

const Checkbox = () => {

  return (
    <section className="section-container">
      <p>I would like a price estimation for:</p>
      {checkboxArray.map(item => {
        return (
          <label htmlFor="checkbox">
            <input
              type="checkbox"
              id="checkbox"
              required
              value={item}
              onChange={event => onCheckBoxChange(event.target.value)}
            //here you add a new item to an array!
            // checked={}
            >
            </input>
            {item}
          </label>
        );
      })

      }
    </section>
  );

};

export default Checkbox;