import React, { useState } from "react";
import RadioButtons from "./RadioButtons";
import DropDown from "./DropDown";
import Overview from "./Overview";
import OverviewButton from "./OverviewButton.js";
const AllForms = (props) => {
  /*Overview component props */

  /* ALL STATES HERE: */
  const [arrayAnswer, setArrayAnswer] = useState(""); /* dropdown component */
  const [arrayAnswer2, setArrayAnswer2] = useState(""); /* dropdown component */
  const [arrayAnswer3, setArrayAnswer3] = useState(""); /* dropdown component */
  const [trueOrFalse, setTrueOrFalse] = useState(); /* radioButton component */
  const [trueOrFalse2, setTrueOrFalse2] =
    useState(); /* radioButton component */
  const [trueOrFalse3, setTrueOrFalse3] =
    useState(); /* radioButton component */

  const [step, setStep] = useState(1); /* step state */

  /* ALL FUNCTIONS HERE */
  const onStepChange = () => {
    /* Function step*/
    setStep(step + 1);
  };
  const onStepChangeMinus = () => {
    /* Function step to go back */
    setStep(step - 1);
  };

  const onSetArrayAnswer = (event) => {
    /* Function dropdown */
    setArrayAnswer(event.target.value);
  };
  const onSetArrayAnswer2 = (event) => {
    /* Function dropdown */
    setArrayAnswer2(event.target.value);
  };
  const onSetArrayAnswer3 = (event) => {
    /* Function dropdown */
    setArrayAnswer3(event.target.value);
  };

  const onSetTrueOrFalse = (event) => {
    /* Function radioButtons */
    setTrueOrFalse(event.target.value);
  };
  const onSetTrueOrFalse2 = (event) => {
    /* Function radioButtons */
    setTrueOrFalse2(event.target.value);
  };
  const onSetTrueOrFalse3 = (event) => {
    /* Function radioButtons */
    setTrueOrFalse3(event.target.value);
  };

  /* IF STATEMENTS */
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
      <OverviewButton
        onStepChange={onStepChange}
        onStepChangeMinus={onStepChangeMinus}
      />
    );
  } else if (step === 4) {
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
