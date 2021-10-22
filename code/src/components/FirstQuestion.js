import React from "react";

export const FirstQuestion = ({ nameInput, onNameInputChange, nextQuestion, step }) => {
	return (
		<form className="form-container" onSubmit={nextQuestion}>
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
				<button className="next-btn" type="submit">
					Next question
				</button>
			)}
		</form>
	);
};

// <form onSubmit={(event) => event.preventDefault()}>
// <button onClick={nextQuestion}>Next question</button>
