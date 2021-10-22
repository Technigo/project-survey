import React from 'react';

const FifthQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {
	// const { nameInput, onNameInputChange } = props;

	return (
		<form className="form-container5" tabIndex="5">
			<label htmlFor="nameInput">
				<h1>Type your name</h1>
			</label>
			<input
				id="nameInput"
				type="text"
				value={nameInput}
				onChange={onNameInputChange}
			/>
			<button
				className="button"
				disabled={nameInput === ''} // if input is empty user can't proceed.
				onClick={onStepChange}
			>
				Check Out
			</button>
		</form>
	);
};

export default FifthQuestion;
