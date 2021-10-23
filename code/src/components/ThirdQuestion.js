import React from "react";

export const ThirdQuestion = ({ streamingInput, onStreamingInputChange, nextQuestion, previousQuestion, step }) => {
	return (
		<main className="main-container">
			<button className="back-btn" aria-label="Previous question" onClick={previousQuestion}>
				<span class="fas fa-arrow-left"></span>
			</button>
			<form className="form-container">
				<p className="question-number">Question {step}</p>
				<label className="question-heading" htmlFor="streamingInput">
					<h2 className="question-heading">Which streaming service do you prefer?</h2>
				</label>
				<select className="dropdown" onChange={onStreamingInputChange} value={streamingInput}>
					<option className="option-input" value="">
						Select
					</option>
					<option className="option-input" value="Netflix">
						Netflix
					</option>
					<option className="option-input" value="SVT Play">
						SVT Play
					</option>
					<option className="option-input" value="HBO">
						HBO
					</option>
				</select>
			</form>
			<button className="next-btn" disabled={streamingInput === ""} onClick={nextQuestion}>
				Next
			</button>
		</main>
	);
};
