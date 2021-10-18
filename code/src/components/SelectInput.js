import React, { useState } from "react";

const SelectInput = (props) => {
  const [selection, setSelection] = useState("");

  const onSelectChange = (event) => {
    setSelection(event.target.value)
  }

  return (
    <>
      <form action="">
        <select
          onChange={onSelectChange}
          value={selection}
        >
          <option value="" disabled>
            Choose one
          </option>
          {props.options.map((option) => {
            return <option key={option} value={option}>{option}</option>;
          })}
        </select>
      </form>
    </>
  );
};

export default SelectInput;
