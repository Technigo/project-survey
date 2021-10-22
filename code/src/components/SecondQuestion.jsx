import React from 'react'

const SecondQuestion = ({ onQuestionBackChange, onQuestionChange, alias, onAliasChange }) => {
	return (
		<form className="form">
			{/* Choose alias */}
			<label htmlFor="alias">Choose your alias:</label>
			<input 
				id="alias" 
				type="text" 
				value={alias} 
				onChange={onAliasChange}
			/>
			{/* buttons */}
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
						disabled={(alias === '')}
						onClick={onQuestionChange}
					>
						Continue
					</button>
			</div>
		</form>
	)
}

export default SecondQuestion