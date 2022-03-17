import React from 'react';

const FirstQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {
	return (
		<>
			<div>Welcome to survey!</div>
			<div>
				<label htmlFor="name">Type your name</label>
				<input
					id="name"
					type="text"
					value={nameInput}
					onChange={onNameInputChange}
				/>
			</div>
			<button onClick={onStepChange}>Next</button>
		</>
	);
};

export default FirstQuestion;
