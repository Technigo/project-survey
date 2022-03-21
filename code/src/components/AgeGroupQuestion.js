import React from 'react';

const ageGroups = [
    'Under 21',
    '22-30',
    '30-45',
    '45-60',
    'Over 60'
]
const AgeGroupQuestion = ({ ageGroupInput, onAgeGroupInputChange, nextStep }) => {
	return (
		<div>
			<label htmlFor="age-group">How old are you?</label>
            <select value={ageGroupInput} onChange={onAgeGroupInputChange}>
            <option value='Under 21'>Under 21</option>
            <option value='22-30'>22-30</option>
            <option value='30-45'>30-45</option>
            </select>
			<div>
				<button className="btn" type="submit" onClick={nextStep}>
					Next question!</button>
			</div>
		</div>
	);
};

export default AgeGroupQuestion;