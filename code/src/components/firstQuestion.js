import React from 'react';

const FirstQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {

	return (
		<form className="question-container">
			<label htmlFor="nameInput">What's your name?</label>
			<input
				id="nameInput"
				type="text" 
				value={nameInput}
				onChange={onNameInputChange}
			/>
			<button className="submit-button" onClick={onStepChange}>Next question</button>
		</form>
	);
};

export default FirstQuestion;