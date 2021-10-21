import React, { useState } from "react"; //UseState är en typ av hook

import FirstQuestion from "./FirstQuestion";
import SecondQuestion from "./SecondQuestion";
import RadioButton from "./RadioButton";
import DropDown from "./DropDown";
import Overview from "./Overview";

const Form = () => {
  const [nameInput, setNameInput] = useState("name");
  const [surnameInput, setSurnameInput] = useState("surname");
  const [ageInput, setAgeInput] = useState("30+");
  const [locationInput, setLocationInput] = useState("Oslo");
  const [step, setStep] = useState(2);

  /*   useEffect(() => {alert ('hey')})  */

  const onNameInputChange = (event) => {
    setNameInput(event.target.value);
  };

  const onSurnameInputChange = (event) => {
    setSurnameInput(event.target.value);
  };

  const onAgeInputChange = (value) => {
    setAgeInput(value);
  };

  const onLocationInputChange = (event) => {
    setLocationInput(event.target.value);
  };

  const onStepChange = (stepChange) => {
    if (stepChange === "prev") {
      setStep(step - 1);
    } else {
      setStep(step + 1);
    }
  };

  return (
    <div>
      <div className="header">TEXT</div>
      {step === 1 && (
        <FirstQuestion
          nameInput={nameInput}
          onNameInputChange={onNameInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 2 && (
        <SecondQuestion
          surnameInput={surnameInput}
          onSurnameInputChange={onSurnameInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 3 && (
        <RadioButton
          ageInput={ageInput}
          onAgeInputChange={onAgeInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 4 && (
        <DropDown
          locationInput={locationInput}
          onLocationInputChange={onLocationInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 5 && (
        <Overview
          nameInput={nameInput}
          surnameInput={surnameInput}
          ageInput={ageInput}
          locationInput={locationInput}
        />
      )}
    </div>
  );
};

export default Form;
