import React from 'react';

const FirstQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {
	//const { nameInput, onNameInputChange } = props; // Object destructuring, to extract properties from objects and bind them to variables
	return (
		<form>
			<label htmlFor="nameInput">Type your name</label>
			<input
				id="nameInput" //connects to the HTML-form
				type="text" //the type of input
				value={nameInput} //necessary in order to make the input controlled
				onChange={onNameInputChange} //eventlistner that updates the input. And necessary in order to make the input controlled
			/>
			<button onClick={onStepChange}>Next Question</button>
		</form>
	);
};

export default FirstQuestion;
