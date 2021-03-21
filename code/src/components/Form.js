import React, { useState } from "react";

import FirstPage from "./FirstPage";
import NameQuestion from "./NameQuestion";
import SushiQuestion from "./SushiQuestion";
import IngredientQuestion from "./IngredientQuestion";

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
    const newFormData = { ...formData }; 
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
              <FirstPage 
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
              <SushiQuestion
                sushi={formData.sushi}
                callbackOnChange={handleInputChange}
                step={step}
                setStep={setStep}
              />
            )}

            {step === 3 && (
              <>
                <IngredientQuestion
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

export default Form;
