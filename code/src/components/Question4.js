import React from "react";

const Question4 = ({ movieInput, onMovieInputChange, onStepChange }) => {

    return (
        <form>
            <label>
				<h2>Which Christmas movie is a must seen?</h2>
				<select value={movieInput} onChange={event => onMovieInputChange(event.target.value)}>
					<option value="HomeAlone">Home Alone</option>
					<option value="Grinch">The Grinch</option>
					<option value="Scrooged">Scrooged</option>
					<option value="Elf">Elf</option>
                    <option value="All">All of these</option>
                    <option value="None">None of these</option>
				</select>
			</label>

            <button onClick={onStepChange}>Submit</button>
        </form>
    );
};

export default Question4;