import React from 'react';
import '../Styles/InputRange.css';

const InputRange = ({ question, likeScale, setLikeScale }) => {
	return (
		<>
			<h2 tabIndex="0">{question}</h2>
			<label
				htmlFor="InputRange"
				className="input-range-container"
				aria-label="Select on a scale 1-10 how much you like this season"
			>
				<p>{likeScale}</p>
				<input
					name="InputRange"
					type="range"
					min="1"
					max="10"
					value={likeScale}
					onChange={event => setLikeScale(event.target.value)}
				/>
				<output id="outputRange" name="outputRange" htmlFor={likeScale}></output>
			</label>
		</>
	);
};

export default InputRange;
