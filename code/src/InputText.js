import React from "react";

export const InputText = props => {
  const { value, onChange } = props;
  return (
    <label>
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};
