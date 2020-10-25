import React, { useState } from 'react';

export const RadioGroup = (props) => {
  const [ageGroup, setAgeGroup] = useState();
  const [isValid, setIsValid] = useState(false);

  const validateInput = (value) => {
    if (value !== '') return true;
    else return false;
  }

  const handleChange = (event) => {
    setIsValid(validateInput(event.target.value));
    setAgeGroup(event.target.value);
  }

  const clickNextButton = (value) => {
    if (validateInput(value)) {
      props.onChange(ageGroup);
    }
  }

  return (
    <div className="question-container">
      <p className="question-label">{props.text}</p>
      {props.options.map((group) => (

        <label htmlFor={group} className="option-label" key={group}>
          <input
            id={group}
            type="radio"
            value={group}
            onChange={handleChange}
            checked={ageGroup === group}
            tabIndex="0" />
          {group}
        </label>
      ))}
      {isValid
      && <button
        className="next-button"
        type="button"
        onClick={() => clickNextButton(ageGroup)}>
        &#x3e;&#x3e;
        </button>}
    </div>
  );
}