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
      <form onSubmit={(event) => event.preventDefault()}>
        <div>
            <label key={numberOption}>
            Pick your favorite number (between 5 and 10):
              <input
                  type="number"
                  name="quantity"
                  min="5"
                  max="10"
                  value={numberOption}
                  onChange={(event) => setNumberOption(event.target.value)} 
                  required />
            </label>
            <button onClick={checkInput()}>2 of 3</button>
        </div>
      </form>
      {(visible === true) && <ThirdQuestion finalDestination={props.chosenDestination} chosenNumber={numberOption}/>}
    </>
  );
};