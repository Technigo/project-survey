import React, { useState } from "react";

const RadioInput = (props) => {
  const [choice, setChoice] = useState();

  return (
    <>
      <form action="">
        {props.options.map((option) => (
          <label key={option}>
            <input
              type="radio"
              value={option}
              onChange={(event) => setChoice(event.target.value)}
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
