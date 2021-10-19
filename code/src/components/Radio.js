import React from 'react'

const typeOfMusic = ["punk", "rock", "hip-hop", "disco"]

const Radio = ({
	radioInput,
	onRadioInputChange,
	onStepChange,
	
}) => {
	return (
		<>
		<article className="survey-article">
		<h2>Type of music:</h2>
		<form>
			{typeOfMusic.map(type => 
				<label key={type}>
					<input 
						id="check"
						type="radio"
						value={type}
						onChange={onRadioInputChange}
						checked={radioInput === type}
					/>
					{type}
			</label>
		)}
		<button onClick={onStepChange}>Next questions</button>
	</form>
	</article>
	</>
)
}

export default Radio
