/* eslint-disable */
import React, { useState } from "react";

import Introduction from "./Introduction";
import NameQuestion from "./NameQuestion";
import MusicQuestion from "./MusicQuestion";
import HorseQuestion from "./HorseQuestion";
import ElephantQuestion from "./ElephantQuestion";
import SuperpowerQuestion from "./SuperpowerQuestion";
import Summary from "./Summary";

const Form = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    artistName: "",
    horseOptions: "",
    elephantOptions:"",
    superPowersOptions:"",

  });
  const [showSummary, setShowSummary] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    setShowSummary(true);
  };

  const handleInputChange = (name, value) => {
    const newFormData = Object.assign({}, formData, {[name]: value});
    setFormData(newFormData);
    if (name === 'selectedHorseOption') {
      setHorseOption(value);
    } else if (name === 'selectedElephantOption') {
      setSelectedElephantOption(value);
    } else if (name === 'selectedSuperPowersOption') {
      setSuperPowersOption(value);
    }
  };
  
  
  const horseOptions = [
    { label: '100 duck sized horses', value: '100 duck sized horses' },
    { label: '1 horse sized duck', value: '1 horse sized duck' }
  ];

  const elephantOptions = [
    { label: 'riding an Alpaca', value: 'riding an Alpaca' },
    { label: 'riding an Elephant', value: 'riding an Elephant' },
  ];

  const superPowersOptions = [
    { label: 'move objects with your mind', value: 'move objects with your mind' },
    { label: 'temporarily mute annoying people in real life', value: 'temporarily mute annoying people in real life' },
  ];

  console.log("New step:", step);
  console.log("New formData:", formData);

  const [horseOption, setHorseOption] = useState('');
  const [selectedElephantOption, setSelectedElephantOption] = useState('');
  const [superPowersOption, setSuperPowersOption] = useState('');

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

            {step === 4 && (
              <>
                <ElephantQuestion
                  elephantOptions={elephantOptions}
                  callbackOnChange={handleInputChange}
                  selectedElephantOption={selectedElephantOption}
                  setSelectedElephantOption={setSelectedElephantOption}
                  step={step}
                  setStep={setStep}
                />
              </>
            )}

             {step === 5 && (
              <>
                <SuperpowerQuestion
                  superpowerOptions={superPowersOptions}
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