import React from "react";

export const ThirdQuestion = ({ streamingInput, onStreamingInputChange, nextQuestion }) => {
	return (
		<form onSubmit={(event) => event.preventDefault()}>
			<label htmlFor="streamingInput">Which streaming service do you prefer?</label>

			<select onChange={onStreamingInputChange} value={streamingInput}>
				<option value="">Select</option>
				<option value="netflix">Netflix</option>
				<option value="svtPlay">SVT Play</option>
				<option value="hbo">HBO</option>
			</select>
			<button onClick={nextQuestion}>Submit</button>
		</form>
	);
};
