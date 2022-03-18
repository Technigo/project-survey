import React from 'react';

const Intro = ({ onStepChange }) => {
	return (
		<div className='container'>
			<div className='question-container'>
				<h2>Are you ready?</h2>
			</div>
			<button className='btn' onClick={onStepChange}>
				Hell yeah!
			</button>
		</div>
	);
};

export default Intro;
