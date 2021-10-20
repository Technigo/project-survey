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
            >
                <option value="">Select your favorite:</option>
                <option value="Lastkaj 14">Lastkaj 14</option>
                <option value="Tenacious D">Tenacious D</option>
                <option value="Elton John">Elton John</option>
            </select>
            <input className="btn" type="submit" value="End survey" onClick={onStepChange} />
		</form>
        </article>
        </>
		
	)
}

export default Song
