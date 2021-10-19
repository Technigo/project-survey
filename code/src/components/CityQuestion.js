import React from 'react';


const CityQuestion = ({ cityInput, onCityInputChange, onStepChange}) => {
	return (
    	<section className="content-container">
			<form className="form">
				<label 
					className="label-title" 
					htmlFor="phoneInput">
						Choose your <span className="bold">location*</span>

				</label>
				<select className="select-input" value={cityInput} onChange={onCityInputChange}>
          			<option value="">Select city:</option>
          			<option value="stockholm">Stockholm</option>
          			<option value="oslo">Oslo</option>
          			<option value="berlin">Berlin</option>
        		</select>
				<button onClick={onStepChange}>Next</button>
			</form>

		</section>

	);

};

export default CityQuestion;