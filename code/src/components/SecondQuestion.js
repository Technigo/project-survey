import React from 'react';

// const animals = ['Cat', 'Lion', 'Snail', 'Frog'];

const SecondQuestion = ({
	selectInput,
	onSelectInputChange,
	onStepChange,
	onStepBack,
}) => {
	return (
		<div className='container'>
			<div className='question-container'>
				<h2>Pick the best fruit</h2>
				{/* <select
				value={animals}
				onChange={(event) => onSelectInputChange(event.target.value)}
			>
				<option disabled value=''>
					Select your option
				</option>
				{animals.map((item) => {
					return (
						<option key={item} value={item}>
							{item}
						</option>
					);
				})}
			</select> */}
				<select
					className='select'
					id='selectInput'
					value={selectInput}
					onChange={onSelectInputChange}
				>
					<option disabled value=''>
						Select here
					</option>
					<option value='banana'>Banana</option>
					<option value='orange'>Orange</option>
					<option value='pear'>Pear</option>
					<option value='kiwi'>Kiwi</option>
					<option value='mango'>Mango</option>
					<option value='apple'>Apple</option>
				</select>
			</div>
			<div className='btn-container'>
				<button className='btn' onClick={onStepBack}>
					Previous
				</button>
				<button
					className='btn'
					disabled={selectInput === ''}
					onClick={onStepChange}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default SecondQuestion;
