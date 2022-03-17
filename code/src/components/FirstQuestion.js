import React from 'react';

const FirstQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {
	return (
		<div className='container'>
			<div className='question-container'>
				<h2>Hi! What's your name?</h2>
				{/* <label htmlFor='name'>Type your name</label> */}
				<input
					id='name'
					type='text'
					value={nameInput}
					onChange={onNameInputChange}
				/>
			</div>
			<button
				className='btn'
				disabled={nameInput === ''}
				onClick={onStepChange}
			>
				Next
			</button>
		</div>
	);
};

export default FirstQuestion;
