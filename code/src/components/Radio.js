import React from "react";
import "./Radio.css";

export const Radio = (props) => {
  const {range, setRange} = props
  const values = [props.value1, props.value2, props.value3, props.value4];

  return (
    <>
      <div className="radio-buttons__inner">
        <h2>Question 2</h2>
        {values.map((val) => (
          <label htmlFor={val} key={val}>
            <input
              id={val}
              type="radio"
              value={val}
              onChange={(event) => setRange(event.target.value)}
              checked={range === val}
            ></input>
            {val}
          </label>
        ))}
      </div>
    </>
  );
};
