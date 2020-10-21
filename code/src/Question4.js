import React from 'react';

export const Question4 = ({ userAnswer4, onAnswerChange }) => {
	return (
		<div className="quiz-box">
			<h2>Question number 4</h2>
			<p>
				How many seasons are available for the series American Horror story?
			</p>

			<input
				id="answer4a"
				type="radio"
				name="answer4"
				value={'9'}
				onChange={(e) => onAnswerChange(e.target.value)}
			/>
			<label htmlFor="answer4a">9</label>

			<input
				id="answer4b"
				type="radio"
				name="answer4"
				value={'10'}
				onChange={(e) => onAnswerChange(e.target.value)}
			/>
			<label htmlFor="answer4b">10</label>

			<input
				id="answer4c"
				type="radio"
				name="answer4"
				value={'8'}
				onChange={(e) => onAnswerChange(e.target.value)}
			/>
			<label htmlFor="answer4c">8</label>
		</div>
	);
};
