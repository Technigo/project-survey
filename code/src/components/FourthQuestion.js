import React from 'react';

import { ReactComponent as MyArrow } from "../assets/arrow.svg";

const FourthQuestion = ({
	gratitudeOne,
	onGratitudeOneChange,
	gratitudeTwo,
	onGratitudeTwoChange,
	gratitudeThree,
	onGratitudeThreeChange,
	onStepChange,
}) => {
	return (
		<>
			<p>Find three things you are grateful for today.</p>
			<form className="formContainer">
				<div className="three-things">
					<label value="gratitudeInputOne">Number 1</label>
					<input
						id="gratitudeInputOne"
						type="text"
						value={gratitudeOne}
						onChange={onGratitudeOneChange}
					/>
				</div>	
				<div className="three-things">
					<label value="gratitudeInputTwo">Number 2</label>
					<input
						id="gratitudeInputTwo"
						type="text"
						value={gratitudeTwo}
						onChange={onGratitudeTwoChange}
					/>
				</div>
				<div className="three-things">
					<label value="gratitudeInputThree">Number 3</label>
					<input
						id="gratitudeInputThree"
						type="text"
						value={gratitudeThree}
						onChange={onGratitudeThreeChange}
					/>
				</div>
				<button 
					disabled={gratitudeThree === ''}
					onClick={onStepChange} >
					<MyArrow className="arrow pulse" />
				</button>
			</form>
		</>
			
	);
};

export default FourthQuestion;
