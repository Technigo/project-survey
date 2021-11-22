import React from "react";

export const SubmitQuestion = ({ nextQuestion, previousQuestion }) => {
	return (
		<main className="main-container">
			<button className="back-btn" aria-label="Go back" onClick={previousQuestion}>
				<span class="fas fa-arrow-left"></span>
			</button>
			<h1 className="big-heading">Let's check out how was your day!</h1>
			<form onSubmit={nextQuestion}>
				<button className="submit-btn" type="submit">
					Submit My Day
				</button>
			</form>
		</main>
	);
};
