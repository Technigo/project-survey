import React from 'react'

const ThirdQuestion = ({ onQuestionBackChange, onQuestionChange, alias, weapon, onWeaponChange }) => {
	return (
		<div>
			<form className="form">
				<h2>Okay {alias}, time to choose your weapon.</h2>
				<p>Do you want to be able to:</p>
				<div className="weapon-container">
					{/* invisibility */}
					<label className="weapon-radio-button">
					<input 
						type="radio" 
						name="weapon"
						value="invisibility"
						onChange={onWeaponChange}
					/>
					become invisible
					</label>
					{/* parcil tounge */}
					<label className="weapon-radio-button">
					<input 
						type="radio"
						name="weapon"
						value="parcil tounge"
						onChange={onWeaponChange}
					/>
					talk to snakes
					</label>	
				{/* super speed */}
					<label className="weapon-radio-button">
					<input 
						type="radio"
						name="weapon"
						value="super speed"
						onChange={onWeaponChange}
					/>
					run super fast
					</label>
				</div>

				{/* buttons */}
				<div className="button-container">
					<button 
						type="button"
						className="buttons" 
						onClick={onQuestionBackChange}
					>
						Go Back
					</button>
					<button 
						type="button"
						className="buttons" 
						disabled={(weapon === '')}
						onClick={onQuestionChange}
					>
						Continue
					</button>
				</div>
			</form>
		</div>
	)
}

export default ThirdQuestion