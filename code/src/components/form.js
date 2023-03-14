/* eslint-disable */
import React, { useState } from "react";

import Introduction from "./Introduction";
import NameQuestion from "./NameQuestion";
import MusicQuestion from "./MusicQuestion";
import HorseQuestion from "./HorseQuestion";

import Summary from "./Summary";

const Form = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    artistName: "",
    horse: "",
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
  
  const horseOptions = [
    { label: '10 duck sized horses', value: 'horses' },
    { label: '1 horse sized duck', value: 'duck' }
  ];

  console.log("New step:", step);
  
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
    handleSubmit={handleSubmit}
    formData={formData}
  />
)}

            {step === 2 && (
              <MusicQuestion
                artistName={formData.artistName}
                callbackOnChange={handleInputChange}
                step={step}
                setStep={setStep}
              />
            )}

            {step === 3 && (
              <>
                <HorseQuestion
                  horseOptions={horseOptions}
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

export { Form }
export default Form