import React, { useState } from 'react';

import FirstQuestion from './FirstQuestion';
import SecondQuestion from './SecondQuestion';
import ThirdQuestion from './ThirdQuestion';
import Summary from './Summary';

const Form = () => {
	const [nameInput, setNameInput] = useState('');
	const [selectInput, setSelectInput] = useState('');
	const [radioInput, setRadioInput] = useState('');

	const [step, setStep] = useState(1);

	const onNameInputChange = (event) => {
		setNameInput(event.target.value);
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

	return (
		<div>
			{step === 1 && (
				<FirstQuestion
					nameInput={nameInput}
					onNameInputChange={onNameInputChange}
					onStepChange={onStepChange}
				/>
			)}
			{step === 2 && (
				<SecondQuestion
					selectInput={selectInput}
					onSelectInputChange={onSelectInputChange}
					onStepChange={onStepChange}
				/>
			)}
			{step === 3 && (
				<ThirdQuestion
					radioInput={radioInput}
					onRadioInputChange={onRadioInputChange}
					onStepChange={onStepChange}
				/>
			)}
			{step === 4 && (
				<Summary
					nameInput={nameInput}
					selectInput={selectInput}
					radioInput={radioInput}
				/>
			)}
		</div>
	);
};

export default Form;
