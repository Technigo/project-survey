import React from "react";

import "./Question3.css";

export const Question3 = ({ yearsToMars, setYearsToMars }) => {
  const years = [
    "0-10 years",
    "10 to 20 years",
    "over 20 years",
    "over 100 years",
    "Never",
  ];

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
            {years.map((year) => (
              <option label={year} value={year} key={year}></option>
            ))}
          </select>
        </div>
      </label>
    </form>
  );
};
