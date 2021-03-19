import React from "react";

const RadioButton = ({ technologyName, onChange }) => {
  const onTechnologyChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor={technologyName}> {technologyName.toUpperCase()} </label>
      <input
        name="technology"
        type="radio"
        id={technologyName}
        value={technologyName}
        onChange={onTechnologyChange}
      ></input>
    </div>
  );
};
export default RadioButton;
