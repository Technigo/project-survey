import React, { useState } from 'react';

import FirstQuestion from './FirstQuestion';
import SecondQuestion from './SecondQuestion';
import Overview from './Overview';

const Form = () => {
	const [nameInput, setNameInput] = useState('');
	const [surnameInput, setSurnameInput] = useState('');
	const [step, setStep] = useState(1);

	const onNameInputChange = (event) => {
		setNameInput(event.target.value);
	};

	const onSurnameInputChange = (event) => {
		setSurnameInput(event.target.value);
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
				<Overview ameInput={nameInput} surnameInput={surnameInput} />
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
