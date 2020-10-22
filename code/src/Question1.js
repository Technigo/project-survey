import React from 'react';

export const Question1 = ({ userAnswer1, onAnswerChange }) => {
	return (
		<div className="quiz-box">
			<label htmlFor="question1">
				<h2>Question number 1</h2>
				<p>
					Which science-fiction horror series on Netflix is set in the fictional
					town of Hawkins?
				</p>
			</label>
			<input
				type="text"
				onChange={(e) => onAnswerChange(e.target.value)}
				value={userAnswer1}
				id="question1"
				required
				autocomplete="off"
			/>
		</div>
	);
};
