import React from 'react'

const Song = ({ 
    lastDropInput, 
    onLastDropInputChange, 
    onStepChange,
    onPreviousQuestionChange
 }) => {
	// const { nameInput, onNameInputChange } = props;

	return (
        <>
        <article className="survey-article">
        <h2>Scariest horror villain?</h2>
		<form className="form" onSubmit={event => event.preventDefault()}>
            <select 
            value={lastDropInput} 
            onChange={onLastDropInputChange}
            className="dropdown-label"
            name="select"
            required
            >
                <option value="">Select your favorite:</option>
                <option value="The thing">The Thing</option>
                <option value="Michael Myers">Michael Myers</option>
                <option value="Freddy Krueger">Freddy Krueger</option>
                <option value="Ghostface">Ghostface</option>
                <option value="Pennywise">Pennywise</option>
                <option value="Jason">Jason</option>
            </select>
		</form>
        </article>
		<div className="btn-container">
            <button className="btn" onClick={onPreviousQuestionChange}>back</button>
            <button className="btn" type="submit" onClick={onStepChange}> end survey</button>
        </div>
        </>
		
	)
}

export default Song
