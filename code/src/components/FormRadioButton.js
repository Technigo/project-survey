/* eslint-disable max-len */
import React from 'react';

const handleChange = (event) => {
  console.log(event.target.value);
  // get data from radio buttons
  // save with setFavIceCream
  // ...
}
const FormRadioButton = ({ answers }) => {
  return (
    <div onChange={handleChange}>
      {answers.map((answer) => (
        <label className="form-control" key={answer}>
          {answer}
          <input type="radio" name="myRadio" value={answer} />
        </label>
      ))}
    </div>
  );
}

export default FormRadioButton;