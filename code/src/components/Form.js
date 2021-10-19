import React, { useState } from "react";
import { FirstQuestion } from "./FirstQuestion";
import { SecondQuestion } from "./SecondQuestion";
import { ThirdQuestion } from "./ThirdQuestion";
import { Overview } from "./Overview";

const Form = () => {
	const [firstNameInput, setFirstNameInput] = useState("");
	const [lastNameInput, setLastNameInput] = useState("");
	const [ageInput, setAgeInput] = useState("");
	const [step, setStep] = useState(1);

	const onFirstNameInputChange = (event) => {
		setFirstNameInput(event.target.value);
	};

	const onLastNameInputChange = (event) => {
		setLastNameInput(event.target.value);
	};

	const onAgeInputChange = (event) => {
		setAgeInput(event.target.value);
	};

	const nextQuestion = () => {
		setStep(step + 1);
	};

	if (step === 1) {
		// prettier-ignore
		return (
    <FirstQuestion
      firstNameInput={firstNameInput}
      onFirstNameInputChange={onFirstNameInputChange}
      nextQuestion={nextQuestion}
    />
    );
	} else if (step === 2) {
		// prettier-ignore
		return (
    <SecondQuestion
      lastNameInput={lastNameInput}
      onLastNameInputChange={onLastNameInputChange}
      nextQuestion={nextQuestion}
    />
    );
	} else if (step === 3) {
		// prettier-ignore
		return (
    <ThirdQuestion
      ageInput={ageInput}
      onAgeInputChange={onAgeInputChange}
      nextQuestion={nextQuestion}
    />
    );
	} else if (step === 4) {
		// prettier-ignore
		return (
	  <Overview
	    firstNameInput={firstNameInput}
	    lastNameInput={lastNameInput}
	    ageInput={ageInput}
	  />
    );
	}
};

export default Form;
