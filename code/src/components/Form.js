import React, { useState } from "react";

import Intro from "./Intro";
import Name from "./Name";
import FirstQue from "./FirstQue";
import SecondQue from "./SecondQue";
import Summary from "./Summary";

const Form = () => {
  const [nameInput, setNameInput] = useState("");
  const [FavoriteInput, setFavoriteInput] = useState("");
  const [HolidayInput, setHolidayInput] = useState("");
  const [step, setStep] = useState(0);

  const NameInputChange = (event) => {
    setNameInput(event.target.value);
  };
  const FavoriteInputChange = (event) => {
    setFavoriteInput(event);
  };
  const HolidayInputChange = (event) => {
    setHolidayInput(event);
  };

  const Change = () => {
    setStep(step + 1);
  };

  return (
    <div className="questions">
      {step === 0 && <Intro Change={Change} />}
      {step === 1 && (
        <Name
          nameInput={nameInput}
          NameInputChange={NameInputChange}
          Change={Change}
        />
      )}
      {step === 2 && (
        <FirstQue
          FavoriteInput={FavoriteInput}
          FavoriteInputChange={FavoriteInputChange}
          Change={Change}
        />
      )}
      {step === 3 && (
        <SecondQue
          HolidayInput={HolidayInput}
          HolidayInputChange={HolidayInputChange}
          Change={Change}
        />
      )}
      {step === 4 && (
        <Summary
          nameInput={nameInput}
          FavoriteInput={FavoriteInput}
          HolidayInput={HolidayInput}
        />
      )}{" "}
    </div>
  );
};
export default Form;
