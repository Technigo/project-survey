import React, { useState } from 'react';

import StartScreen from './StartScreen';
import FirstQuestion from './FirstQuestion';
import SecondQuestion from './SecondQuestion';
import ThirdQuestion from './ThirdQuestion';
import FourthQuestion from './FourthQuestion';
import FifthQuestion from './FifthQuestion';
import Overview from './Overview';


const Form = () => {

	const [nameInput, setNameInput] = useState('');
	const [emailInput, setEmailInput] = useState('');
	const [countryInput, setCountryInput] = useState('');
	const [ageInput, setAgeInput] = useState('');
	const [moodInput, setMoodInput] = useState('');


	const [step, setStep] = useState(0);

	const onNameInputChange = (event) => {
		setNameInput(event.target.value);
	};

	const onEmailInputChange = (event) => {
		setEmailInput(event.target.value);
	};

	const onCountryInputChange = (event) => {
		setCountryInput(event.target.value);
	};

	const onAgeInputChange = (selectRadioBtn) => {
		setAgeInput(selectRadioBtn);
	};

	const onMoodInputChange = (event) => {
		setMoodInput(event.target.value);
	};

	const onStepChange = () => {
			setStep(step + 1);

	};

	const onPreviousQuestionChange = () => {
		setStep(step - 1);
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
					email={emailInput}
					onEmailInputChange={onEmailInputChange}
					onStepChange={onStepChange}
					onPreviousQuestionChange={onPreviousQuestionChange}
				/>
			)}
			{step === 3 && (
				<ThirdQuestion
					countryInput={countryInput}
					onCountryInputChange={onCountryInputChange}
					onStepChange={onStepChange}
					onPreviousQuestionChange={onPreviousQuestionChange}
				/>
			)}
			{step === 4 && (
				<FourthQuestion
					ageInput={ageInput}
					onAgeInputChange={onAgeInputChange}
					onStepChange={onStepChange}
					onPreviousQuestionChange={onPreviousQuestionChange}
				/>
			)}
			{step === 5 && (
				<FifthQuestion
					moodInput={moodInput}
					onMoodInputChange={onMoodInputChange}
					onStepChange={onStepChange}
					onPreviousQuestionChange={onPreviousQuestionChange}
				/>
			)}
			{step === 6 && (
				<Overview 
					nameInput={nameInput} 
					countryInput={countryInput} 
					ageInput={ageInput} 
					emailInput={emailInput}
					moneyInput={moodInput}
				/>
			)}
		</main>


		
	)
 }


export default Form;

