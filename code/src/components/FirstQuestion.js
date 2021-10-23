import React from 'react';

const FirstQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {
	return (
		<>
			<label htmlFor="nameInput">
				Please type your favorite cake! If you don't like cake-please type in
				another baked good that is your favorite!
			</label>
			<input
				id="nameInput"
				type="text"
				value={nameInput}
				onChange={onNameInputChange}
			/>
			<button disabled={nameInput === ''} onClick={onStepChange}>
				Next question
			</button>
		</>
	);
};

export default FirstQuestion;
