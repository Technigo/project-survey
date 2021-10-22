import React from "react";

export const ThirdQuestion = ({ streamingInput, onStreamingInputChange, nextQuestion, previousQuestion, step }) => {
	return (
		<main className="main-container">
			<button aria-label="Previous question" onClick={previousQuestion}>
				<span class="fas fa-arrow-left"></span>
			</button>
			<form className="form-container">
				<p className="question-number">Question {step}</p>
				<label className="question-heading" htmlFor="streamingInput">
					Which streaming service do you prefer?
				</label>
				<select onChange={onStreamingInputChange} value={streamingInput}>
					<option value="">Select</option>
					<option value="Netflix">Netflix</option>
					<option value="SVT Play">SVT Play</option>
					<option value="HBO">HBO</option>
				</select>
			</form>
			{streamingInput !== "" && (
				<button aria-label="Next question" onClick={nextQuestion}>
					<span aria-hidden="true">Next</span>
				</button>
			)}
		</main>
	);
};
