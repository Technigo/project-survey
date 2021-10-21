import React from 'react';
import './questions.css';

const SecondQuestion = ({
	surnameInput,
	onSurnameInputChange,
	onStepChange
}) => {

	return (
		<form className="question-container">
			<label htmlFor="surnameInput">What's your surname?</label>
			<input className="question-input"
				id="surnameInput"
				type="text"
				value={surnameInput}
				onChange={onSurnameInputChange}
			/>
			<button className="submit-button" 
			    disabled={surnameInput === undefined} 
				onClick={onStepChange}>Next question
			</button>
		</form>
	);
}; 

export default SecondQuestion;