import React from "react";

import "./Question3.css";

export const Question3 = ({ yearsToMars, setYearsToMars, valueArray }) => {

  const handleChange = (e) => {
    setYearsToMars(e.target.value);
  };

  return (
    <form className="drop-down">
      <label htmlFor="yearsToMars">
        <h3>
          How many years do you think it will take for man to start settlements
          on Mars?
        </h3>
        <div className="drop-down__inner">
          <select id="yearsToMars" onChange={handleChange} value={yearsToMars}>
            <option
              label="select option"
              value=""
              disabled
              defaultValue
            ></option>
            {valueArray.map((year) => (
              <option label={year} value={year} key={year}></option>
            ))}
          </select>
        </div>
      </label>
    </form>
  );
};
