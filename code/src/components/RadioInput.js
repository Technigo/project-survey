import React from "react";

const RadioInput = ({ options, choice, onValueChange }) => {

  const onInputChange = (event) => {
    onValueChange(event.target.value);
  };

  return (
    <>
      {options.map((option) => (
        <label className="radio-btn-label" key={option}>
          <input
          className="radio-btn"
            type="radio"
            value={option}
            onChange={onInputChange}
            checked={choice === option}
          />
          {option}
        </label>
      ))}
    </>
  );
};

export default RadioInput;
