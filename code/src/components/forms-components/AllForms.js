import React, { useState } from "react";
import RadioButtons from "./RadioButtons";
import DropDown from "./DropDown";
import Overview from "../overview-components/Overview";


const AllForms = (props) => {

   /* ------------------- ALL LOCAL STATES HERE -------------------- */

  /* states for the dropdown component */
  const [arrayAnswer, setArrayAnswer] = useState(""); 
  const [arrayAnswer2, setArrayAnswer2] = useState(""); 
  const [arrayAnswer3, setArrayAnswer3] = useState(""); 
  
 /* states for the radioButton component */
  const [trueOrFalse, setTrueOrFalse] = useState(); 
  const [trueOrFalse2, setTrueOrFalse2] = useState(); 
  const [trueOrFalse3, setTrueOrFalse3] = useState(); 

 /* state for the steps */
  const [step, setStep] = useState(1); 

  
  /* ------------------- ALL FUNCTIONS HERE -------------------- */

  /* Function for increasing the steps and therefore, being able to move forward */
  /* Which is trigger in each component with a Next button and the See overview button */
  const onStepChange = () => {
    setStep(step + 1);
  };

   /* Function for decreasing the steps and therefore, being able to go to previous page */
   /* Which is trigger in the RadioButtons and Overview components with a Previous button */
  const onStepChangeMinus = () => {
    setStep(step - 1);
  };

   /* Function for all the dropsdown */
  const onSetArrayAnswer = (event) => {
    setArrayAnswer(event.target.value);
  };

  const onSetArrayAnswer2 = (event) => {
    setArrayAnswer2(event.target.value);
  };
  
  const onSetArrayAnswer3 = (event) => {
    setArrayAnswer3(event.target.value);
  };


   /* Function for all radioButtons */
  const onSetTrueOrFalse = (event) => {
    setTrueOrFalse(event.target.value);
  };

  const onSetTrueOrFalse2 = (event) => {
    setTrueOrFalse2(event.target.value);
  };

  const onSetTrueOrFalse3 = (event) => {
    setTrueOrFalse3(event.target.value);
  };

 /* ------------------- IF STATEMENTS BASED ON THE STEP STATE -------------------- */

  if (step === 1) {
    return (
      <DropDown
        arrayAnswer={arrayAnswer}
        onSetArrayAnswer={onSetArrayAnswer}
        arrayAnswer2={arrayAnswer2}
        onSetArrayAnswer2={onSetArrayAnswer2}
        arrayAnswer3={arrayAnswer3}
        onSetArrayAnswer3={onSetArrayAnswer3}
        onStepChange={onStepChange} 
      />
    );
    
  } else if (step === 2) {
    return (
      <RadioButtons
        trueOrFalse={trueOrFalse}
        onSetTrueOrFalse={onSetTrueOrFalse}
        trueOrFalse2={trueOrFalse2}
        onSetTrueOrFalse2={onSetTrueOrFalse2}
        trueOrFalse3={trueOrFalse3}
        onSetTrueOrFalse3={onSetTrueOrFalse3}
        onStepChange={onStepChange}
        onStepChangeMinus={onStepChangeMinus}
      />
    );
  
  } else if (step === 3) {
    return (
      <Overview
        name={props.name}
        arrayAnswer={arrayAnswer}
        arrayAnswer2={arrayAnswer2}
        arrayAnswer3={arrayAnswer3}
        trueOrFalse={trueOrFalse}
        trueOrFalse2={trueOrFalse2}
        trueOrFalse3={trueOrFalse3}
        onStepChangeMinus={onStepChangeMinus}
      />
    );
  }
};

export default AllForms;
