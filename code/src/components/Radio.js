import React from "react";

import "./Radio.css";

export const Radio = props => {
  const {
    futureExpectations,
    setFutureExpectations,
    value1,
    value2,
    value3,
    value4,
  } = props;
  const values = [value1, value2, value3, value4];

  const handleChange = (e) => {
    setFutureExpectations(e.target.value);
  };

  return (
    <>
      <form className="radio-buttons" onSubmit={(event) => event.preventDefault()}>
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
