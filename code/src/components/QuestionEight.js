import React, { useState } from "react";

export const QuestionEight = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [userInputs, savedInputs] = useState({});
  console.log(isChecked);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };
  const writeDown = () => {
    savedInputs(userInputs);
  };
  return (
    <form>
      <h1>What is your favorite feature about our product?</h1>
      <p>Feel free to select all applicable options or/and provide your custom answer:</p>

      <div>
        <input
          type="checkbox"
          id="Sound quality"
          name="Sound quality"
          value="Sound quality"
          checked={isChecked && userInputs === "Sound quality"}
          onChange={() => {
            handleOnChange();
            writeDown();
          }}
        />
        Sound quality
      </div>
      <div>
        <input
          type="checkbox"
          id="Ergonomic design"
          name="Ergonomic design"
          value="Ergonomic design"
          checked={isChecked && userInputs === "Sound quality"}
          onChange={() => {
            handleOnChange();
            writeDown();
          }}
        />
        Ergonomic design
      </div>
      <div>
        <input
          type="checkbox"
          id="Affordability"
          name="Affordability"
          value="Affordability"
          checked={isChecked && userInputs === "Sound quality"}
          onChange={() => {
            handleOnChange();
            writeDown();
          }}
        />
        Affordability
      </div>
      <div>
        <input type="text" id="Other" name="Other" value={userInputs} onChange={(event) => savedInputs(event.target.value)} placeholder="Your custom option" />
      </div>
    </form>
  );
};
