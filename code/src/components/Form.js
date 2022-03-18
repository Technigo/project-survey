import React, { useState } from "react";

// imported Components
import NameInput from "components/NameInput";
import EmailInput from "components/EmailInput";
import LocationDropDown from "components/LocationDropDown";
import Summary from "./Summary";
import AgeRadioBtn from "components/AgeRadioBtn";
import IntroPage from "./IntroPage";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [locations, setLocations] = useState("");
  const [ageGroup, setAgeGroup] = useState();
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
          {step === 1 && <IntroPage onStepChange={onStepChange} />}
          {step === 2 && (
            <NameInput
              name={name}
              onNameInputChange={handleNameInputChange}
              onStepChange={onStepChange}
            />
          )}
          {step === 3 && (
            <EmailInput
              email={email}
              onSecondInputChange={handleSecondInputChange}
              onStepChange={onStepChange}
            />
          )}
          {step === 4 && (
            <LocationDropDown
              location={locations}
              onThirdInputChange={handleThirdInputChange}
              onStepChange={onStepChange}
            />
          )}
          {step === 5 && (
            <AgeRadioBtn
              group={ageGroup}
              handleFourthInputChange={handleFourthInputChange}
              onStepChange={onStepChange}
            />
          )}
          {step === 6 && (
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
    </section>
  );
};
export default Form;
