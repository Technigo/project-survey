import React from 'react';
import Button from './Button';


const NameQuestion = ({ nameInput, onNameInputChange, nextStep }) => {
	return (
		<div className='flex'>
			<div className='heading'>What's your name?</div>
			<input id="name" type="text" placeholder="Your name" value={nameInput} onChange={onNameInputChange} />
			<Button onClickFunction={nextStep} buttonText="Next!" />
		</div>
	);
};

export default NameQuestion;