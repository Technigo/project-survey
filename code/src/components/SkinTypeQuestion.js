import React from 'react';

const SkinTypeQuestion = ({ skinTypeInput, onSkinTypeInputChange, nextStep }) => {
	return (
		<div>
			<label htmlFor="skin-type">What's your skin type?</label>
			<input id="skin-type" type="text" placeholder="Your name" value={skinTypeInput} onChange={onSkinTypeInputChange} />
			<div>
				<button className="btn" type="submit" onClick={nextStep}>
					Next question!</button>
			</div>
		</div>
	);
};

export default SkinTypeQuestion;