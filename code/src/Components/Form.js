import React, { useState } from "react";
import Introduction from "Components/Introduction";
import FirstQuestion from "Components/FirstQuestion";
import SecondQuestion from "Components/SecondQuestion";
import ThirdQuestion from "Components/ThirdQuestion";
import Summary from "Components/Summary";

const Form = () => {
  const [step, setStep] = useState(1);

  if (step === 1) {
    return (
      <div>
        <Introduction />
        <button onClick={() => setStep(step + 1)}>Start your engines!</button>
      </div>
    );
  } else if (step === 2) {
    return (
      <div>
        <FirstQuestion />
        <button onClick={() => setStep(step + 1)}>next question</button>
      </div>
    );
  } else if (step === 3) {
    return (
      <div>
        <SecondQuestion />
        <button onClick={() => setStep(step + 1)}>next question</button>
      </div>
    );
  } else if (step === 4) {
    return (
      <div>
        <ThirdQuestion />
        <button onClick={() => setStep(step + 1)}>next question</button>
      </div>
    );
  } else if (step === 5) {
    return (
      <div>
        <Summary />
        <button onClick={() => setStep(step - 4)}>Amen!</button>
      </div>
    );
  }
};
export default Form;
