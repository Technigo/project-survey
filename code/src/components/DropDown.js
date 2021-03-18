import React from "react";

import "./DropDown.css";

export const DropDown = (props) => {
  const {
    yearsToMars,
    setYearsToMars,
    option1,
    option2,
    option3,
    option4,
    option5,
  } = props;
  const options = [option1, option2, option3, option4, option5];

  const handleChange = (e) => {
    setYearsToMars(e.target.value);
  };

  return (
      <form className="drop-down">
        <label htmlFor="yearsToMars">
          <h3>
            How many years do you think it will take for man to start
            settlements on Mars?
          </h3>
          <div className="drop-down__inner">
            <select
              id="yearsToMars"
              onChange={handleChange}
              value={yearsToMars}
              required
            >
              <option
                label="select option"
                value=""
                disabled
                defaultValue
              ></option>
              {options.map((year) => (
                <option label={year} value={year} key={year}></option>
              ))}
            </select>
          </div>
        </label>
      </form>
  );
};
