import React, { useState } from "react";
import { NumberPicker } from "./components/NumberPicker";

const colorOptions = ["Red", "Green", "Blue"];

export const App = () => {
  const [colorOption, setColorOption] = useState();
  const [visible, setVisible] = useState(false);

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
          <button onClick={() => setVisible(true)}>1 of 3</button>
        </div>

        {(visible === true && colorOption) && <NumberPicker chosenColor={colorOption}/>}
      </form>
    </>
  );
};