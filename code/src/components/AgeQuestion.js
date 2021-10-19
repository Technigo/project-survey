import React from 'react';

const AgeQuestion = ({ ageInput, onAgeInputChange, onStepChange }) => {
    const ages = ['0-30', '31-60', '61-100']

	return (
		<section className="content-container">
			<form className="form">
				<label 
					className="label-title" 
					htmlFor="ageInput">
						What is your <span className="bold">age?*</span>
				</label>
                <div className="radio-buttons-container">
                    {ages.map(age => (
                        <div className="radio-button">
                        <label 
                            htmlFor={ages}
                            aria-label={age}
                            key={age}>
                        <input 
                            type="radio"
                            name="radio-age"
                            id="radio-age"
                            value={age} 
                            onChange={(event) => onAgeInputChange(event.target.value)}
                            checked={ageInput === age}
                            required/>
                        {age}
                        </label>
                        </div>

                    ))}
                </div>

				<button type="button" onClick={onStepChange}>Next</button>
			</form>

		</section>

	);
};

export default AgeQuestion;