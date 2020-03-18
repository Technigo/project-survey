import React from 'react';
import { Emoji } from './Emoji.js';

export const DisplayAnswer = ({ answerName, answerDog, answerAmountOfDogs }) => {
	const reloadPage = () => {
		window.location.reload();
	};

	return (
		<section className="questionContainer">
			<h1>
				<Emoji emoji="🐶 " />Your answers:
			</h1>
			<h3>What is your dogs name?</h3>
			<h4>
				<span className="underline">{answerName}</span>
				<Emoji emoji="🐕‍🦺" />
			</h4>
			<h3>What is your favourite type of animal</h3>
			<h4>
				<Emoji emoji="🐕" />
				<span className="underline">{answerDog}</span>
			</h4>
			<h3>How many dogs do you want:</h3>
			<h4>
				<span className="underline">{answerAmountOfDogs}</span>
				<Emoji emoji="🐩" />
			</h4>
			<div className="buttonContainer">
				<button onClick={reloadPage}>Re-take quiz!</button>
			</div>
		</section>
	);
};
