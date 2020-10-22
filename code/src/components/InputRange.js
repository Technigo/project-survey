import React from 'react';
import './InputRange.css';

export const InputRange = ({ question, value, setValue }) => {
	return (
		<label htmlFor="InputRange">
			<h2>{question}</h2>
			{/* <div className="input-output-wrapper"> */}
			<p>{value}</p>
			<input
				name="InputRange"
				type="range"
				min="1"
				max="10"
				// id={id}
				// key={value.id}
				value={value}
				className="input-range-container"
				onChange={event => setValue(event.target.value)}
			/>
			<output id="outputRange" name="outputRange" htmlFor={value}></output>
			{/* </div> */}
		</label>
	);
};
