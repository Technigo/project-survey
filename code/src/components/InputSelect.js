import React from 'react';

const InputSelect = ({ id, question, setSeason, value }) => {
	return (
		<>
			<h2 tabIndex="0">{question}</h2>
			<label
				htmlFor={id}
				aria-label="Select your favourite season in the drop-down menu to be able to proceed the survey"
			>
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

export default InputSelect;
