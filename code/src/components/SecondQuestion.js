import React from 'react';

const SecondQuestion = ({
	surnameInput,
	onSurnameInputChange,
	onStepChange,
}) => {
	return (
		<form>
			<label htmlFor="surnameInput">Type your surname</label>
			<input
				id="surnameInput" //connects to the HTML-form
				type="text"
				value={surnameInput} //necessary in order to make the input controlled
				onChange={onSurnameInputChange} //eventlistner that updates the input. And necessary in order to make the input controlled
			/>
			<button onClick={onStepChange}> Next question</button>
		</form>
	);
};

export default SecondQuestion;
