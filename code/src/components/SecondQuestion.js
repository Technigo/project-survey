import React from 'react';

const SecondQuestion = ({
	surnameInput,
	onSurnameInputChange,
	onStepChange,
}) => {
	return (
		<section className="containerInfo">
			<form>
				<label htmlFor="surnameInput">
					<p>Whats the best place you've ever been to?</p>
				</label>
				<input
					id="surnameInput"
					type="text"
					value={surnameInput}
					onChange={onSurnameInputChange}
				/>
				<button disabled={surnameInput === ''} onClick={onStepChange}>
					Next question
				</button>
			</form>
		</section>
	);
};

export default SecondQuestion;
