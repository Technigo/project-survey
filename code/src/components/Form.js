import React, { useState } from "react";
import FirstQuestion from "./FirstQuestion";
import SecondQuestion from "./SecondQuestion";
import ThirdQuestion from "./ThirdQuestion";
import FourthQuestion from "./FourthQuestion";
import FifthQuestion from "./FifthQuestion";
import SixthQuestion from "./SixthQuestion";
import Summ from "./Summ";

const prevent = (event) => {
  event.preventDefaul();
};

const Form = () => {
  const [step, setStep] = useState(1);
  const [nameInput, setNameInput] = useState("");
  const [planetInput, setPlanetInput] = useState();
  const [experienceInput, setExperienceInput] = useState();
  const [weatherInput, setWeatherInput] = useState("");
  const [degreesInput, setDegreesInput] = useState(0);
  const [rateInput, setRateInput] = useState(0);
  const [gradeIndex, setGradeIndex] = useState();
  const onNameInputChange = (event) => {
    setNameInput(event.target.value);
  };

  const onPlanetInputChange = (event) => {
    setPlanetInput(event.target.value);
  };
  const onExperienceInputChange = (event) => {
    setExperienceInput(event.target.value);
  };
  const onWeatherInputChange = (event) => {
    setWeatherInput(event.target.value);
  };
  const onDegreesInputChange = (event) => {
    setDegreesInput(event.target.value);
  };
  const onRateInputChange = (event) => {
    setRateInput(event.target.value);
  };
  const onStepChange = () => {
    setStep(step + 1);
  };

  return (
    <section className="form-container">
      {step === 1 && (
        <FirstQuestion
          nameInput={nameInput}
          onNameInputChange={onNameInputChange}
          onStepChange={onStepChange}
          prevent={prevent}
        />
      )}
      {step === 2 && (
        <SecondQuestion
          planetInput={planetInput}
          onPlanetInputChange={onPlanetInputChange}
          onStepChange={onStepChange}
          prevent={prevent}
        />
      )}
      {step === 3 && (
        <ThirdQuestion
          experienceInput={experienceInput}
          onExperienceInputChange={onExperienceInputChange}
          onStepChange={onStepChange}
          prevent={prevent}
        />
      )}
      {step === 4 && (
        <FourthQuestion
          weatherInput={weatherInput}
          onWeatherInputChange={onWeatherInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 5 && (
        <FifthQuestion
          degreesInput={degreesInput}
          onDegreesInputChange={onDegreesInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 6 && (
        <SixthQuestion
          onStepChange={onStepChange}
          gradeIndex={gradeIndex}
          setGradeIndex={setGradeIndex}
        />
      )}
      {step === 7 && (
        <Summ
          experienceInput={experienceInput}
          nameInput={nameInput}
          planetInput={planetInput}
          weatherInput={weatherInput}
          degreesInput={degreesInput}
          gradeIndex={gradeIndex}
          onRateInputChange={onRateInputChange}
          prevent={prevent}
        />
      )}
    </section>
  );
};
export default Form;
