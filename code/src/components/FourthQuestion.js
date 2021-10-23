import React from "react";

const genresGroup = ["Drama", "Romance", "International", "Adventure", "Feelgood", "Fantasy", "Action"];

export const FourthQuestion = ({ genresInput, onGenresInputChange, nextQuestion, previousQuestion, step }) => {
	return (
		<main className="main-container">
			<button className="back-btn" aria-label="Previous question" onClick={previousQuestion}>
				<span class="fas fa-arrow-left"></span>
			</button>
			<form className="form-container" onSubmit={nextQuestion}>
				<p className="question-number">Question {step}</p>
				<h2 className="question-heading">What genres of TV shows do you prefer?</h2>
				{genresGroup.map((genres) => (
					<div className="question-container">
						<label key={genres} htmlFor={genres}>
							{/* prettier-ignore */}
							<input
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
				{genresInput !== "" && (
					<button className="submit-btn" aria-label="Submit answers" type="submit">
						<span aria-hidden="true">Submit</span>
					</button>
				)}
			</form>
		</main>
	);
};
