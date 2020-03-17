import React, { useState } from 'react';
import './app.css';
import { DisplayAnswer } from './DisplayAnswers';

export const App = () => {
	const [ question, setQuestion ] = useState('Question1');
	const [ name, setName ] = useState('');
	const [ dog, setDog ] = useState('');
	const dogNumber = [ '1-3', '4-6', '7-10' ];
	const [ amountOfDogs, setAmountOfDogs ] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
	};

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
					<h2>What is your dogs name?</h2>
					<img className="dogGif" src={require('../images/whiteDog.gif')} alt="Very white dog" />
					<form onSubmit={handleSubmit}>
						<input
							className="inputText"
							type="text"
							onChange={(event) => setName(event.target.value)}
							required
							value={name}
							placeholder="Enter your dogs name..."
						/>
					</form>
					<div className="buttonContainer">
						<button onClick={() => setQuestion('Question1')}>Back</button>
						<button type="submit" onClick={() => setQuestion('Question3')}>
							Next
						</button>
					</div>
				</section>
			)}
			{question === 'Question3' && (
				<section className="questionContainer">
					<h2>What is your favourite type of animal?</h2>
					<img className="dogGif" src={require('../images/hiFiveDog.gif')} alt="Dog giving a high five" />
					<form>
						<select type="text" onChange={(event) => setDog(event.target.value)} value={dog}>
							<option value="">Choose an animal</option>
							<option value="Tame wolf">Tame wolf</option>
							<option value="Dog">Dog</option>
							<option value="Canis domesticus">Canis domesticus</option>
						</select>
					</form>
					<div className="buttonContainer">
						<button onClick={() => setQuestion('Question2')}>Back</button>
						<button onClick={() => setQuestion('Question4')}>Next</button>
					</div>
				</section>
			)}
			{question === 'Question4' && (
				<section className="questionContainer">
					<h2>How many dogs do you want:</h2>
					<img className="dogGif" src={require('../images/smartDog.gif')} alt="Dog looking smart" />
					<form>
						<div className="radioButtonContainer">
							{' '}
							{dogNumber.map((number) => (
								<label className="inputContainer" key={number}>
									<input
										className="personalizedInput"
										type="radio"
										value={number}
										onChange={(event) => setAmountOfDogs(event.target.value)}
										checked={amountOfDogs === number}
									/>
									<span className="checkmark" />
									{number}
								</label>
							))}
						</div>
					</form>
					<div className="buttonContainer">
						<button onClick={() => setQuestion('Question3')}>Back</button>
						<button onClick={() => setQuestion('Question5')}>Finish quiz</button>
					</div>
				</section>
			)}
			{question === 'Question5' && (
				<DisplayAnswer answerName={name} answerDog={dog} answerAmountOfDogs={amountOfDogs} />
			)}
		</section>
	);
};
