import React from "react";

import "./Question4.css";

export const Question4 = ({ futureExpectations, setFutureExpectations }) => {
  const values = [
    "synthetic food",
    "flying cars",
    "cyborg society",
    "cool gadgets",
  ];

  const handleChange = (e) => {
    setFutureExpectations(e.target.value);
  };

  return (
    <>
      <form
        className="radio-buttons"
        onSubmit={(event) => event.preventDefault()}
      >
        <h3>Which of the following would you especially want to experience?</h3>
        {values.map((val) => (
          <label htmlFor={val} key={val}>
            <input
              id={val}
              type="radio"
              value={val}
              onChange={handleChange}
              checked={futureExpectations === val}
              required
            ></input>
            {val}
          </label>
        ))}
      </form>
    </>
  );
};
