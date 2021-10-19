import React from 'react';

const SecondQuestion = ({ emailInput, onEmailInputChange, onStepChange }) => {

	return (
		<section className="content-container">
			<form className="form">
				<label 
					className="label-title" 
					htmlFor="emailInput">
						What is your <span className="bold">email?*</span>
				</label>
				<input
					id="emailInput"
					type="email"
					name="emailInput"
					placeholder="Type your email adress here"
					value={emailInput}
					onChange={onEmailInputChange}
					required
				/>
				<button type="button"  onClick={onStepChange}>Next</button>
			</form>

		</section>

	);
};

export default SecondQuestion;