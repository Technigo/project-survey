import React from "react";

export const Option = props => {
  const { value, text } = props;
  return <option value={value}>{text}</option>;
};
