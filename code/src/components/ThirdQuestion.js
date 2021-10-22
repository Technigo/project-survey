import React from 'react';


const ThirdQuestion = ({ countryInput, onCountryInputChange, onStepChange, onPreviousQuestionChange}) => {
	return (
    	<section className="content-container">
			<form className="form">
				<label 
					className="label-title" 
					htmlFor="countryInput">
						Choose your <span className="bold">location*</span>

				</label>
				<select className="select-input" value={countryInput} onChange={onCountryInputChange}>
          			<option value="">Select country:</option>
					<optgroup label="Scandinavia"></optgroup>
						<option value="Sweden">Sweden</option>
						<option value="Norway">Norway</option>
						<option value="Denmark">Denmark</option>
						<option value="Finland">Finland</option>
					<optgroup label="Europe"></optgroup>
						<option value="Germany">Germany</option>
						<option value="Spain">Spain</option>
						<option value="France">France </option>
						<option value="Polen">Italy</option>
						<option value="Poland">Poland</option>
						<option value="Polen">UK</option>
        		</select>
				<div className="button-container">
					<button onClick={onPreviousQuestionChange}>&larr; Back</button>
					<button onClick={onStepChange}>Next &rarr;</button>			
				</div>
			</form>

		</section>
	);

};

export default ThirdQuestion;