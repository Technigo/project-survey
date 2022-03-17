import React from 'react';

const radioBtn = ['Jellyfish nice', 'Jellyfish euw'];

const ThirdQuestion = ({ radioInput, onRadioInputChange, onStepChange }) => {
	return (
		<div className='container'>
			<div className='question-container'>
				<h2>What radio button?</h2>
				{radioBtn.map((item) => (
					<label key={item}>
						<input
							type='radio'
							value={item}
							onChange={onRadioInputChange}
							checked={radioInput === item}
						/>
						{item}
					</label>
				))}
			</div>
			<button
				className='btn'
				disabled={radioInput === ''}
				onClick={onStepChange}
			>
				Get summary
			</button>
		</div>
	);
};

export default ThirdQuestion;
