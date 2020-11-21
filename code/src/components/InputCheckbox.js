import React from 'react';
import '../Styles/InputCheckbox.css';

const InputCheckbox = ({ question, seasonArray, selectedMonths, onMonthsChange }) => {
	return (
		<>
			<h2 tabIndex="0">{question}</h2>
			<div
				className="checkbox-container"
				aria-label="Check preferred months to be able to proceed the survey"
			>
				{seasonArray.map(item => (
					<label
						className="checkbox-wrapper"
						htmlFor={item}
						key={item}
						tabIndex="0"
					>
						<input
							id={item}
							type="checkbox"
							value={item}
							checked={selectedMonths.includes(item)}
							onChange={event => onMonthsChange(event.target.value)}
						/>
						<span
							role="checkbox"
							aria-checked="false"
							className="custom-checkbox"
						></span>
						{item}
					</label>
				))}
			</div>
		</>
	);
};

export default InputCheckbox;
