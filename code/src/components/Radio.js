import React from 'react'

const typeOfMusic = ["George A Romero", "John Carpenter", "Alfred Hitchcock", "Wes Craven"]


const Radio = ({
	radioInput,
	onRadioInputChange,
	onStepChange,
	
}) => {
	return (
		<>
		<article className="survey-article">
		<h2>Best horror director?</h2>
		<form className="form" onSubmit={event => event.preventDefault()}>
			{typeOfMusic.map(type => 
				<label className="radio-label" key={type}>
					<input 
						className="radio-input"
						id="check"
						type="radio"
						value={type}
						onChange={onRadioInputChange}
						checked={radioInput === type}
						required
					/>
				
					{type}
					
			</label>
		)}
		<input className="btn" type="submit" value="continue" onClick={onStepChange} />
	</form>
	</article>
	</>
)
}

export default Radio
