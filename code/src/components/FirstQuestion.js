import React from 'react';

const FirstQuestion = ({ nameInput, onNameInputChange }) => {
	// const { nameInput, onNameInputChange } = props;

	return (
		<div className="form-row">
			<label htmlFor="nameInput"><p>Type your name</p></label>
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
