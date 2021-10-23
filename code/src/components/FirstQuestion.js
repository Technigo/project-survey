import React from "react";

export const FirstQuestion = ({ nameInput, onNameInputChange, nextQuestion, previousQuestion, step }) => {
	return (
		<main className="main-container">
			<button className="back-btn" aria-label="Go back" onClick={previousQuestion}>
				<span class="fas fa-arrow-left"></span>
			</button>
			<form className="form-container">
				<div className="question-container">
					<p className="question-number">Question {step}</p>
					<label htmlFor="nameInput">
						<h2 className="question-heading">What is your name?</h2>
					</label>
					{/* prettier-ignore */}
					<input
						className="text-input"
         		id="nameInput"
         		type="text"
         		value={nameInput}
         		onChange={onNameInputChange}
        	/>
				</div>
			</form>
			<button className="next-btn" disabled={nameInput === ""} onClick={nextQuestion}>
				Next
			</button>
		</main>
	);
};

// <form onSubmit={(event) => event.preventDefault()}>
// <button onClick={nextQuestion}>Next question</button>
