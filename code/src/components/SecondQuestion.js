import React, { useState } from 'react';
import { ThirdQuestion } from './ThirdQuestion';

export const SecondQuestion = (props) => {
  const [numberOption, setNumberOption] = useState();
  const [visible, setVisible] = useState(false);

  const checkInput = () => {
    if(numberOption) {
      return () => setVisible(true);
    }
  };

  return (
    <>
      <form className="second-question" onSubmit={(event) => event.preventDefault()}>
        <img className="first-question-img" src="assets/question2-img.png" alt=""/>
        <div className="number-select-text">
            <label key={numberOption}>
            <p>Favorite number (between 5 and 10):</p>
              <input
                  className="number-input"
                  type="number"
                  name="quantity"
                  min="5"
                  max="10"
                  value={numberOption}
                  onChange={(event) => setNumberOption(event.target.value)} 
                  required />
            </label>
            <button className="first-button" onClick={checkInput()}>NEXT</button>
        </div>
      </form>
      {(visible === true) && <ThirdQuestion finalDestination={props.chosenDestination} chosenNumber={numberOption}/>}
    </>
  );
};