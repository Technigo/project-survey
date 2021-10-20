import React from "react";

const genresGroup = ["Drama", "Romance", "International", "Adventure", "Feelgood", "Fantasy", "Action"];

export const FourthQuestion = ({ genresInput, onGenresInputChange, nextQuestion }) => {
	return (
		<form onSubmit={(event) => event.preventDefault()}>
			<h2>What genres of TV shows do you like?</h2>
			{genresGroup.map((genres) => (
				<label key={genres} htmlFor={genres}>
					{/* prettier-ignore */}
					<input
            id={genres}
            type="checkbox"
            value={genres}
            onChange={onGenresInputChange}
            checked={genresInput}
          />
					{genres}
				</label>
			))}
			<button onClick={nextQuestion}>Submit answers</button>
		</form>
	);
};
