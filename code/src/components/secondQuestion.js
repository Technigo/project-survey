import React from 'react';

const SecondQuestion = ({
	surnameInput,
	onSurnameInputChange,
	onStepChange,
}) => {
	return (
		<form className="question-container">
			<label htmlFor="surnameInput">What's your surname?</label>
			<input
				id="surnameInput"
				type="text"
				value={surnameInput}
				onChange={onSurnameInputChange}
			/>
			<button className="submit-button" onClick={onStepChange}>Next question</button>
		</form>
	);
};

export default SecondQuestion;