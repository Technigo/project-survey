import React from "react";

export const RadioButton = props => {
  const { label, value, checked, onChange } = props;
  return (
    <label>
      <input type="radio" value={value} checked={checked} onChange={onChange} />
      {label}
    </label>
  );
};
