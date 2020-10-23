import React from 'react';
import '../Styles/InputRange.css';

const InputRange = ({ question, value, setValue }) => {
	return (
		<>
			<h2 tabIndex={'0'}>{question}</h2>
			<label htmlFor="InputRange" className="input-range-container">
				<p>{value}</p>
				<input
					name="InputRange"
					type="range"
					min="1"
					max="10"
					value={value}
					onChange={event => setValue(event.target.value)}
				/>
				<output id="outputRange" name="outputRange" htmlFor={value}></output>
			</label>
		</>
	);
};

export default InputRange;
