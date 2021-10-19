import React from 'react';

const FirstQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {
	// const { nameInput, onNameInputChange } = props;

	return (
		<form className="question1-wrapper">
			<label htmlFor="nameInput">Type your name</label>
			<input
				id="nameInput"
				type="text"
				value={nameInput}
				onChange={onNameInputChange}

			/>
		</form>
	);
};

export default FirstQuestion;
