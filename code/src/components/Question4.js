import React from "react";

import "./Question4.css";

export const Question4 = ({futureChoice, setFutureChoice, optionArray}) => {

  const handleChange = (e) => {
    setFutureChoice(e.target.value);
  };

  return (
    <>
      <form
        className="radio-buttons"
      >
        <h3>Which of the following would you especially want to experience?</h3>
        {optionArray.map((val) => (
          <label htmlFor={val} key={val}>
            <input
              id={val}
              type="radio"
              value={val}
              onChange={handleChange}
              checked={futureChoice=== val}
              required
            ></input>
            {val}
          </label>
        ))}
      </form>
    </>
  );
};
