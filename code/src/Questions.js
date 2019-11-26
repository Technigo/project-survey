import React from "react";

export const Questions = props => {
  const { value, text } = props;
  return <h4 value={value}>{text}</h4>;
};
