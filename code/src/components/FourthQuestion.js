import React from "react";

const yesOrNoArray = ["Yes", "No"];

export const FourthQuestion = ({
	backgroundInput,
	onBackgroundInputChange,
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
				<h2 className="question-heading">
					Is a background in Graphic Design valuable?
				</h2>
				{yesOrNoArray.map((yesOrNo) => (
					<div className="question-container">
						<label className="radio-input" key={yesOrNo} htmlFor={yesOrNo}>
							<input
								className="radio-button"
								id={yesOrNo}
								type="radio"
								value={yesOrNo}
								onChange={onBackgroundInputChange}
								checked={yesOrNo === backgroundInput}
							/>
							{yesOrNo}
						</label>
					</div>
				))}
			</form>
			<button
				className="next-btn"
				disabled={backgroundInput === ""}
				onClick={nextQuestion}
			>
				Next
			</button>
		</main>
	);
};
