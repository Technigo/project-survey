import React, { useState } from "react";
import { DayPicker } from "./DayPicker";

export const NumberPicker = (props) => {
  const [numberOption, setNumberOption] = useState();
  const [visible, setVisible] = useState(false);

  const checkInput = () => {
    if(numberOption) {
      return () => setVisible(true)
    }
  };

  return (
    <>
      <form onSubmit={(event) => event.preventDefault()}>
        <div className="number-picker">
            <label key={numberOption}>
            Pick your favorite number (between 1 and 5):
            <input
                type="number"
                name="quantity"
                min="1"
                max="5"
                value={numberOption}
                onChange={(event) => setNumberOption(event.target.value)} 
                required />
            </label>
            <button onClick={checkInput()}>2 of 3</button>
        </div>

        {(visible === true) && <DayPicker finalColor={props.chosenColor} chosenNumber={numberOption}/>}
      </form>
    </>
  );
};