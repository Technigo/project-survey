import React from "react";

export const IntroQuestion = ({ nextQuestion }) => {
	return (
		<main className="main-container">
			<div className="hidden-element"></div>
			<h1 className="big-heading">Should you hire Ebba as a developer?</h1>
			<form>
				<button className="next-btn" onClick={nextQuestion}>
					Let's find out!
				</button>
			</form>
		</main>
	);
};

// Will Ebba become a great developer
