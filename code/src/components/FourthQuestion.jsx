import React from "react"

const FourthQuestion = ({ onQuestionBackChange, onQuestionChange, weapon, companion, onCompanionChange }) => {
	return (
		<div>
			<form className="form">
				<h2>Now, you need to choose a companion on this journey</h2>
				<label htmlFor="companion">Who will you bring?</label>
				<select 
					className="dropdown"
					name="companions" 
					id="companion" 
					value={companion}
					onChange={onCompanionChange}
					>
					<option selected disabled value="">Choose companion</option>
					<option value="🦩">The Flamingo</option>
					<option value="🌛">The moon</option>
					<option value="🌯">A burrito</option>
					<option value="🦄">A unicorn</option>
				</select>
				<div className="button-container">
					<button 
						type="button"
						className="buttons" 
						onClick={onQuestionBackChange}
					>
					Go Back
					</button>
					<button 
						type="button"
						className="buttons" 
						disabled={companion === ''}
						onClick={onQuestionChange}
					>
					Continue
					</button>
				</div>
			</form>
		</div>
	)
}

export default FourthQuestion