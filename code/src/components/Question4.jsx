import React from "react"

const Question4 = ({ festivalInput, onFestivalInputChange, onStepChange }) => {

    return (
        <form className="form">
			<label htmlFor="festivalInput">4. Best festival?</label>
				<select
					className="dropdown-select" 
					value={festivalInput} 
					onChange={event => onFestivalInputChange(event.target.value)}
				>
					<option className="dropdown-content" disabled value="">Select an option</option>
					<option className="dropdown-content"value="Tomorrowland">Tomorrowland</option>
					<option className="dropdown-content"value="Ultra Music Festival">Ultra Music Festival</option>
					<option className="dropdown-content"value="Coachella">Coachella</option>
					<option className="dropdown-content"value="EDC">EDC</option>
                    <option className="dropdown-content"value="Defqon One">Defqon One</option>
                    <option className="dropdown-content"value="Other">Other</option>
				</select>
				
				<button onClick={onStepChange}>Next</button>
				
		</form>
	)
}

export default Question4