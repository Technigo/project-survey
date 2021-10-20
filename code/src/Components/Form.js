import React, { useState } from "react";
import Introduction from "Components/Introduction";
import FirstQuestion from "Components/FirstQuestion";
import SecondQuestion from "Components/SecondQuestion";
import ThirdQuestion from "Components/ThirdQuestion";
import Summary from "Components/Summary";
import Goodbye from "Components/Goodbye";

const Form = () => {
  const [step, setStep] = useState(1);
  const [radioChecked, setRadioChecked] = useState("");
  const [selectOption, setSelectOption] = useState("yes");
  const [fundamentalInput, setFundamentalInput] = useState("");

  // const onRadioChecked =

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
        <FirstQuestion
          radioChecked={radioChecked}
          setRadioChecked={setRadioChecked}
        />
        <button onClick={() => setStep(step + 1)}>Sashay to next</button>
      </div>
    );
  } else if (step === 3) {
    return (
      <div>
        <SecondQuestion
          selectOption={selectOption}
          setSelectOption={setSelectOption}
        />
        <button onClick={() => setStep(step + 1)}>Sashay to next</button>
      </div>
    );
  } else if (step === 4) {
    return (
      <div>
        <ThirdQuestion
          fundamentalInput={fundamentalInput}
          setFundamentalInput={setFundamentalInput}
        />
        <button onClick={() => setStep(step + 1)}>Sashay to next</button>
      </div>
    );
  } else if (step === 5) {
    return (
      <div>
        <Summary fundamentalInput={fundamentalInput} />
        <button onClick={() => setStep(step + 1)}>Sashay to next</button>
      </div>
    );
  } else if (step === 6) {
    return (
      <div>
        <Goodbye />
        <button onClick={() => setStep(step - 5)}>Amen!</button>
      </div>
    );
  }
};
export default Form;
