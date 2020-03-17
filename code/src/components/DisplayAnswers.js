import React from 'react';

export const DisplayAnswer = ({ answerName, answerDog, answerAmountOfDogs }) => {
	const reloadPage = () => {
		window.location.reload();
	};
	// const { name, dog, amountOfDogs } = props;
	return (
		<section className="questionContainer">
			<h1>Your answers:</h1>
			<h3>What is your dogs name?</h3>
			<h4>{answerName}</h4>
			<h3>What is your favourite type of animal</h3>
			<h4>{answerDog}</h4>
			<h3>How many dogs do you want:</h3>
			<h4>{answerAmountOfDogs}</h4>
			<div className="buttonContainer">
				<button onClick={reloadPage}>Re-take quiz!</button>
			</div>
		</section>
	);
};
