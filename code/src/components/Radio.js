import React from "react";

import "./radio.css";

export const Radio = (props) => {
  return (
    <>
      <h2>{props.question}</h2>
      <div className={"radio-container"}>
        {props.radioButtonsArray.map((group) => (
          <label htmlFor={group.value} key={group.value}>
            <input type="radio" id={group.value} value={group.value} onChange={(event) => props.setFaith(event.target.value)} checked={props.faith === group.value} /> {group.message}
          </label>
        ))}
      </div>
    </>
  );
};
