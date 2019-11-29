import React from "react";

export const InputText = props => {
  const { value, onChange, className } = props;
  return (
    <label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={className}
      />
    </label>
  );
};
