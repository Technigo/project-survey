import React from 'react';
import './ThirdQuestion.css'
const ThirdQuestion = ({
	weakness,
	onWeaknessChange,
	onStepChange,
}) => {
	return (
		<form>
			<div className="header">
			<h1 className="title">Pick your weakness</h1> 
			</div>
				<div className="radio-container">

					<label className="radio">
						<input className="radio-button"
						type="radio"
						value="HTML"
						onChange={() => onWeaknessChange('HTML')}
						checked={weakness === 'HTML'}
						/>
						<span className="radio-text">HTML

						</span>
						
					</label>
					
					<label className="radio-label">
						<input
						className="radio-button"  
						type="radio" 
						value="CSS"
						onChange={() => onWeaknessChange('CSS')}
						checked={weakness === 'CSS'}
						/>
						<span className="radio-text">
						CSS
						</span>
					</label>
					
					<label className="radio-label">
						<input
						className="radio-button"  
						type="radio" 
						value="Javascript"
						onChange={() => onWeaknessChange('Javascript')}
						checked={weakness === 'Javascript'}
						/>
						<span className="radio-text">
						Javascript
						</span>
					</label>
					
					<label className="radio-label">
						<input
						className="radio-button" 
						type="radio" 
						value="React.js"
						onChange={() => onWeaknessChange('React.js')}
						checked={weakness === 'React.js'}
						/>
						<span className="radio-text">
						React.js
						</span>
					</label>
				</div>
			<button className="button"
			onClick={onStepChange}
			><span className="button-text">
			Next Question</span>
			</button>

		</form>
	);
};

export default ThirdQuestion;