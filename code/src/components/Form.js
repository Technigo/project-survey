import React, { useState } from 'react';

import StartScreen from './StartScreen';
import FirstQuestion from './FirstQuestion';
import SecondQuestion from './SecondQuestion';
import Overview from './Overview';

const Form = () => {

	const [nameInput, setNameInput] = useState('');
	const [emailInput, setEmailInput] = useState('');
	const [step, setStep] = useState(0);


	const onNameInputChange = (event) => {
		setNameInput(event.target.value);
	};

	const onEmailInputChange = (event) => {
		setEmailInput(event.target.value);
	};

	const onStepChange = () => {
		setStep(step + 1);
	};

	return (
		<main className="main-container">
            {step === 0 && (
                <StartScreen
					onStepChange={onStepChange}
				/>
			)}
			{step === 1 && (
				<FirstQuestion
					nameInput={nameInput}
					onNameInputChange={onNameInputChange}
					onStepChange={onStepChange}
				/>
			)}
			{step === 2 && (
				<SecondQuestion
					surname={emailInput}
					onSurnameInputChange={onEmailInputChange}
					onStepChange={onStepChange}
				/>
			)}
			{step === 3 && (
				<Overview nameInput={nameInput} />
			)}
		</main>

	)

 }

export default Form;