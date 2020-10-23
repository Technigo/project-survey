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
			<div className="checkbox-container">
				{array.map(item => (
					<label htmlFor={item} key={item} className="checkbox-wrapper">
						<input
							id={item}
							type="checkbox"
							value={item}
							checked={selectedMonths.includes(item)}
							onChange={event => onMonthsChange(event.target.value)}
						/>
						{item}
						<span className="custom-checkbox"></span>
					</label>
				))}
			</div>
		</>
	);
};
