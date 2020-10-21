import React from 'react';

export const Question2 = ({ userAnswer2, onAnswerChange }) => {
	return (
		<div className="quiz-box">
			<h2>Question number 2</h2>
			<p>
				In the Friends episode "The one with the Halloween Party", what
				memorable but not so spooky costume did Chandler wear?
			</p>
			<select
				onChange={(e) => onAnswerChange(e.target.value)}
				value={userAnswer2}>
				<option value="">Select your answer:</option>
				<option value="A blue cat">A blue cat</option>
				<option value="A purple sheep">A purple sheep</option>
				<option value="A black and white cow">A black and white cow</option>
				<option value="A pink bunny">A pink bunny</option>
			</select>
		</div>
	);
};
