import React from 'react';

const FirstQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {

	return (
		<form className="form radio">
			<label tabindex='0'>Type your name</label>
			<input
				id="nameInput"
				type="text"
				value={nameInput}
				onChange={onNameInputChange}
			/>
			<button onClick={onStepChange}
			className='button'>Next question</button>
		</form>
	);
};

export default FirstQuestion;