import React from 'react'

const FirstQuestion = ({ onQuestionChange }) => {

	return (
		<form className="form">
			<h1>Let's play a game...</h1>
			<div className="button-container">
				<button 
					type="button"
					className="buttons" 
					onClick={onQuestionChange}
				>
					Um... ok?
				</button>
				<button 
					type="button"
					className="buttons" 
					onClick={onQuestionChange}
				>
					YES LETS DO THIS!
				</button>
			</div>
		</form>
	)
}

export default FirstQuestion