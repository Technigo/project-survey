import React from 'react';
import '../Styles/InputRadio.css';

const InputRadio = ({ question, array, setAge, age }) => {
	return (
		<>
			<h2 tabIndex="0">{question}</h2>
			<div
				className="radio-btn-container"
				aria-label="Select how many seasons you have experienced to be able to proceed the survey"
			>
				{array.map(group => (
					<label
						className="radio-container"
						htmlFor={group}
						key={group}
						tabIndex="0"
					>
						<input
							id={group}
							type="radio"
							value={group}
							onChange={event => setAge(event.target.value)}
							checked={age === group}
						/>
						<span
							role="Radiogroup"
							aria-checked="false"
							className="custom-radio-btn"
						></span>
						{group}
					</label>
				))}
			</div>
		</>
	);
};

export default InputRadio;
