import React from "react";

export const FirstQuestion = ({
	languageInput,
	onLanguageInputChange,
	nextQuestion,
	previousQuestion,
	step,
}) => {
	return (
		<main className="main-container">
			<button
				className="back-btn"
				aria-label="Go back"
				onClick={previousQuestion}
			>
				<span class="fas fa-arrow-left"></span>
			</button>
			<form className="form-container">
				<p className="question-number">Question {step}</p>
				<label className="question-heading" htmlFor="languageInput">
					<h2 className="question-heading">
						Which language is most important for a frontend developer?
					</h2>
				</label>
				<select
					className="dropdown"
					onChange={onLanguageInputChange}
					value={languageInput}
				>
					<option className="option-input" value="">
						Select
					</option>
					<option className="option-input" value="HTML5">
						HTML5
					</option>
					<option className="option-input" value="CSS3">
						CSS3
					</option>
					<option className="option-input" value="JavaScript">
						JavaScript
					</option>
					<option className="option-input" value="Node.js">
						Node.js
					</option>
					<option className="option-input" value="German">
						German
					</option>
				</select>
			</form>
			<button
				className="next-btn"
				disabled={languageInput === ""}
				onClick={nextQuestion}
			>
				Next
			</button>
		</main>
	);
};
