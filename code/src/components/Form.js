import React, { useState } from 'react';

import Intro from './Intro';
import FirstQuestion from './FirstQuestion';
import SecondQuestion from './SecondQuestion';
import ThirdQuestion from './ThirdQuestion';
import Summary from './Summary';

const Form = () => {
	const [wordInput, setWordInput] = useState('');
	const [selectInput, setSelectInput] = useState('');
	const [radioInput, setRadioInput] = useState('');

	const [step, setStep] = useState(1);

	const onWordInputChange = (event) => {
		setWordInput(event.target.value);
	};

	const onSelectInputChange = (event) => {
		setSelectInput(event.target.value);
	};

	const onRadioInputChange = (event) => {
		setRadioInput(event.target.value);
	};

	const onStepChange = () => {
		setStep(step + 1);
	};

	const onStepBack = () => {
		setStep(step - 1);
	};

	return (
		<div>
			{step === 1 && <Intro onStepChange={onStepChange} />}
			{step === 2 && (
				<FirstQuestion
					wordInput={wordInput}
					onWordInputChange={onWordInputChange}
					onStepChange={onStepChange}
					onStepBack={onStepBack}
				/>
			)}
			{step === 3 && (
				<SecondQuestion
					selectInput={selectInput}
					onSelectInputChange={onSelectInputChange}
					onStepChange={onStepChange}
					onStepBack={onStepBack}
				/>
			)}
			{step === 4 && (
				<ThirdQuestion
					radioInput={radioInput}
					onRadioInputChange={onRadioInputChange}
					onStepChange={onStepChange}
					onStepBack={onStepBack}
				/>
			)}
			{step === 5 && (
				<Summary
					wordInput={wordInput}
					selectInput={selectInput}
					radioInput={radioInput}
				/>
			)}
		</div>
	);
};

export default Form;
