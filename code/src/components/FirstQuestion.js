import React from 'react';

const FirstQuestion = ({ nameInput, onNameInputChange }) => {
	// const { nameInput, onNameInputChange } = props;

	return (
		<div className="form-row">
			<label htmlFor="nameInput">Type your name</label>
			<input
				id="nameInput"
				type="text"
				value={nameInput}
				onChange={onNameInputChange}
			/>
		</div>
	);
};

export default FirstQuestion;
