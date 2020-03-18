import React from 'react';

export const QuizStart = ({ setQuestion, btnText }) => {
	return (
		<React.Fragment>
			<h1>Are you ready for a dog quiz?</h1>
			<img className="dogGif" src={require('../images/roundDog.gif')} alt="Very round dog" />
			<div className="buttonContainer">
				<button onClick={() => setQuestion('Question2')}>{btnText}</button>
			</div>
		</React.Fragment>
	);
};
