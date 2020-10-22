import React from 'react';

export const Question5 = ({ userAnswer5, onAnswerChange }) => {
	return (
		<div className="quiz-box">
			<label htmlFor="question5">
				<h2>Question number 5</h2>
				<p>How many episodes were made of the iconic tv-series X-files?</p>

				<input
					type="range"
					name="question5"
					min="210"
					max="230"
					onChange={(e) => onAnswerChange(e.target.value)}
					value={userAnswer5}
				/>
			</label>
			<p>Count: {userAnswer5} </p>
		</div>
	);
};
