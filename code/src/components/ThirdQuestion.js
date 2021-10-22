import React from "react";

export const ThirdQuestion = ({ streamingInput, onStreamingInputChange, nextQuestion, previousQuestion, step }) => {
	return (
		<form onSubmit={nextQuestion}>
			<div className="question-container">
				<p className="question-number">Question {step}</p>
				<label className="question-label" htmlFor="streamingInput">
					Which streaming service do you prefer?
				</label>
				<select onChange={onStreamingInputChange} value={streamingInput}>
					<option value="">Select</option>
					<option value="Netflix">Netflix</option>
					<option value="SVT Play">SVT Play</option>
					<option value="HBO">HBO</option>
				</select>
			</div>
			{streamingInput !== "" && (
				<button className="next-btn" type="submit">
					Next question
				</button>
			)}
			<button onClick={previousQuestion}>Previous question</button>
		</form>
	);
};
