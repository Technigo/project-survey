import React, { useState } from "react";

// imported Components
import NameInput from "components/NameInput";
import EmailInput from "components/EmailInput";
import LocationDropDown from "components/LocationDropDown";
// import QuestionFour from "components/AgeRadioBtn";
import Summary from "./Summary";
import AgeRadioBtn from "components/AgeRadioBtn";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [locations, setLocations] = useState("");
  const [ageGroup, setAgeGroup] = useState();
  const [isSummaryDisplayed, setIsSummaryDisplayed] = useState(false);
  const [step, setStep] = useState(1);

  const handleNameInputChange = (event) => {
    setName(event.target.value);
  };
  const handleSecondInputChange = (event) => {
    setEmail(event.target.value);
  };
  const handleThirdInputChange = (event) => {
    setLocations(event.target.value);
  };
  const handleFourthInputChange = (event) => {
    setAgeGroup(event.target.value);
  };

  const onStepChange = (event) => {
    event.preventDefault();
    setStep(step + 1);
  };

  return (
    <section>
      <div className="content-box">
        <div>
          {step === 1 && (
            <NameInput
              name={name}
              onInputChange={handleNameInputChange}
              onStepChange={onStepChange}
            />
          )}
          {step === 2 && (
            <EmailInput
              email={email}
              onSecondInputChange={handleSecondInputChange}
              onStepChange={onStepChange}
            />
          )}
          {step === 3 && (
            <LocationDropDown
              location={locations}
              onThirdInputChange={handleThirdInputChange}
              onStepChange={onStepChange}
            />
          )}
          {step === 4 && (
            <AgeRadioBtn
              group={ageGroup}
              handleFourthInputChange={handleFourthInputChange}
              onStepChange={onStepChange}
            />
          )}
          {step === 5 && (
            <Summary
              name={name}
              email={email}
              location={locations}
              locations={locations}
              ageGroup={ageGroup}
            />
          )}
        </div>
      </div>

      {/* <div className="content-box">
        <NameInput name={name} onInputChange={handleNameInputChange} />
        <EmailInput
          email={email}
          onSecondInputChange={handleSecondInputChange}
        />
        <LocationDropDown
          location={locations}
          onThirdInputChange={handleThirdInputChange}
        />
        <AgeRadioBtn
          group={ageGroup}
          handleFourthInputChange={handleFourthInputChange}
        />
        <button className="btn" onClick={() => setIsSummaryDisplayed(true)}>
          Show Summary!
        </button>
      </div>
      {isSummaryDisplayed && (
        <Summary
          name={name}
          email={email}
          location={locations}
          locations={locations}
          ageGroup={ageGroup}
        />
      )} */}
    </section>
  );
};
export default Form;
