import React from 'react';

export const InputSelect = ({ id, question, setSeason, value }) => {
	return (
		<>
			<h2>{question}</h2>
			<label htmlFor={id}>
				<select
					value={value}
					className="select-container"
					onChange={event => setSeason(event.target.value)}
				>
					<option value="Season">Favourite season?</option>
					<option value="Fall">Fall</option>
					<option value="Spring">Spring</option>
					<option value="Summer">Summer</option>
					<option value="Winter">Winter</option>
				</select>
			</label>
		</>
	);
};
