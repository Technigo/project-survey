import React from 'react';

export const InputCheckbox = ({ question, selectedMonths, onMonthsChange }) => {
	return (
		<div>
			<h2>{question}</h2>
			<label htmlFor="summerMonths">Summer</label>
			<input
				id="summerMonths"
				type="checkbox"
				checked={selectedMonths.includes('June')}
				onChange={() => onMonthsChange('June')}
			/>
			<label htmlFor="summerMonths">Summer</label>
			<input
				id="summerMonths"
				type="checkbox"
				checked={selectedMonths.includes('July')}
				onChange={() => onMonthsChange('July')}
			/>
			<label htmlFor="summerMonths">Summer</label>
			<input
				id="summerMonths"
				type="checkbox"
				checked={selectedMonths.includes('August')}
				onChange={() => onMonthsChange('August')}
			/>
		</div>
	);
};
