import React from "react";

export const FirstQuestion = ({ nameInput, onNameInputChange, nextQuestion, step }) => {
	return (
		<main className="main-container">
			<form className="form-container">
				<div className="question-container">
					<p className="question-number">Question {step}</p>
					<label className="question-heading" htmlFor="nameInput">
						What is your name?
					</label>
					{/* prettier-ignore */}
					<input
         id="nameInput"
         type="text"
         value={nameInput}
         onChange={onNameInputChange}
        />
				</div>
			</form>
			{nameInput !== "" && (
				<button aria-label="Next question" onClick={nextQuestion}>
					<span aria-hidden="true">Next</span>
				</button>
			)}
		</main>
	);
};

// <form onSubmit={(event) => event.preventDefault()}>
// <button onClick={nextQuestion}>Next question</button>
