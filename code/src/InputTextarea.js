import React from "react";

export const InputTextarea = props => {
  const { value, onChange, className } = props;
  return (
    <label>
      <input
        type="textarea"
        rows="20"
        cols="10"
        value={value}
        onChange={onChange}
        className={className}
      />
    </label>
  );
};
