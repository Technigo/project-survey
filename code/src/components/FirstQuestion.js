import React from 'react';

import { ReactComponent as MyArrow } from "../assets/arrow.svg";
import { ReactComponent as MyDecorline } from "../assets/decorline.svg";


const FirstQuestion = ({
	nameInput,
	onNameInputChange,
	onStepChange
}) => {
	return (
		<>
			<div className="welcome">
				<p>Welcome to</p>
				<div className="summaryQuote">
					<MyDecorline />
					<h1>gratitude practice</h1>
					<MyDecorline />
				</div>
			</div>
			<form className="formContainer">
				<label value="nameInput">What is your name?</label>
				<input
					id="nameInput"
					type="text"
					value={nameInput}
					onChange={onNameInputChange}
				/>
				<button 
					disabled={nameInput === ''}
					onClick={onStepChange} >
					<MyArrow className="arrow pulse" />
				</button>
			</form>
		</>
		
	);
};

export default FirstQuestion;
