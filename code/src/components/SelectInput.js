import React, { useState } from "react";

const SelectInput = ({ options, selection, onValueChange }) => {
  const [innerSelection, setSelection] = useState(selection || "");

  const onSelectChange = (event) => {
    onValueChange(event.target.value);
    setSelection(event.target.value);
  };

  return (
    <>
      <select value={innerSelection} onChange={onSelectChange}>
        <option value="" disabled>
          Choose one
        </option>
        {options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default SelectInput;
