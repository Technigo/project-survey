import React, { useState } from "react";
import { FirstQuestion } from "./FirstQuestion";
import { SecondQuestion } from "./SecondQuestion";
import { ThirdQuestion } from "./ThirdQuestion";
import { FourthQuestion } from "./FourthQuestion";
import Overview from "./Overview";
import FifthQuestion from "./FifthQuestion";
import WelcomePage from "./WelcomePage";

export const Form = () => {
  const [nameInput, setNameInput] = useState("");
  const [adressInput, setAdressInput] = useState("");
  const [houseTypeInput, setHouseTypeInput] = useState();
  const [satisfactionInput, setSatisfactionInput] = useState("");
  const [satisfactionTextInput, setSatisfactionTextInput] = useState();
  const [step, setStep] = useState(0);

  const [valid, setValid] = useState(true);

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

  const onSatisfactionTextInputChange = (event) => {
    setSatisfactionTextInput(event.target.value);
  };

  const onStepChange = (event) => {
    event.preventDefault();
    if (step === 4) {
      if (satisfactionInput === "") {
        setValid(false);
      } else {
        setStep(step + 1);
        setValid(true);
      }
    } else {
      setStep(step + 1);
      setValid(true);
    }
  };
  const onStepBackChange = (event) => {
    setStep(step - 1);
    event.preventDefault();
  };

  if (step === 0) {
    return <WelcomePage onStepChange={onStepChange} />;
  } else if (step === 1) {
    return (
      <FirstQuestion
        nameInput={nameInput}
        onNameInputChange={onNameInputChange}
        onStepChange={onStepChange}
        onStepBackChange={onStepBackChange}
      />
    );
  } else if (step === 2) {
    return (
      <SecondQuestion
        adressInput={adressInput}
        onAdressInputChange={onAdressInputChange}
        onStepChange={onStepChange}
        onStepBackChange={onStepBackChange}
      />
    );
  } else if (step === 3) {
    return (
      <ThirdQuestion
        houseTypeInput={houseTypeInput}
        adressInput={adressInput}
        onHouseTypeInputChange={onHouseTypeInputChange}
        onStepChange={onStepChange}
        onStepBackChange={onStepBackChange}
      />
    );
  } else if (step === 4) {
    return (
      <FourthQuestion
        satisfactionInput={satisfactionInput}
        onSatisfactionInputChange={onSatisfactionInputChange}
        onStepChange={onStepChange}
        valid={valid}
        onStepBackChange={onStepBackChange}
      />
    );
  } else if (step === 5) {
    return (
      <FifthQuestion
        nameInput={nameInput}
        satisfactionTextInput={satisfactionTextInput}
        onSatisfactionTextInputChange={onSatisfactionTextInputChange}
        onStepChange={onStepChange}
        satisfactionInput={satisfactionInput}
        onStepBackChange={onStepBackChange}
      />
    );
  } else if (step === 6) {
    return (
      <Overview
        nameInput={nameInput}
        adressInput={adressInput}
        houseTypeInput={houseTypeInput}
        satisfactionInput={satisfactionInput}
        satisfactionTextInput={satisfactionTextInput}
        onStepBackChange={onStepBackChange}
      />
    );
  } else {
    return (
      <Overview
        nameInput={nameInput}
        adressInput={adressInput}
        houseTypeInput={houseTypeInput}
        satisfactionInput={satisfactionInput}
        satisfactionTextInput={satisfactionTextInput}
        onStepBackChange={onStepBackChange}
      />
    );
  }
};
export default Form;
