import React, { useState } from "react";
import Frontpage from "components/Frontpage";
import FirstQuestion from "components/FirstQuestion";
import SecondQuestion from "components/SecondQuestion";
import ThirdQuestion from "components/ThirdQuestion";
import Overview from "components/Overview";
import AuRevoir from "components/AuRevoir";

const Form = () => {
  const [step, setStep] = useState(1);
  const [radioChecked, setRadioChecked] = useState("");
  const [selectOption, setSelectOption] = useState("");

  if (step === 1) {
    return (
      <div>
        <Frontpage />
        <button onClick={() => setStep(step + 1)}>Prepare yourself!</button>
      </div>
    );
  } else if (step === 2) {
    return (
      <div>
        <FirstQuestion
          radioChecked={radioChecked}
          setRadioChecked={setRadioChecked}
        />
        <button onClick={() => setStep(step + 1)}>Next question</button>
      </div>
    );
  } else if (step === 3) {
    return (
      <div>
        <SecondQuestion
          selectOption={selectOption}
          setSelectOption={setSelectOption}
        />
        <button onClick={() => setStep(step + 1)}>Next question</button>
      </div>
    );
  } else if (step === 4) {
    return (
      <div>
        <ThirdQuestion
          radioChecked={radioChecked}
          setRadioChecked={setRadioChecked}
        />
        <button onClick={() => setStep(step + 1)}>Next question</button>
      </div>
    );
  } else if (step === 5) {
    return (
      <div>
        <Overview selectOption={selectOption} radioChecked={radioChecked} />
        <button onClick={() => setStep(step + 1)}>Next</button>
      </div>
    );
  } else if (step === 6) {
    return (
      <div>
        <AuRevoir />
        <button onClick={() => setStep(1)}>Bye bye now!</button>
      </div>
    );
  }
};
export default Form;
