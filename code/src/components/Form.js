import React, { useState } from "react";

import FirstQuestion from "./FirstQuestion";

const Form = () => {
  const [nameInput, setNameInput] = useState("");
  const [step, setStep] = useState(1);

  const onNameInputChange = (event) => {
    setNameInput(event.target.value);
  };

  const onStepChange = () => {
    setStep(step + 1);
  };

  return <div></div>;
};

export default Form;
