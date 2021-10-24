import React from 'react';

import { ReactComponent as MyArrow } from "../assets/arrow.svg";

const allMoods = [
	'amazed',
	'angry',
	'bored',
	'confident',
	'confused',
	'curious',
	'energetic',
	'excited',
	'frustrated',
	'happy',
	'lonely',
	'optimistic',
	'peaceful',
	'sad',
	'tired',
	'worried'
]

// An array of objects I might like to use instead in the future
//for a drop-down menu, similar to the guess-who project
const allMoodsNew = [
	{
		'Love': [
			'accepted',
			'gentle',
			'affectionate',
			'passionate',
			'trusted'
		],
		'Happiness': [
			'confident',
			'grateful',
			'peaceful',
			'excited',
			'playful'
		],
		'Surprise': [
			'startled',
			'overwhelmed',
			'confused',
			'amazed',
			'shocked'
		],
		'Fear': [
			'embarrassed',
			'vulnerable',
			'rejected',
			'insecure',
			'worried'
		],
		'Anger': [
			'threatened',
			'mad',
			'offended',
			'frustrated',
			'annoyed'
		],
		'Disgust':[
			'resentful',
			'shameful',
			'bitter',
			'disappointed',
			'averse'
		],
		'Sadness': [
			'hurt',
			'guilty',
			'lonely',
			'uninterested',
			'inadequate'
		]
	}
]


const ThirdQuestion = ({
	mood,
	onMoodChange,
	onStepChange,
}) => {
	console.log(allMoodsNew)
	return (
		<>
			<p>How are you feeling right now?</p>
			<form className="radio-buttons">
				{allMoods.map(item => {
					return (
						<label value="mood">
							<input 
								id={item}
								type="radio"
								value={item}
								onChange={() => onMoodChange(item)}
								checked={mood === item}
							/>
						<span>{item}</span>
						</label>
					)
				})}
			</form>
			<button
				disabled={mood === ''}
				onClick={onStepChange}>
				<MyArrow className="arrow pulse" />
			</button>
		</>
	);
};




export default ThirdQuestion;
