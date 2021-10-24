import React from "react";

import "./progressbar.css";

export const Progressbar = (props) => {
  return (
    <div className="progress-container">
      <label htmlFor={props.value}>
        <progress className="progressbar" id={props.value} value={props.value} max="100">
          {props.value}
        </progress>
      </label>
    </div>
  );
};
