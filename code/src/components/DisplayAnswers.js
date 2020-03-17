import React from 'react';

export const DisplayAnswer = ({ answerName, answerDog, answerAmountOfDogs }) => {
	const reloadPage = () => {
		window.location.reload();
	};
	// const { name, dog, amountOfDogs } = props;
	return (
		<section className="questionContainer">
			<h1>
				<span className="emoji" role="img" aria-label="Dog">
					{' '}
					🐶{' '}
				</span>Your answers:
			</h1>
			<h3>What is your dogs name?</h3>
			<h4>
				<span className="underline">{answerName}</span>{' '}
				<span className="emoji" role="img" aria-label="Dog">
					{' '}
					🐕‍🦺{' '}
				</span>
			</h4>
			<h3>What is your favourite type of animal</h3>
			<h4>
				<span className="emoji" role="img" aria-label="Dog">
					{' '}
					🐕‍{' '}
				</span>
				<span className="underline">{answerDog}</span>
			</h4>
			<h3>How many dogs do you want:</h3>
			<h4>
				<span className="emoji" role="img" aria-label="Dog">
					{' '}
					‍{' '}
				</span>
				<span className="underline">{answerAmountOfDogs}</span>
				<span className="emoji" role="img" aria-label="Dog">
					{' '}
					🐩{' '}
				</span>
			</h4>
			<div className="buttonContainer">
				<button onClick={reloadPage}>Re-take quiz!</button>
			</div>
		</section>
	);
};
