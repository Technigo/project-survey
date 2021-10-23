import React from 'react';

const ThirdQuestion = ({ onHappinessChange, happiness, onStepChange }) => {
	return (
		<form>
			<label>
				<p>Whats your mood right now?</p>
				<input
					type="radio"
					value="happy"
					onChange={() => onHappinessChange('happy')}
					checked={happiness === 'happy'}
				/>

				<span role="img" aria-label="Happy face">
					😀,but hungry!
				</span>
			</label>

			<label>
				<input
					type="radio"
					value="sad"
					onChange={() => onHappinessChange('sad')}
					checked={happiness === 'sad'}
				/>

				<span role="img" aria-label="Sad face">
					🥺, please cheer me up!
				</span>
			</label>
			<button onClick={onStepChange}>Next question</button>
		</form>
	);
};

//controlled forms from 6:18 is the dropdown menu
export default ThirdQuestion;
