import React, { useState } from "react";
import { FirstQuestion } from "./FirstQuestion";
import { SecondQuestion } from "./SecondQuestion";
import { ThirdQuestion } from "./ThirdQuestion";
import { FourthQuestion } from "./FourthQuestion";

export const Form = () => {
  const [nameInput, setNameInput] = useState("");
  const [adressInput, setAdressInput] = useState("");
  const [houseTypeInput, setHouseTypeInput] = useState();
  const [satisfactionInput, setSatisfactionInput] = useState();
  const [step, setStep] = useState(1);

  const onNameInputChange = (event) => {
    setNameInput(event.target.value);
  };
  const onAdressInputChange = (event) => {
    setAdressInput(event.target.value);
  };
  const onHouseTypeInputChange = (event) => {
    setHouseTypeInput(event.target.value);
  };
  const onSatisfactionInputChange = (event) => {
    setSatisfactionInput(event.target.value);
  };

  const onStepChange = () => {
    setStep(step + 1);
  };

  if (step === 1) {
    return (
      <FirstQuestion
        nameInput={nameInput}
        onNameInputChange={onNameInputChange}
        onStepChange={onStepChange}
      />
    );
  } else if (step === 2) {
    return (
      <SecondQuestion
        adressInput={adressInput}
        onAdressInputChange={onAdressInputChange}
        onStepChange={onStepChange}
      />
    );
  } else if (step === 3) {
    return (
      <ThirdQuestion
        houseTypeInput={houseTypeInput}
        onHouseTypeInputChange={onHouseTypeInputChange}
        onStepChange={onStepChange}
      />
    );
  } else if (step === 4) {
    return (
      <FourthQuestion
        satisfactionInput={satisfactionInput}
        onSatisfactionInputChange={onSatisfactionInputChange}
        onStepChange={onStepChange}
      />
    );
  }
};
export default Form;
