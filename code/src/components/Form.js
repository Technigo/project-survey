import React, { useState } from 'react';

import FirstQuestion from './FirstQuestion';
import SecondQuestion from './SecondQuestion';
import RadioButton from './RadioButton';
import DropDown from './DropDown';
import Overview from './Overview'; 

const Form = () => {
	const [nameInput, setNameInput] = useState('');
	const [surnameInput, setSurnameInput] = useState('');
	const [ageInput, setAgeInput] = useState('');
	const [locationInput, setLocationInput] = useState('');
	const [step, setStep] = useState(1);

	const onNameInputChange = (event) => {
		setNameInput(event.target.value);
	};

	const onSurnameInputChange = (event) => {
		setSurnameInput(event.target.value);
	};

	const onAgeInputChange = (event) => {
		setAgeInput(event.target.value);
	};

	const onLocationInputChange = (event) => {
		setLocationInput(event.target.value);
	}

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
					surname={surnameInput}
					onSurnameInputChange={onSurnameInputChange}
					onStepChange={onStepChange}
				/>
			)}
           {step === 3 && (
				<RadioButton
				    ageInput={ageInput}
				    onAgeInputChange={onAgeInputChange}
				    onStepChange={onStepChange}
				/>
			)}
           {step === 4 && (
				<DropDown
					locationInput={locationInput}
					onLocationInputChange={onLocationInputChange}
					onStepChange={onStepChange}
				/> 
		   )}
			{step === 5 && (
				<Overview 
				    nameInput={nameInput} 
					surnameInput={surnameInput}
					ageInput={ageInput}  
					locationInput={locationInput}
				/>
			)}
		</div>
	);
};

export default Form;