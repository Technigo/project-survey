import React from 'react';

import { ReactComponent as MyArrow } from "../assets/arrow.svg";

const today = [
	'absorbing',
	'amazing',
	'calm',
	'cheerful',
	'easy-going',
	'intense',
	'mundane',
	'stressful',
	'surprising',
	'thought-provoking'
]

const SecondQuestion = ({
	experience,
	onExperienceChange,
	onStepChange,
	nameInput,
}) => {
	return (
		<form className="formContainer">
			<p>Good evening {nameInput}!</p>
			<label value="experience">How have you experienced your day today?</label>
			<select value={experience} onChange={event => onExperienceChange(event.target.value)}>
				<option value="" selected disabled>It was...</option>
				{today.map(item => {
					return (
						<option id={item} value={item}>{item}</option>
					)
				})}
			</select>
			<button
				disabled={experience === ''}
				onClick={onStepChange}>		
				<MyArrow className="arrow pulse" />
			</button>
		</form>
	);
};

export default SecondQuestion;
