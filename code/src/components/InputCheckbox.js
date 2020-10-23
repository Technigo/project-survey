import React from 'react';
import '../Styles/InputCheckbox.css';

export const InputCheckbox = ({
	question,
	array,
	selectedMonths,
	onMonthsChange,
}) => {
	return (
		<>
			<h2>{question}</h2>
			{array.map(item => (
				<label htmlFor={item} key={item} className="input-checkbox-container">
					<input
						id={item}
						type="checkbox"
						value={item}
						checked={selectedMonths.includes(item)}
						onChange={event => onMonthsChange(event.target.value)}
					/>
					{item}
				</label>
			))}
		</>
	);
};
