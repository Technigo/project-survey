import React from 'react';

const FirstQuestion = ({ 
	nameInput, 
	onNameInputChange, 
	onStepChange 
}) => {


	return (
		<form>
			<label htmlFor="nameInput">
				<h1 className="title">Type your first name</h1> 
				</label>
			<input
				className="witing-question"
				id="nameInput"
				placeholder="Type your name here"
				type="text"
				value={nameInput}
				onChange={onNameInputChange}
				/>

				<button 
				className="button"
				disabled={nameInput === ''}
				onClick={onStepChange}
				><span className="button-text">
				Next Question</span>
				</button>

			
			
		</form>
	);
};

export default FirstQuestion;