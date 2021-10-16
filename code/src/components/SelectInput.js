import React, { useState } from "react";

const SelectInput = (props) => {
  const [selection, setSelection] = useState("");

  return (
    <>
      <form action="">
        <select
          onChange={(event) => setSelection(event.target.value)}
          value={selection}
        >
          <option value="" disabled>
            Choose one
          </option>
          {props.options.map((option) => {
            return <option value={option}>{option}</option>;
          })}
        </select>
      </form>
    </>
  );
};

export default SelectInput;
