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
			<label className="form-label" htmlFor="nameInput">Name here</label>
			<input
				className="text-input"
				placeholder="name"
				id="nameInput"
				type="text"
				value={nameInput}
				onChange={onNameInputChange}
				required
			/>
			<input className="btn" type="submit" value="continue" onClick={onStepChange} />
			{/* <button  >Next questions</button> */}
		</form>
		</article>
		</>
	)
}

export default Name
