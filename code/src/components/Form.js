import React, { useState } from 'react';

import FirstQuestion from './FirstQuestion';
import SecondQuestion from './SecondQuestion';
import ThirdQuestion from './ThirdQuestion';
import FourthQuestion from './FourthQuestion';
import Overview from './Overview';

const Form = () => {
	const [nameInput, setNameInput] = useState('');
	const [surnameInput, setSurnameInput] = useState('');
	const [weakness, setWeakness] = useState('HTML')
	const [strength, setStrength] = useState('HTML')
	const [step, setStep] = useState(1);

	const onNameInputChange = (event) => {
		setNameInput(event.target.value);
	};

	const onSurnameInputChange = (event) => {
		setSurnameInput(event.target.value);
	};

	const onWeaknessChange = (code) => {
		setWeakness(code)
	}
	
	const onStrengthChange = (strength) => {
		setStrength(strength)
	}
	const onStepChange = () => {
		setStep(step + 1);
	};

	// v1
	return (
		<div className="wrapper">
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
				<ThirdQuestion
					weakness={weakness}
					onWeaknessChange={onWeaknessChange}
					onStepChange={onStepChange}
				/>
			)}
			{step === 4 && (
				<FourthQuestion
					strength={strength}
					onStrengthChange={onStrengthChange}
					onStepChange={onStepChange}
				/>
			)}
			{step === 5 && (
				<Overview nameInput={nameInput} surnameInput={surnameInput} weakness={weakness} strength={strength} />
			)}
		</div>
	);

	// v2
	// if (step === 1) {
	// 	return (
	// 		<FirstQuestion
	// 			nameInput={nameInput}
	// 			onNameInputChange={onNameInputChange}
	// 			onStepChange={onStepChange}
	// 		/>
	// 	);
	// } else if (step === 2) {
	// 	return (
	// 		<SecondQuestion
	// 			surname={surnameInput}
	// 			onSurnameInputChange={onSurnameInputChange}
	// 			onStepChange={onStepChange}
	// 		/>
	// 	);
	// } else if (step === 3) {
	// 	return <Overview nameInput={nameInput} surnameInput={surnameInput} />;
	// }

	// v3
	// return (
	// 	<div>
	// 		<form>
	// 			<label htmlFor="nameInput">Type your name</label>
	// 			<input
	// 				id="nameInput"
	// 				type="text"
	// 				value={nameInput}
	// 				onChange={onNameInputChange}
	// 			/>

	// 			<label htmlFor="surnameInput">Type your surname</label>
	// 			<input
	// 				id="surnameInput"
	// 				type="text"
	// 				value={surnameInput}
	// 				onChange={onSurnameInputChange}
	// 			/>
	// 		</form>

	// <section>
	// 	<h2>My values from form :</h2>
	// 	<p>Name : {nameInput}</p>
	// 	<p>Surname : {surnameInput}</p>
	// </section>
	// 	</div>
	// );
};

export default Form;
