import React, { useState } from 'react';

import FirstQuestion from './FirstQuestion';
import SecondQuestion from './SecondQuestion';
import ThirdQuestion from './ThirdQuestion';
import FourthQuestion from './FourthQuestion.js';
import Overview from './Overview';

const Form = () => {
	const [nameInput, setNameInput] = useState('');
	const [experience, setExperience] = useState('');
	const [mood, setMood] = useState('')
	const [gratitudeOne, setGratitudeOne] = useState('')
	const [gratitudeTwo, setGratitudeTwo] = useState('')
	const [gratitudeThree, setGratitudeThree] = useState('')
	const [step, setStep] = useState(1);

	const onNameInputChange = (event) => {
		setNameInput(event.target.value);
	};
	const onExperienceChange = (experience) => {
		setExperience(experience);
	};
	const onMoodChange = (feeling) => {
		setMood(feeling)
	}
	const onGratitudeOneChange = (event) => {
		setGratitudeOne(event.target.value)
	}
	const onGratitudeTwoChange = (event) => {
		setGratitudeTwo(event.target.value)
	}
	const onGratitudeThreeChange = (event) => {
		setGratitudeThree(event.target.value)
	}
	const onStepChange = () => {
		setStep(step + 1);
	};

	return (
		<div className="bigContainer">
			<div className="questionContainer">
				{step === 1 && (
					<FirstQuestion
						nameInput={nameInput}
						onNameInputChange={onNameInputChange}
						onStepChange={onStepChange}
					/>
				)}
				{step === 2 && (
					<SecondQuestion
						experience={experience}
						onExperienceChange={onExperienceChange}
						onStepChange={onStepChange}
						nameInput={nameInput}
						/>
						)}
				{step === 3 && (
					<ThirdQuestion
						mood={mood}
						onMoodChange={onMoodChange}
						onStepChange={onStepChange}
					/>
				)}
				{step === 4 && (
					<FourthQuestion
						gratitudeOne={gratitudeOne}
						onGratitudeOneChange={onGratitudeOneChange}
						gratitudeTwo={gratitudeTwo}
						onGratitudeTwoChange={onGratitudeTwoChange}
						gratitudeThree={gratitudeThree}
						onGratitudeThreeChange={onGratitudeThreeChange}
						onStepChange={onStepChange}
					/>
				)}
				{step === 5 && (
					<Overview
						nameInput={nameInput}
						experience={experience}
						mood={mood}
						gratitudeOne={gratitudeOne}
						gratitudeTwo={gratitudeTwo}
						gratitudeThree={gratitudeThree}
					/>
				)}
			</div>
		</div>
		
	);
};

export default Form;
