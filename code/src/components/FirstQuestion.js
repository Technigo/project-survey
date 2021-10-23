import React from "react";

export const FirstQuestion = ({ nameInput, onNameInputChange, nextQuestion, step }) => {
	return (
		<main className="main-container">
			<div className="hidden-element"></div>
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
