import React from "react";

const genresGroup = ["Drama", "Romance", "International", "Adventure", "Feelgood", "Fantasy", "Action"];

export const FourthQuestion = ({ onGenresInputChange, nextQuestion, previousQuestion, step }) => {
	return (
		<form onSubmit={nextQuestion}>
			<div className="question-container">
				<p className="question-number">Question {step}</p>
				<h2 className="question-label">What genres of TV shows do you like?</h2>
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
			</div>
			<button className="submit-btn" type="submit" onClick={nextQuestion}>
				Submit answers
			</button>
			<button onClick={previousQuestion}>Previous question</button>
		</form>
	);
};

// export const FourthQuestion = ({ genresInput, onGenresInputChange, nextQuestion, previousQuestion }) => {
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
//      <button onClick={previousQuestion}>Previous question</button>
// 		</form>
// 	);
// };
