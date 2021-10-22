import React from 'react';

const SecondQuestion = ({ emailInput, onEmailInputChange, onStepChange, onPreviousQuestionChange }) => {

	return (
		<section className="content-container">
			<div className="form">
				<label 
					className="label-title" 
					htmlFor="emailInput">
						What's your <span className="bold">email adress?*</span>
				</label>
				<input
					id="emailInput"
					type="email"
					name="emailInput"
					placeholder="Type your email adress here"
					value={emailInput}
					onChange={onEmailInputChange}
				/>
				<div className="button-container">
					<button onClick={onPreviousQuestionChange}>&larr; Back</button>
					<button disabled={ (emailInput==='') } type="button" onClick={onStepChange}>Next &rarr;</button>				
				</div>

			</div>

		</section>

	);
};

export default SecondQuestion;