import React from 'react';

const ThirdQuestion = ({ location, onLocationInputChange, onStepChange }) => {
	return (
		<form>
			<label htmlFor="locationInput">Pick your workout space</label>
			<select onChange={onLocationInputChange} value={location}>
				<option value=""> select location:</option>
				<option value="home"> At Home</option>
				<option value="gym"> At the Gym</option>
				<option value="yogastudio"> At yogastudio</option>
				<option value="park"> At the park</option>
			</select>
			<button onClick={onStepChange}>Next Question</button>
		</form>
	);
};

export default ThirdQuestion;
