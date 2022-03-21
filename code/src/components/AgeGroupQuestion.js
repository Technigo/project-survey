import React from 'react';

const AgeGroupQuestion = ({ ageGroupInput, onAgeGroupInputChange, nextStep }) => {
	return (
		<div>
			<label htmlFor="age-group">What's your age group?</label>
			<input id="age-group" type="text" placeholder="Your age group" value={ageGroupInput} onChange={onAgeGroupInputChange} />
			<div>
				<button className="btn" type="submit" onClick={nextStep}>
					Next question!</button>
			</div>
		</div>
	);
};

export default AgeGroupQuestion;