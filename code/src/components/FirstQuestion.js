import React from 'react';

const FirstQuestion = ({ movie, onMovieChange, onStepChange }) => {
	//const { nameInput, onNameInputChange } = props; // Object destructuring, to extract properties from objects and bind them to variables
	return (
		<form className="form-container1" tabIndex="0">
			<label>
				<h1> Pick your scary movie ! </h1>
			</label>

			<select
				className="select"
				value={movie}
				onChange={(event) => onMovieChange(event.target.value)}
			>
				<option value="A Nightmare on Elm Street">
					A Nightmare on Elm Street
				</option>
				<option value="The Shining">The Shining</option>
				<option value="Poltergeist">Poltergeist</option>
				<option value="Carrie">Carrie</option>
				<option value="Ghostbusters"> Ghostbusters</option>
			</select>

			<button className="button" onClick={onStepChange}>
				Next Question
			</button>
		</form>
	);
};

export default FirstQuestion;
