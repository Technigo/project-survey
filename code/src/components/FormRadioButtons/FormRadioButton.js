/* eslint-disable max-len */
import React from 'react';
import styles from './FormRadioButtons.module.css';

const handleChange = (event) => {
  console.log(event.target.value);
  // get data from radio buttons
  // save with setAndTheNameYouWantToCallIt
  // ...
}
const FormRadioButton = ({ answers }) => {
  return (
    <div onChange={handleChange}>
      {answers.map((answer) => (
        <label className="form-control" key={answer}>
          {answer}
          <input
            id={answer}
            name={answer}
            type="radio"
            value={answer}
            onChange={(event) => props.onChange(event.target.value)}
            checked={props.value === answer} />
          {answer}
        </label>
      ))}
    </div>
  );
}

export default FormRadioButton;