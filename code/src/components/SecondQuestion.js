import React from 'react';

import { ReactComponent as MyArrow } from "../assets/arrow.svg";

const today = [
	'amazing',
	'calm',
	'fun',
	'interesting',
	'mellow',
	'stressful'
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
			<p>Time for some reflections.</p>
			<label value="experience">How have you experienced your day today?</label>
			<select value={experience} onChange={event => onExperienceChange(event.target.value)}>
				<option value="" selected disabled>It was...</option>
				{today.map(item => {
					return (
						<option value={item}>{item}</option>
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
