import React from 'react';

const FifthQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {
	// const { nameInput, onNameInputChange } = props;

	return (
		<form className="form-container5" tabIndex="5">
			<label htmlFor="nameInput">
				<h1>Type your name and surname</h1>
			</label>
			<input
				id="nameInput"
				type="text"
				value={nameInput}
				onChange={onNameInputChange}
			/>
			<button
				className="button"
				disabled={nameInput === ''} // to make sure you are not allowing button to be pressed if input is empty.
				onClick={onStepChange}
			>
				Check Out
			</button>
		</form>
	);
};

export default FifthQuestion;
