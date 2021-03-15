import React, { useState } from "react";
import "./DropDown.css";

export const DropDown = (props) => {
  const [type, setType] = useState("");

  return (
    <>
      <div class={`drop-down__input ${props.class}`}><h3>Select:</h3> <p>{type}</p></div>
      <div className="select">
        <h2>Question 1</h2>
        <div className="drop-down__form-select">
          <select
            onChange={(event) => setType(event.target.value)}
            value={type}
          >
            <option value="" disabled>Select</option>
            <option value={props.option1}> {props.option1} </option>
            <option value={props.option2}> {props.option2} </option>
            <option value={props.option3}> {props.option3} </option>
            <option value={props.option4}> {props.option4} </option>
            <option value={props.option5}> {props.option5} </option>
          </select>
        </div>
      </div>
    </>
  );
};
