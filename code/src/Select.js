import React, { useState } from 'react';

export const Select = (props) => {
  const [foodType, setFoodType] = useState('');
  const [isValid, setIsValid] = useState(false);

  const validateInput = (value) => {
    if (value !== '') return true;
    else return false;
  }

  const handleChange = (event) => {
    setIsValid(validateInput(event.target.value));
    setFoodType(event.target.value);
  }

  const clickNextButton = (value) => {
    if (validateInput(value)) {
      props.onChange(foodType);
    }
  }

  return (
    <div className="question-container">
      <label htmlFor="select" className="question-label">{props.text}</label>
      <select
        id="select"
        onChange={handleChange}
        value={foodType}>
        <option value="">Food Preference</option>
        {props.options.map((food) => <option key={food} value={food}>{food}</option>)}
      </select>

      {isValid
        && <button
          className="next-button"
          type="button"
          onClick={() => clickNextButton(foodType)}>
          &#x3e;&#x3e;
          </button>}
    </div>
  );
};