import React from 'react';

const SecondQuestion = ({ setExperience, experience, onStepChange }) => {


	return (
		<form>
			<select 
			onChange={event => setExperience(event)}
			value={experience}
			>
				<option value="">Previous experience of baking:</option>
				<option value="beginner">Beginner</option>
				<option value="know the basics">Know the basics</option>
				<option value="experienced">Experienced</option>
				</select>
		</form>
	);
};

export default SecondQuestion;
