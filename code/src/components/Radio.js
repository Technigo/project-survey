import React from 'react'

const typeOfMusic = ["George A Romero", "John Carpenter", "Alfred Hitchcock", "Wes Craven"]


const Radio = ({
	radioInput,
	onRadioInputChange,
	onStepChange,
	onPreviousQuestionChange
	
}) => {
	return (
		<>
		<article className="survey-article">
		<h2>Best horror director?</h2>
		<form className="form" onSubmit={event => event.preventDefault()}>
			{typeOfMusic.map(type => 
				<label className="radio-label" key={type}>
					<input 
						name="radio"
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
	</form>
	</article>
	<div className="btn-container">
            <button className="btn" onClick={onPreviousQuestionChange}>back</button>
            <button className="btn" type="submit" onClick={onStepChange}> continue</button>
        </div>
	</>
)
}

export default Radio
