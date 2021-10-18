import React from 'react'

const Music = ({
	musicInput,
	onMusicChange,
	onStepChange,
}) => {
	return (
		<form>
			<label htmlFor="musicInput">option 1</label>
			<input
				id="musicInput"
				type="radio"
				value={musicInput}
				onChange={onMusicChange}
                checked=""
                required
			/>
			
            <label htmlFor="musicInput">option 2</label>
			<input
				id="musicInput"
				type="radio"
				value={musicInput}
				onChange={onMusicChange}
                checked=""
                required
			/>
			
            <label htmlFor="musicInput">option 3</label>
			<input
				id="musicInput"
				type="radio"
				value={musicInput}
				onChange={onMusicChange}
                checked=""
                required
			/>
			<button onClick={onStepChange}>Next question</button>
		</form>
	)
}

export default Music
