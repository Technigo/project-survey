import React from "react";

import "./dropdown.css";

export const Dropdown = (props) => {
  return (
    <div>
      <h2>{props.question}</h2>
      <select required onChange={(event) => props.setSelectValue(event.target.value)} value={props.selectValue}>
        {props.optionsArray.map((object) => (
          <option className={"dropdown"} key={object.value} value={object.value}>
            {object.text}
          </option>
        ))}
      </select>
    </div>
  );
};
