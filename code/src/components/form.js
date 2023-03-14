/* eslint-disable */
import React, { useState } from "react";

import Introduction from "./Introduction";
import NameQuestion from "./NameQuestion";
import MusicQuestion from "./MusicQuestion";
import QuestionTwo from "./QuestionTwo";

import Summary from "./Summary";

const Form = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    sushi: "",
    ingredient: "",
  });
  const [showSummary, setShowSummary] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSummary(true);
  };

  const handleInputChange = (name, value) => {
    const newFormData = Object.assign({}, formData);
    newFormData[name] = value;
    setFormData(newFormData);
  };

  return (
    <>
      <div className="form-container">
        {!showSummary ? (                 
          <form 
            className="form" 
            onSubmit={handleSubmit}
          >
            {step === 0 && (
              <Introduction 
                step={step} 
                setStep={setStep} 
              />
            )}

            {step === 1 && (
              <NameQuestion
                name={formData.name}
                callbackOnChange={handleInputChange}
                step={step}
                setStep={setStep}
              />
            )}

            {step === 2 && (
              <MusicQuestion
                artist={formData.artist}
                callbackOnChange={handleInputChange}
                step={step}
                setStep={setStep}
              />
            )}

            {step === 3 && (
              <>
                <QuestionTwo
                  ingredient={formData.ingredient}
                  callbackOnChange={handleInputChange}
                  step={step}
                  setStep={setStep}
                />
              </>
            )}
          </form>
        ) : (
          <Summary formData={formData} />
        )}
      </div>
    </>
  );
};

export { Form };
export default Form;