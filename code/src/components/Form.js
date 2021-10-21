import React, { useState } from "react";
import StartPage from "./StartPage";
import FirstQuestion from "./FirstQuestion";
import SecondQuestion from "./SecondQuestion";
import ThirdQuestion from "./ThirdQuestion";
import FourthQuestion from "./FourthQuestion";
import Summary from "./Summary";
import Progressbar from "./ProgressBar";

const Form = () => {
  const [nameInput, setNameInput] = useState("");
  const [interestInput, setInterestInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [moodInput, setMoodInput] = useState(80);
  const [step, setStep] = useState(0);
  // const [value, updateValue] = useState(20);

  const onNameInputChange = event => {
    setNameInput(event.target.value);
  };

  const onInterestInputChange = event => {
    setInterestInput(event.target.value);
  };

  const onAgeInputChange = event => {
    setAgeInput(event.target.value);
  };

  const onMoodInputChange = event => {
    setMoodInput(event.target.value);
  };

  const onStepChange = () => {
    setStep(step + 1);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onStepChange();
  };

  const numberOfQuestions = 5;

  // const onUpdateValueChange = () => {
  //   updateValue(value + 20);
  // };
  // good practice to put funtion up here

  return (
    <>
      <main className="main">
        {/* <div aria-label="" className="container"> */}
        {step === 0 && (
          <section className="start-page-container">
            <StartPage onStepChange={onStepChange} />
          </section>
        )}
        {step === 1 && (
          <section>
            <FirstQuestion
              nameInput={nameInput}
              onNameInputChange={onNameInputChange}
              handleSubmit={handleSubmit}
            />
            <Progressbar
              // onUpdateValueChange={onUpdateValueChange}
              done={(step / numberOfQuestions) * 100}
            />
          </section>
        )}
        {step === 2 && (
          <section>
            <SecondQuestion
              interestInput={interestInput}
              onInterestInputChange={onInterestInputChange}
              handleSubmit={handleSubmit}
            />
            <Progressbar done={(step / numberOfQuestions) * 100} />
          </section>
        )}
        {step === 3 && (
          <section>
            <ThirdQuestion
              ageInput={ageInput}
              onAgeInputChange={onAgeInputChange}
              handleSubmit={handleSubmit}
            />
            <Progressbar done={(step / numberOfQuestions) * 100} />
          </section>
        )}
        {step === 4 && (
          <section>
            <FourthQuestion
              moodInput={moodInput}
              onMoodInputChange={onMoodInputChange}
              handleSubmit={handleSubmit}
            />
            <Progressbar done={(step / numberOfQuestions) * 100} />
          </section>
        )}
        {step === 5 && (
          <section className="summary-container">
            <Summary
              nameInput={nameInput}
              interestInput={interestInput}
              ageInput={ageInput}
            />
            <Progressbar done={(step / numberOfQuestions) * 100} />
          </section>
        )}
        {/* </div>  */}
      </main>
      <footer class="footer">
        <p>by Elin Diczfalusy </p>
        <p> 2021 Student project via Technigo</p>
      </footer>
      ;
    </>
  );
};

export default Form;
