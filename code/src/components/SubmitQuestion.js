import React from "react";

export const SubmitQuestion = ({ nextQuestion, previousQuestion }) => {
	return (
		<main className="main-container">
			<button className="back-btn" aria-label="Previous question" onClick={previousQuestion}>
				<span class="fas fa-arrow-left"></span>
			</button>
			<h1 className="big-heading">Ready to check out the result?</h1>
			<form onSubmit={nextQuestion}>
				<button className="submit-btn" type="submit">
					Submit answers
				</button>
			</form>
		</main>
	);
};
