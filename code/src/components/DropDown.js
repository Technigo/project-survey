import React from "react";
import "./DropDown.css";

export const DropDown = (props) => {
  const { years, setYears } = props;
  const options = [
    props.option1,
    props.option2,
    props.option3,
    props.option4,
    props.option5,
  ];

  return (
    <>
      <div className="drop-down__inner">
        <label htmlFor="yearsToMars">
          <h3>
            How many years do you think it will take for man to start
            settlements on Mars?
          </h3>
          <div className="drop-down__inner-select">
            <select
              id="yearsToMars"
              onChange={(event) => setYears(event.target.value)}
              value={years}
              required
            >
              <option label="select option" value="" disabled defaultValue></option>
              {options.map((year) => (
                <option label={year} value={year} key={year}>
                </option>
              ))}
            </select>
          </div>
        </label>
      </div>
    </>
  );
};
