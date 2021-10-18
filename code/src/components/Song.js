import React from 'react'

const Song = ({ 
    songInput, 
    onSongInputChange, 
    onStepChange }) => {
	// const { nameInput, onNameInputChange } = props;

	return (
	
		<form>
			<label htmlFor="songInput">Song here</label>
			<input
				id="songInput"
				type="text"
				value={songInput}
				onChange={onSongInputChange}
			/>
			<button onClick={onStepChange}>Next questions</button>
		</form>
		
	)
}

export default Song
