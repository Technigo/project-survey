import React from "react";

export const ThirdQuestion = ({ streamingInput, onStreamingInputChange, nextQuestion }) => {
	return (
		<form onSubmit={nextQuestion}>
			<label htmlFor="streamingInput">Which streaming service do you prefer?</label>

			<select onChange={onStreamingInputChange} value={streamingInput}>
				<option value="">Select</option>
				<option value="netflix">Netflix</option>
				<option value="svtPlay">SVT Play</option>
				<option value="hbo">HBO</option>
			</select>
			<button type="submit" onClick={nextQuestion}>
				Next question
			</button>
		</form>
	);
};
