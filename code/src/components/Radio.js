import React, { useState } from "react";
import "./Radio.css";

export const Radio = (props) => {
  const [range, setRange] = useState();
  const values = [props.value1, props.value2, props.value3, props.value4];
  return (
    <>
      <div class={`radio-input ${props.class}`}><h3>Radio:</h3> <p>{range}</p></div>
      <div className="radio">
        <h2>Question 2</h2>
        {values.map((val) => (
          <label key={val}>
            <input
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
