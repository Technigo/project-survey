import React from "react";

const genresGroup = ["Drama", "Romance", "International", "Adventure", "Feelgood", "Fantasy", "Action"];

// export const FourthQuestion = ({ genresInput, onGenresInputChange, nextQuestion }) => {
// 	return (
// 		<form onSubmit={nextQuestion}>
// 			<h2>What genres of TV shows do you like?</h2>
// 			{genresGroup.map((genres) => (
// 				<label key={genres} htmlFor={genres}>
// 					{/* prettier-ignore */}
// 					<input
//             id={genres}
//             type="checkbox"
//             value={genres}
//             onChange={onGenresInputChange}
//             checked={genresInput}
//           />
// 					{genres}
// 				</label>
// 			))}
// 			<button type="submit" onClick={nextQuestion}>
// 				Submit answers
// 			</button>
// 		</form>
// 	);
// };

export const FourthQuestion = ({ onGenresInputChange, nextQuestion }) => {
	return (
		<form onSubmit={nextQuestion}>
			<h2>What genres of TV shows do you like?</h2>
			{genresGroup.map((genresInput) => (
				<label key={genresInput} htmlFor={genresInput}>
					{/* prettier-ignore */}
					<input
            id={genresInput}
            type="checkbox"
            value={genresInput}
            onChange={onGenresInputChange}
            // checked={genresInput}
          />
					{genresInput}
				</label>
			))}
			<button type="submit" onClick={nextQuestion}>
				Submit answers
			</button>
		</form>
	);
};
