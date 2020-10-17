import React, { useState } from "react";
import { NumberPicker } from "./components/NumberPicker";

const colorOptions = ["Red", "Green", "Blue"];

export const App = () => {
  const [colorOption, setColorOption] = useState();
  const [visible, setVisible] = useState(false);

  const checkInput = () => {
    if(colorOption) {
      return () => setVisible(true)
    }
  };

  return (
    <>
      <form onSubmit={(event) => event.preventDefault()}>
        <div className="color-picker">
          Pick a color:
          {colorOptions.map((color) => (
            <label key={color}>
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
    </>
  );
};

/* Check indentation and also that HTML elements are semantic, maybe sections instead of div for questions */
/* Check semi colons everywhere even in index.js and also that everything is "" double quotations */