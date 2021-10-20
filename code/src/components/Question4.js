import React from "react";

const Question4 = ({ movieInput, onMovieInputChange, onStepChange }) => {

    return (
        <form className="form">
            <label>
				<label htmlFor="movieInput">Best Christmas movie??</label>
				<select value={movieInput} onChange={event => onMovieInputChange(event.target.value)}>
					<option value="Home Alone">Home Alone</option>
					<option value="The Grinch">The Grinch</option>
					<option value="Scrooged">Scrooged</option>
					<option value="Elf">Elf</option>
                    <option value="All of these">All of these</option>
                    <option value="None of these">None of these</option>
				</select>
			</label>

            <button onClick={onStepChange}>Submit</button>
        </form>
    );
};

export default Question4;