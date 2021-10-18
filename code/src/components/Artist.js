import React from 'react'

const Artist = ({ 
    artistInput, 
    onArtistInputChange, 
    onStepChange }) => {
	// const { nameInput, onNameInputChange } = props;

	return (
		<form>
			<label htmlFor="artistInput">option 1</label>
			<input
				id="artistInput"
				type="radio"
				value={artistInput}
				onChange={onArtistInputChange}
                checked=""
                required
			/>
			
            <label htmlFor="artistInput">option 2</label>
			<input
				id="artistInput"
				type="radio"
				value={artistInput}
				onChange={onArtistInputChange}
                checked=""
                required
			/>
			
            <label htmlFor="artistInput">option 3</label>
			<input
				id="artistInput"
				type="radio"
				value={artistInput}
				onChange={onArtistInputChange}
                checked=""
                required
			/>
			<button onClick={onStepChange}>See overview</button>
		</form>
	)
}

export default Artist
