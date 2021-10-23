import React from 'react';

const FifthQuestion = ({
	nameInput,
	onNameInputChange,
	onStepChange,
	onMinusStepChange,
}) => {
	// const { nameInput, onNameInputChange } = props;

	return (
		<form className="form-container5" tabIndex="6">
			<label htmlFor="nameInput">
				<h1>Type your name</h1>
			</label>
			<input
				id="nameInput"
				type="text"
				value={nameInput}
				onChange={onNameInputChange}
			/>

			<div className="button-box">
				<button className="button" onClick={onMinusStepChange}>
					Previous
				</button>
				<button
					className="button"
					disabled={nameInput === ''}
					onClick={onStepChange}
				>
					Check Out
				</button>
			</div>
		</form>
	);
};

export default FifthQuestion;
