/* eslint-disable max-len */
import React from 'react';

const handleChange = (event) => {
  console.log(event.target.value);
  // get data from radio buttons
  // save with setFavIceCream

  setQuestionNo(questionNo + 1)
  // ...
}

const FormRadioButton = ({ favoriteAnimal, setFavoriteAnimal, questionNo, setQuestionNo }) => {
  return (
    <div onChange={handleChange}>
      <label className="form-control">
        Option 1
        <input type="radio" name="myRadio" value="option1" />
      </label>
      <label className="form-control">
        Option 2
        <input type="radio" name="myRadio" value="option2" />
      </label>
      <label className="form-control">
        Option 3
        <input type="radio" name="myRadio" value="option3" />
      </label>
    </div>
  );
}

export default FormRadioButton;