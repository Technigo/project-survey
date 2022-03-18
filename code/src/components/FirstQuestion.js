import React from 'react';

const FirstQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {
	// const { nameInput, onNameInputChange } = props;

	return (
		<form className="form">
			<label>Type your name</label>
			<input
				id="nameInput"
				type="text"
				value={nameInput}
				onChange={onNameInputChange}
			/>
			<button onClick={onStepChange}
			className='button'>Next questions</button>
		</form>
	);
};

export default FirstQuestion;