import React, { useState } from "react";
import FirstQuestion from "./FirstQuestion";
import SecondQuestion from "./SecondQuestion";
import RadioButtons from "./RadioButtons";
import DropDown from "./DropDown";
import CheckBox from "./CheckBox";
import Overview from "./Overview";

const AllForms = () => {
  /* React states*/
  const [nameInput, setNameInput] = useState(""); /*FQ*/
  const [surnameInput, setSurnameInput] = useState(""); /*SQ*/
  const [step, setStep] = useState(1); /*STEP*/

  /* Functions */
  const onNameInputChange = (e) => {
    setNameInput(e.target.value);
  };
  const onSurnameInputChange = (e) => {
    setSurnameInput(e.target.value);
  };
  const onStepChange = () => {
    setStep(step + 1);
  };

 /* Conditions to run the questions*/ 
  if (step === 1) {
    return (
      <FirstQuestion
        name={nameInput}
        onNameInputChange={onNameInputChange}
        onStepChange={onStepChange}
      />
    );
  } else if (step === 2) {
    return (
      <SecondQuestion
        surname={surnameInput}
        onSurnameInputChange={onSurnameInputChange}
        onStepChange={onStepChange}
      />
    );
  } else if (step === 3) {
    return (
      <CheckBox 
      name={nameInput}
      onStepChange={onStepChange}
      />
    );

  } else if(step === 4) {
    return (
      <DropDown
      onStepChange={onStepChange} />
    );


  } else if(step === 5) {

    return (
      <Overview
    name={nameInput}
    surname={surnameInput}
    onStepChange={onStepChange}
  />
    )
  }
};

export default AllForms;

// return (
//   <div>
//     <div>My counter is:{counter}</div>
//     <button onClick={() => setCounter(counter + 1)}>Click</button>
//   </div>
// )
