import React from 'react';

const FirstQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {
	return (
		<section className="containerInfo">
			<label htmlFor="nameInput">
				<p>
					Please type your favorite cake! If you don't like cake-please type in
					another baked good that is your favorite!{' '}
				</p>
			</label>
			<input
				id="nameInput"
				type="text"
				value={nameInput}
				onChange={onNameInputChange}
			/>
			<button disabled={nameInput === ''} onClick={onStepChange}>
				Next question
			</button>
		</section>
	);
};

export default FirstQuestion;
