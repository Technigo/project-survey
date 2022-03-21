import React from 'react';


const NameQuestion = ({ nameInput, onNameInputChange, nextStep }) => {
	return (
		<div>
			<label htmlFor="name">What's your name?</label>
			<input id="name" type="text" placeholder="Your name" value={nameInput} onChange={onNameInputChange} />
			<div>
				<button className="button" type="submit" onClick={nextStep}>
					Next!</button>
			</div>
			
		</div>
	);
};

export default NameQuestion;