import React from 'react';

const ThirdQuestion = ({
	weakness,
	onWeaknessChange,
	onStepChange,
}) => {
	return (
		<form>
			
			<h1 className="title">Pick your weakness</h1> 
			<label>
				<input className="radio-button"
				type="radio"
				value="HTML"
				onChange={() => onWeaknessChange('HTML')}
				checked={weakness === 'HTML'}
				/>
				<span>HTML

				</span>
				
			</label>
			
			<label>
				<input
				className="radio-button"  
				type="radio" 
				value="CSS"
				onChange={() => onWeaknessChange('CSS')}
				checked={weakness === 'CSS'}
				/>
				<span>
				CSS
				</span>
			</label>
			
			<label>
				<input
				className="radio-button"  
				type="radio" 
				value="Javascript"
				onChange={() => onWeaknessChange('Javascript')}
				checked={weakness === 'Javascript'}
				/>
				<span>
				Javascript
				</span>
			</label>
			
			<label>
				<input
				className="radio-button" 
				type="radio" 
				value="React.js"
				onChange={() => onWeaknessChange('React.js')}
				checked={weakness === 'React.js'}
				/>
				<span>
				React.js
				</span>
			</label>
			<button className="button"
			onClick={onStepChange}
			><span className="button-text">
			Next Question</span>
			</button>

		</form>
	);
};

export default ThirdQuestion;