import React from "react";

/*
create a functional emoji component that will promote good practices, accessibility, and reusability. 
*/

export const Emoji = props => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
)