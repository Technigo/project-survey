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
  const [bodyInput, setBodyInput] = useState("");
  const [gameInput, setGameInput] = useState("");
  const [pizzaInput, setPizzaInput] = useState("");
  const [outfitInput, setOutfitInput] = useState("");
  const [step, setStep] = useState(1);

  const onNameInputChange = (event) => {
    setNameInput(event.target.value);
  };

  const onAnimalInputChange = (event) => {
    setAnimalInput(event.target.value);
  };

  const onBodyInputChange = (event) => {
    setBodyInput(event.target.value);
  };

  const onGameInputChange = (event) => {
    setGameInput(event.target.value);
  };

  const onPizzaInputChange = (event) => {
    setPizzaInput(event.target.value);
  };

  const onOutfitInputChange = (event) => {
    setOutfitInput(event.target.value);
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
          bodyInput={bodyInput}
          onBodyInputChange={onBodyInputChange}
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
          outfitInput={outfitInput}
          onOutfitInputChange={onOutfitInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 7 && (
        <Overview
          nameInput={nameInput}
          animalInput={animalInput}
          bodyInput={bodyInput}
          gameInput={gameInput}
          pizzaInput={pizzaInput}
          outfitInput={outfitInput}
        />
      )}
    </div>
  );
};

export default Form;
