import React from 'react';
import './FourthQuestion.css'
const FourthQuestion = ({
	strength,
	onStrengthChange,
	onStepChange,
}) => {
	return (
		<form>
			<div className="header">
			<h1 className="title">Pick your strength</h1> 
			</div>
			<label>
				
				<select value={strength} onChange={ event => onStrengthChange(event.target.value)}> 
					<option value="HTML">HTML</option>
					<option value="CSS">CSS</option>
					<option value="Javascript">Javascript</option>
					<option value="React.js">React.js</option>
				</select>
			</label>
			<button className="button"
			onClick={onStepChange}
			><span className="button-text">
			See Overview</span>
			</button>
		</form>
	);
};

export default FourthQuestion;