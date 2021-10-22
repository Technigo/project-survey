import React from "react";

export const FirstQuestion = ({ nameInput, onNameInputChange, nextQuestion, step }) => {
	return (
		<div>
			<form className="form-container">
				<div className="question-container">
					<p className="question-number">Question {step}</p>
					<label className="question-label" htmlFor="nameInput">
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
				{nameInput !== "" && (
					<button aria-label="Next question" onClick={nextQuestion}>
						<span aria-hidden="true">Next</span>
					</button>
				)}
			</form>
		</div>
	);
};

// <form onSubmit={(event) => event.preventDefault()}>
// <button onClick={nextQuestion}>Next question</button>
