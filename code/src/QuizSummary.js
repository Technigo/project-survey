import React from 'react';

export const QuizSummary = ({
	userAnswer1,
	userAnswer2,
	userAnswer3,
	userAnswer4,
	userAnswer5,
}) => {
	return (
		<div className="quiz-summary">
			<h3>
				Answers:
				<ul>
					<li>Q1: {userAnswer1}</li>
					<li>Q2: {userAnswer2}</li>
					<li>Q3: {userAnswer3.join(', ')}</li>
					<li>Q4: {userAnswer4}</li>
					<li>Q5: {userAnswer5}</li>
				</ul>
			</h3>
		</div>
	);
};
