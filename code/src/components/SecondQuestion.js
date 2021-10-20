import React from 'react';

const SecondQuestion = ({
	surnameInput,
	onSurnameInputChange,
	onStepChange,
}) => {
	return (
		<form>
			<label htmlFor="surnameInput">Type your surname</label>
			<input
				id="surnameInput"
				type="text"
				value={surnameInput}
				onChange={onSurnameInputChange}
			/>
			<button onClick={onStepChange}>See overview</button>
		</form>
	);
};

export default SecondQuestion;