import React from 'react'

const Name = ({ 
    nameInput, 
    onNameInputChange, 
    onStepChange }) => {
	// const { nameInput, onNameInputChange } = props;

	return (
		<>
		<section className="survey-container">
		<h2>What is your name?</h2>
		<form>
			<label htmlFor="nameInput">Name here</label>
			<input
				id="nameInput"
				type="text"
				value={nameInput}
				onChange={onNameInputChange}
			/>
			<button onClick={onStepChange}>Next questions</button>
		</form>
		</section>
		</>
	)
}

export default Name
