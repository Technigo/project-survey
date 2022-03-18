import React from 'react';

const FirstQuestion = ({
	wordInput,
	onWordInputChange,
	onStepChange,
	onStepBack,
}) => {
	return (
		<div className='container'>
			<div className='question-container'>
				<h2>Type your favourite curse word</h2>
				<input
					className='word-input'
					id='word'
					type='text'
					value={wordInput}
					onChange={onWordInputChange}
				/>
			</div>
			<div className='btn-container'>
				<button className='btn' onClick={onStepBack}>
					Previous
				</button>
				<button
					className='btn'
					disabled={wordInput === ''}
					onClick={onStepChange}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default FirstQuestion;
