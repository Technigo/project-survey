import React, { useState } from "react";
import { NumberPicker } from "./NumberPicker";
import 'components-css/first-question.css'

const colorOptions = ["Red", "Green", "Blue"];

export const ColorPicker = () => {
  const [colorOption, setColorOption] = useState();
  const [visible, setVisible] = useState(false);

  const checkInput = () => {
    if(colorOption) {
      return () => setVisible(true)
    }
  };

  return (
    <section className="first-question">
      <form onSubmit={(event) => event.preventDefault()} id="start-form">
        <div className="color-picker" role="radiogroup" tabindex="0" aria-label="Pick a Color: Red, Green or Blue">
          Pick a color:
          {colorOptions.map((color) => (
            <label key={color} aria-label={color}>
              <input
                name="color-options"
                type="radio"
                value={color}
                onChange={(event) => setColorOption(event.target.value)}
                checked={colorOption === color} 
                required />
              {color}
            </label>
          ))}
          <button onClick={checkInput()}>1 of 3</button>
        </div>

        {(visible === true) && <NumberPicker chosenColor={colorOption}/>}
      </form>
    </section>
  );
};