import React from 'react';

const radioBtn = ['Nice', 'Ugly af', 'Cute', 'Slow', 'Chonky'];

const ThirdQuestion = ({
	radioInput,
	onRadioInputChange,
	onStepChange,
	onStepBack,
}) => {
	return (
		<div className='container'>
			<div className='question-container'>
				<h2>Your opinion on jellyfishes?</h2>
				{radioBtn.map((item) => (
					<label className='radio-opt' key={item}>
						<input
							className='radio-btn'
							type='radio'
							value={item}
							onChange={onRadioInputChange}
							checked={radioInput === item}
						/>
						{item}
					</label>
				))}
			</div>
			<div className='btn-container'>
				<button className='btn' onClick={onStepBack}>
					Previous
				</button>
				<button
					className='btn'
					disabled={radioInput === ''}
					onClick={onStepChange}
				>
					Gimme summary!
				</button>
			</div>
		</div>
	);
};

export default ThirdQuestion;
