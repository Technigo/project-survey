import React from "react";

export const RadioButton = props => {
  const { label, value, checked, className, onChange } = props;
  return (
    <label className="radioLabel">
      <input
        type="radio"
        value={value}
        checked={checked}
        className={className}
        onChange={onChange}
      />
      {label}
    </label>
  );
};
