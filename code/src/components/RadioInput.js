import React, {useState} from "react";

const RadioInput = ({options, choice, onValueChange}) => {
  const [innerChoice, setChoice] = useState(choice);


  const onInputChange = (event) => {
    onValueChange(event.target.value);
    setChoice(event.target.value)
  };
  
  return (
    <>
      <form action="">
        {options.map((option) => (
          <label key={option}>
            <input
              type="radio"
              value={option}
              onChange={onInputChange}
              checked={innerChoice === option}
            />
            {option}
          </label>
        ))}
      </form>
    </>
  );
};

export default RadioInput;
