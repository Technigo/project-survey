import React from 'react';

const FifthQuestion = ({onStepChange }) => {

	return (
		<section className="content-container">
			<form className="form">
				<label 
					className="label-title" 
					htmlFor="nameInput">
						How much <span className="bold">money*</span> do you expect to get? 
				</label>

				<button 
				// disabled={ (nameInput==='') }
				onClick={onStepChange}>Next
				</button>
			</form>

		</section>

	);
};

export default FifthQuestion;