import React from 'react';

const FirstQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {

	return (
		<section className="content-container">
			<form className="form">
				<label 
					className="label-title" 
					htmlFor="nameInput">
						What's your <span className="bold">full name?*</span>
				</label>
				<input
					id="nameInput"
					type="text"
					name="nameInput"
					placeholder="Type your name here"
					value={nameInput}
					onChange={onNameInputChange}
					
				/>
				<button 
				// disabled={ (nameInput==='') }
				onClick={onStepChange}>Next
				</button>
			</form>

		</section>

	);
};

export default FirstQuestion;