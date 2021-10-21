import React from "react";

export const ThirdQuestion = ({ streamingInput, onStreamingInputChange, nextQuestion, previousQuestion }) => {
	return (
		<form onSubmit={nextQuestion}>
			<label htmlFor="streamingInput">Which streaming service do you prefer?</label>

			<select onChange={onStreamingInputChange} value={streamingInput}>
				<option value="">Select</option>
				<option value="Netflix">Netflix</option>
				<option value="SVT Play">SVT Play</option>
				<option value="HBO">HBO</option>
			</select>
			{streamingInput !== "" && <button type="submit">Next question</button>}
			<button onClick={previousQuestion}>Previous question</button>
		</form>
	);
};
