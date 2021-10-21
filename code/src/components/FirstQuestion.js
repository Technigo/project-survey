import React from 'react';

const FirstQuestion = ({ nameInput, onNameInputChange }) => {
	// const { nameInput, onNameInputChange } = props;

	return (
		<div className="form-row">
			<label htmlFor="nameInput"><h3>Bake someone happy!</h3></label>
			<input
				id="nameInput"
				type="text"
				placeholder="Type your name here"
				value={nameInput}
				onChange={onNameInputChange}
			/>
		</div>
	);
};

export default FirstQuestion;
