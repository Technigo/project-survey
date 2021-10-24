import React, { useState } from "react";
import { IntroQuestion } from "./IntroQuestion";
import { FirstQuestion } from "./FirstQuestion";
import { SecondQuestion } from "./SecondQuestion";
import { ThirdQuestion } from "./ThirdQuestion";
import { FourthQuestion } from "./FourthQuestion";
import { Overview } from "./Overview";
import { SubmitQuestion } from "./SubmitQuestion";

const Form = () => {
	const [languageInput, setlanguageInput] = useState("");
	const [frameworkInput, FrameworkInput] = useState("");
	const [problemSolvingInput, setproblemSolvingInput] = useState("");
	const [backgroundInput, setBackgroundInput] = useState("");
	const [step, setStep] = useState(0);

	const onLanguageInputChange = (event) => {
		setlanguageInput(event.target.value);
	};

	const onFrameworkInputChange = (event) => {
		FrameworkInput(event.target.value);
	};

	const onProblemSolvingChange = (event) => {
		setproblemSolvingInput(event.target.value);
	};

	const onBackgroundInputChange = (event) => {
		setBackgroundInput(event.target.value);
	};

	const nextQuestion = (event) => {
		setStep(step + 1);
		event.preventDefault();
	};

	const previousQuestion = (event) => {
		setStep(step - 1);
		event.preventDefault();
	};

	if (step === 0) {
		// prettier-ignore
		return (
	  <IntroQuestion
			nextQuestion={nextQuestion}
		/>
    );
	} else if (step === 1) {
		// prettier-ignore
		return (
    <FirstQuestion
      languageInput={languageInput}
      onLanguageInputChange={onLanguageInputChange}
      nextQuestion={nextQuestion}
			previousQuestion={previousQuestion}
			step={step}
    />
    );
	} else if (step === 2) {
		// prettier-ignore
		return (
    <SecondQuestion
			frameworkInput={frameworkInput}
      onFrameworkInputChange={onFrameworkInputChange}
      nextQuestion={nextQuestion}
			previousQuestion={previousQuestion}
			step={step}
    />
    );
	} else if (step === 3) {
		// prettier-ignore
		return (
    <ThirdQuestion
			problemSolvingInput={problemSolvingInput}
      onProblemSolvingChange={onProblemSolvingChange}
      nextQuestion={nextQuestion}
			previousQuestion={previousQuestion}
			step={step}
    />
    );
	} else if (step === 4) {
		// prettier-ignore
		return (
	  <FourthQuestion
			backgroundInput={backgroundInput}
			onBackgroundInputChange={onBackgroundInputChange}
			nextQuestion={nextQuestion}
			previousQuestion={previousQuestion}
			step={step}
	  />
    );
	} else if (step === 5) {
		// prettier-ignore
		return (
	  <SubmitQuestion
			nextQuestion={nextQuestion}
			previousQuestion={previousQuestion}
		/>
    );
	} else if (step === 6) {
		// prettier-ignore
		return (
	  <Overview
			languageInput={languageInput}
	    frameworkInput={frameworkInput}
	    problemSolvingInput={problemSolvingInput}
			backgroundInput={backgroundInput}
	  />
    );
	}
};

export default Form;

// return (
// 	<div>
// 		{step === 1 && (
// 			// prettier-ignore
// 			<FirstQuestion
// 				nameInput={nameInput}
// 				onNameInputChange={onNameInputChange}
// 				nextQuestion={nextQuestion}
// 			/>
// 		)}
// 		{step === 2 && (
// 			// prettier-ignore
// 			<SecondQuestion
// 				ageInput={ageInput}
// 				onAgeInputChange={onAgeInputChange}
// 				nextQuestion={nextQuestion}
// 			/>
// 				)}
// 		{step === 3 && (
// 			// prettier-ignore
// 			<ThirdQuestion
// 				streamingInput={streamingInput}
// 				onStreamingInputChange={onStreamingInputChange}
// 				nextQuestion={nextQuestion}
// 			/>
// 		)}
// 		{step === 4 && (
// 			// prettier-ignore
// 			<FourthQuestion
// 				genresInput={genresInput}
// 				onGenresInputChange={onGenresInputChange}
// 				nextQuestion={nextQuestion}
// 			/>
// 		)}
// 		{step === 5 && (
// 			// prettier-ignore
// 			<Overview
// 				nameInput={nameInput}
// 				ageInput={ageInput}
// 				streamingInput={streamingInput}
// 				// genresInput={genresInput}
// 			/>
// 		)}
// 	</div>
// );
