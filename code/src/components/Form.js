import React, { useState } from "react";
import { FirstQuestion } from "./FirstQuestion";
import { SecondQuestion } from "./SecondQuestion";
import { ThirdQuestion } from "./ThirdQuestion";
import { FourthQuestion } from "./FourthQuestion";
import { Overview } from "./Overview";

const Form = () => {
	const [nameInput, setNameInput] = useState("");
	const [ageInput, setAgeInput] = useState();
	const [streamingInput, setStreamingInput] = useState("");
	const [genresInput, setGenresInput] = useState(false);
	const [step, setStep] = useState(1);

	const onNameInputChange = (event) => {
		setNameInput(event.target.value);
	};

	const onAgeInputChange = (event) => {
		setAgeInput(event.target.value);
	};

	const onStreamingInputChange = (event) => {
		setStreamingInput(event.target.value);
	};

	const onGenresInputChange = (event) => {
		setGenresInput(event.target.checked);
	};

	const nextQuestion = () => {
		setStep(step + 1);
	};

	if (step === 1) {
		// prettier-ignore
		return (
    <FirstQuestion
      nameInput={nameInput}
      onNameInputChange={onNameInputChange}
      nextQuestion={nextQuestion}
    />
    );
	} else if (step === 2) {
		// prettier-ignore
		return (
    <SecondQuestion
      ageInput={ageInput}
      onAgeInputChange={onAgeInputChange}
      nextQuestion={nextQuestion}
    />
    );
	} else if (step === 3) {
		// prettier-ignore
		return (
    <ThirdQuestion
      streamingInput={streamingInput}
      onStreamingInputChange={onStreamingInputChange}
      nextQuestion={nextQuestion}
    />
    );
	} else if (step === 4) {
		// prettier-ignore
		return (
	  <FourthQuestion
			genresInput={genresInput}
			onGenresInputChange={onGenresInputChange}
			nextQuestion={nextQuestion}
	  />
    );
	} else if (step === 5) {
		// prettier-ignore
		return (
	  <Overview
	    nameInput={nameInput}
	    ageInput={ageInput}
	    streamingInput={streamingInput}
			genresInput={genresInput}
	  />
    );
	}
};

export default Form;
