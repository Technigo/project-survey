import React, { useState } from "react";

import FirstQuestion from "./FirstQuestion";
import SecondQuestion from "./SecondQuestion";
import ThirdQuestion from "./ThirdQuestion";
import FourthQuestion from "./FourthQuestion";
import FifthQuestion from "./FifthQuestion";
import SixtQuestion from "./SixtQuestion";
import Overview from "./Overview";

const Form = () => {
  const [nameInput, setNameInput] = useState("");
  const [animalInput, setAnimalInput] = useState("");
  const [astleyInput, setAstleyInput] = useState("");
  const [gameInput, setGameInput] = useState("");
  const [pizzaInput, setPizzaInput] = useState("");
  const [mathInput, setMathInput] = useState("");
  const [step, setStep] = useState(1);

  const onNameInputChange = (event) => {
    setNameInput(event.target.value);
  };

  const onAnimalInputChange = (event) => {
    setAnimalInput(event.target.value);
  };

  const onAstleyInputChange = (event) => {
    setAstleyInput(event.target.value);
  };

  const onGameInputChange = (event) => {
    setGameInput(event.target.value);
  };

  const onPizzaInputChange = (event) => {
    setPizzaInput(event.target.value);
  };

  const onMathInputChange = (event) => {
    setMathInput(event.target.value);
  };

  const onStepChange = () => {
    setStep(step + 1);
  };

  return (
    <div>
      {step === 1 && (
        <FirstQuestion
          nameInput={nameInput}
          onNameInputChange={onNameInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 2 && (
        <SecondQuestion
          animalInput={animalInput}
          onAnimalInputChange={onAnimalInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 3 && (
        <ThirdQuestion
          astleyInput={astleyInput}
          onAstleyInputChange={onAstleyInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 4 && (
        <FourthQuestion
          gameInput={gameInput}
          onGameInputChange={onGameInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 5 && (
        <FifthQuestion
          pizzaInput={pizzaInput}
          onPizzaInputChange={onPizzaInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 6 && (
        <SixtQuestion
          mathInput={mathInput}
          onMathInputChange={onMathInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 7 && (
        <Overview
          nameInput={nameInput}
          animalInput={animalInput}
          astleyInput={astleyInput}
          gameInput={gameInput}
          pizzaInput={pizzaInput}
          mathInput={mathInput}
        />
      )}
    </div>
  );
};

export default Form;
