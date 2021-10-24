import React from "react";

const frameworkArray = ["React", "Bootstrap", "Other"];

export const SecondQuestion = ({ frameworkInput, onFrameworkInputChange, nextQuestion, previousQuestion, step }) => {
	return (
		<main className="main-container">
			<button className="back-btn" aria-label="Go back" onClick={previousQuestion}>
				<span class="fas fa-arrow-left"></span>
			</button>
			<form className="form-container">
				<p className="question-number">Question {step}</p>
				<h2 className="question-heading">Which framework is most commonly used by developers at your company?</h2>
				{frameworkArray.map((age) => (
					<div className="question-container">
						<label className="radio-input" key={age} htmlFor={age}>
							{/* prettier-ignore */}
							<input
            		className="radio-button"
								id={age}
            		type="radio"
            		value={age}
            		onChange={onFrameworkInputChange}
            		checked={age === frameworkInput}
          		/>
							{age}
						</label>
					</div>
				))}
			</form>
			<button className="next-btn" disabled={frameworkInput === ""} onClick={nextQuestion}>
				Next
			</button>
		</main>
	);
};
