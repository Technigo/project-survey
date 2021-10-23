import React from "react";

const ageGroup = ["Under 18", "18+", "65+"];

export const SecondQuestion = ({ ageInput, onAgeInputChange, nextQuestion, previousQuestion, step }) => {
	return (
		<main className="main-container">
			<button className="back-btn" aria-label="Previous question" onClick={previousQuestion}>
				<span class="fas fa-arrow-left"></span>
			</button>
			<form className="form-container">
				<p className="question-number">Question {step}</p>
				<h2 className="question-heading">What is your age? consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</h2>
				{ageGroup.map((age) => (
					<div className="question-container">
						<label className="option-text" key={age} htmlFor={age}>
							{/* prettier-ignore */}
							<input
            		className="radio-button"
								id={age}
            		type="radio"
            		value={age}
            		onChange={onAgeInputChange}
            		checked={age === ageInput}
          		/>
							{age}
						</label>
					</div>
				))}
			</form>
			{ageInput !== "" && (
				<button className="next-btn" aria-label="Next question" onClick={nextQuestion}>
					<span aria-hidden="true">Next</span>
				</button>
			)}
		</main>
	);
};
