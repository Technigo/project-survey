/* eslint-disable max-len */
import React from 'react';

const handleChange = () => {
  // get data from radio buttons
  // save with setFavIceCream

  setQuestionNo(questionNo + 1)
  // ...
}

const FormRadioButton = ({ favoriteIceCream, setFavoriteIceCream, questionNo, setQuestionNo }) => {
  return (
    <div onChange={handleChange}>
      <label>
        Option 1
        <input type="radio" name="myRadio" value="option1" />
      </label>
      <label>
        Option 2
        <input type="radio" name="myRadio" value="option2" />
      </label>
      <label>
        Option 3
        <input type="radio" name="myRadio" value="option3" />
      </label>
    </div>
  );
}

export default FormRadioButton;