import React from "react"

const Question4 = ({ movieInput, onMovieInputChange, onStepChange }) => {

    return (
        <form className="form">
			<label htmlFor="movieInput">4. Best Christmas movie?</label>
				<select
					className="dropdown-select" 
					value={movieInput} 
					onChange={event => onMovieInputChange(event.target.value)}
				>
					<option className="dropdown-content" disabled value="">Select an option</option>
					<option className="dropdown-content"value="Home Alone">Home Alone</option>
					<option className="dropdown-content"value="The Grinch">The Grinch</option>
					<option className="dropdown-content"value="Scrooged">Scrooged</option>
					<option className="dropdown-content"value="Elf">Elf</option>
                    <option className="dropdown-content"value="A Christmas Story">A Christmas Story</option>
                    <option className="dropdown-content"value="Other">Other</option>
				</select>
				
				<button onClick={onStepChange}>Submit</button>
				
		</form>
	)
}

export default Question4