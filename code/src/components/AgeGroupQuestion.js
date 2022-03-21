import React from 'react';


const AgeGroupQuestion = ({ ageGroupInput, onAgeGroupInputChange, nextStep, previousStep }) => {
    return (
        <div>
            <label htmlFor="age-group">How old are you?</label>
            <select value={ageGroupInput} onChange={onAgeGroupInputChange}>
                <option selected value='label'>Choose Age Group</option>
                <option value='Under 21'>Under 21</option>
                <option value='22-30'>22-30</option>
                <option value='30-45'>30-45</option>
            </select>
            <div>
                <button className="button" type="submit" onClick={nextStep}>
                    Next!</button>
            </div>
            <div>
				<button className="button" type="submit" onClick={previousStep}>
					Go Back</button>
			</div>
        </div>
    );
};

export default AgeGroupQuestion;