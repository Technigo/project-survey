import React, { useState } from "react";

const RadioInput = (props) => {
  const [choice, setChoice] = useState();

  const onInputChange = (event) => {
    setChoice(event.target.value)
  }

  return (
    <>
      <form action="">
        {props.options.map((option) => (
          <label key={option}>
            <input
              type="radio"
              value={option}
              onChange={onInputChange}
              checked={choice === option}
            />
            {option}
          </label>
        ))}
      </form>
    </>
  );
};

export default RadioInput;
