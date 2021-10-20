import React from 'react'

const Song = ({ 
    songInput, 
    onSongInputChange, 
    onStepChange
 }) => {
	// const { nameInput, onNameInputChange } = props;

	return (
        <>
        <article className="survey-article">
        <h2>Scariest horror villain?</h2>
		<form className="form" onSubmit={event => event.preventDefault()}>
            <select 
            value={songInput} 
            onChange={onSongInputChange}
            required
            className="dropdown-label"
            >
                <option value="">Select your favorite:</option>
                <option value="The thing">The Thing</option>
                <option value="Michael Myers">Michael Myers</option>
                <option value="Freddy Krueger">Freddy Krueger</option>
                <option value="Ghostface">Ghostface</option>
                <option value="Pennywise">Pennywise</option>
                <option value="Jason">Jason</option>
            </select>
            <input className="btn" type="submit" value="End survey" onClick={onStepChange} />
		</form>
        </article>
        </>
		
	)
}

export default Song
