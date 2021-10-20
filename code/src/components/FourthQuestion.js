import React from "react";

// Create an array to map over instead

export const FourthQuestion = ({ genresInput, onGenresInputChange, nextQuestion }) => {
	return (
		<form onSubmit={(event) => event.preventDefault()}>
			<h2>What genres of TV shows do you like?</h2>
			<label htmlFor="dramaInput">Drama</label>
			{/* prettier-ignore */}
			<input
        id="dramaInput"
        type="checkbox"
        value={genresInput}
        onChange={onGenresInputChange}
      />
			<label htmlFor="romanceInput">Romance</label>
			{/* prettier-ignore */}
			<input
        id="romanceInput"
        type="checkbox"
        value={genresInput}
        onChange={onGenresInputChange}
      />
			<label htmlFor="internationalInput">International</label>
			{/* prettier-ignore */}
			<input
        id="internationalInput"
        type="checkbox"
        value={genresInput}
        onChange={onGenresInputChange}
      />
			<label htmlFor="adventureInput">Adventure</label>
			{/* prettier-ignore */}
			<input
        id="adventureInput"
        type="checkbox"
        value={genresInput}
        onChange={onGenresInputChange}
      />
			<label htmlFor="feelgoodInput">Feelgood</label>
			{/* prettier-ignore */}
			<input
        id="feelgoodInput"
        type="checkbox"
        value={genresInput}
        onChange={onGenresInputChange}
      />
			<label htmlFor="fantasyInput">Fantasy</label>
			{/* prettier-ignore */}
			<input
        id="fantasyInput"
        type="checkbox"
        value={genresInput}
        onChange={onGenresInputChange}
      />
			<label htmlFor="actionInput">Action</label>
			{/* prettier-ignore */}
			<input
        id="actionInput"
        type="checkbox"
        value={genresInput}
        onChange={onGenresInputChange}
      />
			<button onClick={nextQuestion}>Submit answers</button>
		</form>
	);
};
