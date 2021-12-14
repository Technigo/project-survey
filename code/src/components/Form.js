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
	const [frameworkInput, setFrameworkInput] = useState("");
	const [problemSolvingInput, setproblemSolvingInput] = useState("");
	const [backgroundInput, setBackgroundInput] = useState("");
	const [step, setStep] = useState(0);

	const onLanguageInputChange = (event) => {
		setlanguageInput(event.target.value);
	};

	const onFrameworkInputChange = (event) => {
		setFrameworkInput(event.target.value);
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
		return <IntroQuestion nextQuestion={nextQuestion} />;
	} else if (step === 1) {
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
		return (
			<SubmitQuestion
				nextQuestion={nextQuestion}
				previousQuestion={previousQuestion}
			/>
		);
	} else if (step === 6) {
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
