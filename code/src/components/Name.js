import React from 'react'

const Name = ({ 
    nameInput, 
    onNameInputChange, 
    onStepChange
 }) => {
	

	return (
		<>
		<article className="survey-article">
		<h2>What is your name?</h2>
		<form className="form" onSubmit={event => event.preventDefault()}>
			<label htmlFor="nameInput">Name here</label>
			<input
				id="nameInput"
				type="text"
				value={nameInput}
				onChange={onNameInputChange}
			/>
			<button className="btn" onClick={onStepChange}>Next questions</button>
		</form>
		</article>
		</>
	)
}

export default Name
