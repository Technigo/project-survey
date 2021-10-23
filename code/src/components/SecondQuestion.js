import React from 'react';

const SecondQuestion = ({
	surnameInput,
	onSurnameInputChange,
	onStepChange,
}) => {
	return (
		<>
			<form>
				<label htmlFor="surnameInput">
					Whats the best place you've ever been to?
				</label>
				<input
					id="surnameInput"
					type="text"
					value={surnameInput}
					onChange={onSurnameInputChange}
				/>
				<button disabled={surnameInput === ''} onClick={onStepChange}>
					Next question
				</button>
			</form>
		</>
	);
};

export default SecondQuestion;
