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
    const newFormData = { ...formData }; //create a variable, newFormData, containing a copy of the object formData using spread syntax
    newFormData[name] = value; //assigns newFormData the property (incl. the value) of the components respectively
    setFormData(newFormData); //invoke the setFormData function which changes the state of formData (changes the value),
    //which React will listen to and render (in the summary in my solution below)
    // setFormData({ ...formData, [name]: value });     does the same as the above, but this is a shorthand
  };

  return (
    <>
      <div className="form-container">
        {!showSummary ? (                   //if opposite of showSummary - run the form, else display summary
          <form className="form" onSubmit={handleSubmit}>
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
