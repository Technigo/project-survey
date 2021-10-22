import React from "react";

const ageGroup = ["Under 13", "13-17", "18-24", "25-34", "35-44", "45-54", "55-64", "65-74", "75+"];

export const SecondQuestion = ({ ageInput, onAgeInputChange, nextQuestion, previousQuestion, step }) => {
	return (
		<main className="main-container">
			<button aria-label="Previous question" onClick={previousQuestion}>
				<span class="fas fa-arrow-left"></span>
			</button>
			<form className="form-container">
				<p className="question-number">Question {step}</p>
				<h2 className="question-heading">What is your age?</h2>
				{ageGroup.map((age) => (
					<div className="question-container">
						<label key={age} htmlFor={age}>
							{/* prettier-ignore */}
							<input
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
				<button aria-label="Next question" onClick={nextQuestion}>
					<span aria-hidden="true">Next</span>
				</button>
			)}
		</main>
	);
};
