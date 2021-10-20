import React from 'react';

const FirstQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {
	return (
		<>
			<label htmlFor="nameInput">Type your name</label>
			<input
				id="nameInput"
				type="text"
				value={nameInput}
				onChange={onNameInputChange}
			/>
			<button onClick={onStepChange}>Next question</button>
		</>
	);
};

export default FirstQuestion;
