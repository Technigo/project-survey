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
				<label htmlFor={item}>
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

{
	/* <div>
	<label htmlFor="colorRed">Red</label>
	<input
		id="colorRed"
		type="checkbox"
		checked={userColors.includes('red')}
		onChange={() => onColorsChange('red')}
	/>
	<label htmlFor="colorGreen">Green</label>
	<input
		id="colorGreen"
		type="checkbox"
		checked={userColors.includes('green')}
		onChange={() => onColorsChange('green')}
	/>
	<label htmlFor="colorBlue">Blue</label>
	<input
		id="colorBlue"
		type="checkbox"
		checked={userColors.includes('blue')}
		onChange={() => onColorsChange('blue')}
	/>
</div>; */
}
