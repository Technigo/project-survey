import React, { useState } from "react";
import "./Radio.css";

export const Radio = (props) => {
  const [range, setRange] = useState();
  const values = [props.value1, props.value2, props.value3, props.value4];
  return (
    <>
     {/*The class "radio-input" gets an prop class which either is "active" (shows it) or 
    "inactive". These are specified in index.css*/}
      <div class={`radio-buttons__answer ${props.activeClass}`}>
        <h3>Radio:</h3> 
        <p>{range}</p>
      </div>
      <div className="radio-buttons__inner">
        <h2>Question 2</h2>
        {values.map((val) => (
          <label for={val} key={val}>
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
