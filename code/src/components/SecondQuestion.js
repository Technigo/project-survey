import React from 'react';

// const animals = ['Cat', 'Lion', 'Snail', 'Frog'];

const SecondQuestion = ({ selectInput, onSelectInputChange, onStepChange }) => {
	return (
		<div className='container'>
			<div className='question-container'>
				<h2>This is a select question</h2>
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
					id='selectInput'
					value={selectInput}
					onChange={onSelectInputChange}
				>
					<option disabled value=''>
						Select option
					</option>
					<option value='Cat'>Cat</option>
					<option value='Lion'>Lion</option>
					<option value='Snail'>Snail</option>
					<option value='Frog'>Frog</option>
				</select>
			</div>
			<button
				className='btn'
				disabled={selectInput === ''}
				onClick={onStepChange}
			>
				Next
			</button>
		</div>
	);
};

export default SecondQuestion;
