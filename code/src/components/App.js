import React, { useState } from 'react';
import './app.css';
import { DisplayAnswer } from './DisplayAnswers';
import { FormQ } from './FormQ';
import { DropDownQ } from './DropDownQ';
import { RadioButtonQ } from './RadioButtonQ';
import { Buttons } from './Buttons';

export const App = () => {
	const [ question, setQuestion ] = useState('Question1');
	const [ name, setName ] = useState('');
	const [ dog, setDog ] = useState('');
	const dogNumber = [ '1-3', '4-6', '7-10' ];
	const [ amountOfDogs, setAmountOfDogs ] = useState('');

	// const handleSubmit = (event) => {
	// 	event.preventDefault();
	// };

	return (
		<section className="surveyContainer">
			{question === 'Question1' && (
				<section className="questionContainer">
					<h1>Are you ready for a dog quiz?</h1>
					<img className="dogGif" src={require('../images/roundDog.gif')} alt="Very round dog" />
					<div className="buttonContainer">
						<button onClick={() => setQuestion('Question2')}>Lets get started!</button>
					</div>
				</section>
			)}
			{question === 'Question2' && (
				<section className="questionContainer">
					<FormQ name={name} setName={setName} />
					<Buttons
						setQuestion={setQuestion}
						back="Question1"
						forward="Question3"
						name={name}
						leftBtnText="Back"
						rightBtnText="Next"
					/>
				</section>
			)}
			{question === 'Question3' && (
				<section className="questionContainer">
					<DropDownQ dog={dog} setDog={setDog} />
					<Buttons
						setQuestion={setQuestion}
						back="Question2"
						forward="Question4"
						name={name}
						leftBtnText="Back"
						rightBtnText="Next"
					/>
				</section>
			)}
			{question === 'Question4' && (
				<section className="questionContainer">
					<RadioButtonQ dogNumber={dogNumber} amountOfDogs={amountOfDogs} setAmountOfDogs={setAmountOfDogs} />
					<Buttons
						setQuestion={setQuestion}
						back="Question3"
						forward="Question5"
						name={name}
						leftBtnText="Back"
						rightBtnText="Finish quiz"
					/>
				</section>
			)}
			{question === 'Question5' && (
				<DisplayAnswer answerName={name} answerDog={dog} answerAmountOfDogs={amountOfDogs} />
			)}
		</section>
	);
};
