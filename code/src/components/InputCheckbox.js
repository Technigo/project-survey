import React from 'react';

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
				<label htmlFor={item} key={item}>
					{item}
					<input
						id={item}
						type="checkbox"
						value={item}
						checked={selectedMonths.includes()}
						onChange={event => onMonthsChange(event.target.value)}
					/>
				</label>
			))}
		</>
	);
};
