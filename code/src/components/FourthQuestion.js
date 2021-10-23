import React from "react";

const genresGroup = ["Drama", "Romance", "Fantasy", "Action"];

export const FourthQuestion = ({ genresInput, onGenresInputChange, nextQuestion, previousQuestion, step }) => {
	return (
		<main className="main-container">
			<button className="back-btn" aria-label="Previous question" onClick={previousQuestion}>
				<span class="fas fa-arrow-left"></span>
			</button>
			<form className="form-container">
				<p className="question-number">Question {step}</p>
				<h2 className="question-heading">What genres of TV shows do you prefer?</h2>
				{genresGroup.map((genres) => (
					<div className="question-container">
						<label className="radio-input" key={genres} htmlFor={genres}>
							{/* prettier-ignore */}
							<input
								className="radio-button"
            		id={genres}
            		type="radio"
            		value={genres}
            		onChange={onGenresInputChange}
            		checked={genres === genresInput}
          		/>
							{genres}
						</label>
					</div>
				))}
			</form>
			<button className="next-btn" disabled={genresInput === ""} onClick={nextQuestion}>
				Next
			</button>
		</main>
	);
};
