import React, { useState } from "react";
import RadioButtons from "./RadioButtons";
import DropDown from "./DropDown";
import CheckBox from "./CheckBox";
import Overview from "./Overview";
import LastQuestion from "./LastQuestion";

const AllForms = (props) => {
  /*Overview component props */
  const { name } = props;

  /* ALL STATES HERE: */
  const [arrayAnswer, setArrayAnswer] =
    useState(""); /* States for the dropdown component */
  const [arrayAnswer2, setArrayAnswer2] =
    useState(""); /* States for the dropdown component */
  const [arrayAnswer3, setArrayAnswer3] =
    useState(""); /* States for the dropdown component */

  const [step, setStep] = useState(1); /* step state */

  /* ALL FUNCTIONS HERE */
  const onStepChange = () => {
    /* Function step*/
    setStep(step + 1);
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
    return <RadioButtons onStepChange={onStepChange} />;
  } else if (step === 3) {
    return <LastQuestion onStepChange={onStepChange} />;
  } else if (step === 4) {
    return (
      <Overview
        name={props.name}
        arrayAnswer={arrayAnswer}
        arrayAnswer2={arrayAnswer2}
        arrayAnswer3={arrayAnswer3}
      />
    );
  }
};

export default AllForms;
