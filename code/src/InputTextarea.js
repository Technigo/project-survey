import React from "react";

export const InputTextarea = props => {
  const { value, onChange } = props;
  return (
    <label>
      <input type="textarea" value={value} onChange={onChange} />
    </label>
  );
};
