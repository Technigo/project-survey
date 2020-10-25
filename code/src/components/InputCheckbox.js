import React from 'react';
import '../Styles/InputCheckbox.css';

const InputCheckbox = ({ question, array, selectedMonths, onMonthsChange }) => {
	return (
		<>
			<h2 tabIndex={'0'}>{question}</h2>
			<div
				className="checkbox-container"
				aria-label="Check preferred months to be able to proceed the survey"
			>
				{array.map(item => (
					<label
						className="checkbox-wrapper"
						htmlFor={item}
						key={item}
						tabIndex="0"
						// onKeyPress="changeCheckbox()
					>
						<input
							id={item}
							type="checkbox"
							value={item}
							checked={selectedMonths.includes(item)}
							onChange={event => onMonthsChange(event.target.value)}
							// aria-labelledby={item}
						/>
						<span
							role="checkbox"
							aria-checked="false"
							className="custom-checkbox"
							// onKeyPress="changeCheckbox()"
						></span>
						{item}
					</label>
				))}
			</div>
		</>
	);
};

export default InputCheckbox;
