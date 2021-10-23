import React, { useState } from 'react';

import FirstQuestion from './FirstQuestion';
import SecondQuestion from './SecondQuestion';
import ThirdQuestion from './ThirdQuestion';
import FourthQuestion from './FourthQuestion';
import Overview from './Overview';

const Form = () => {
	const [nameInput, setNameInput] = useState('');
	const [surnameInput, setSurnameInput] = useState('');
	const [happiness, setHappiness] = useState('happy');
	const [flavour, setFlavour] = useState('');
	const [step, setStep] = useState(1);

	const onNameInputChange = (event) => {
		setNameInput(event.target.value);
	};

	const onSurnameInputChange = (event) => {
		setSurnameInput(event.target.value);
	};

	const onHappinessChange = (feeling) => {
		setHappiness(feeling);
	};

	const onFlavourChange = (flavour) => {
		setFlavour(flavour);
	};

	const onStepChange = () => {
		setStep(step + 1);
	};

	// veiw 1
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
					surnameInput={surnameInput}
					onSurnameInputChange={onSurnameInputChange}
					onStepChange={onStepChange}
				/>
			)}
			{step === 3 && (
				<ThirdQuestion
					happiness={happiness}
					onHappinessChange={onHappinessChange}
					onStepChange={onStepChange}
				/>
			)}

			{step === 4 && (
				<FourthQuestion
					flavour={flavour}
					onFlavourChange={onFlavourChange}
					onStepChange={onStepChange}
				/>
			)}
			{step === 5 && (
				<Overview
					nameInput={nameInput}
					surnameInput={surnameInput}
					happiness={happiness}
					flavour={flavour}
				/>
			)}
		</div>
	);
};

//veiw 2

// 	if (step === 1) {
// 		return (
// 			<FirstQuestion
// 				nameInput={nameInput}
// 				onNameInputChange={onNameInputChange}
// 				onStepChange={onStepChange}
// 			/>
// 		);
// 	} else if (step === 2) {
// 		return (
// 			<SecondQuestion
// 				surnameInput={surnameInput}
// 				onSurnameInputChange={onSurnameInputChange}
// 				onStepChange={onStepChange}
// 			/>
// 		);
// 	} else if (step === 3) {
// 		return <Overview nameInput={nameInput} surnameInput={surnameInput} />;
// 	}
// };
//
export default Form;
