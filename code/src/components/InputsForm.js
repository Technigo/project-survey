import React, { useState } from "react";

import NameQuestion from "./NameQuestion";
import FavoritePun from "./FavoritePun";
import Summary from "./Summary";
import DropDown from "./DropDown";

const InputsForm = () => {
  const [nameInput, setNameInput] = useState("");
  const [punInput, setPunInput] = useState("");
  const [dropdown, setDropdown] = useState("");
  const [step, setStep] = useState(1);

  const handleFirstNameInputChange = event => {
    setNameInput(event.target.value);
  };

  const handlePunInputChange = event => {
    setPunInput(event.target.value);
  };

  const handleBirdInput = event => {
    setDropdown(event.target.value);
  };

  const onStepChange = () => {
    setStep(step + 1);
  };

  return (
    <div>
      {step === 1 && (
        <NameQuestion
          nameInput={nameInput}
          handleFirstNameInputChange={handleFirstNameInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 2 && (
        <FavoritePun
          punInput={punInput}
          handlePunInputChange={handlePunInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 3 && (
        <DropDown
          dropdown={dropdown}
          handleBirdInput={handleBirdInput}
          onStepChange={onStepChange}
        />
      )}
      {step === 4 && (
        <Summary
          nameInput={nameInput}
          punInput={punInput}
          dropdown={dropdown}
        />
      )}
    </div>
  );
};
export default InputsForm;
