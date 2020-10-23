import React from 'react';

export const QuizSummary = ({
	userAnswer1,
	userAnswer2,
	userAnswer3,
	userAnswer4,
	userAnswer5,
}) => {
	const correctAnswers = {
		q1: 'Stranger things',
		q2: 'A pink bunny',
		q3: 'One flew over the cuckoos nest',
		q4: '9',
		q5: '217',
	};

	return (
		<div className="quiz-box">
			<h3>
				Answers:
				<ul>
					<li>
						Q1: {userAnswer1}{' '}
						{userAnswer1 == correctAnswers.q1 ? (
							<span className="correct">Correct</span>
						) : (
							<span className="incorrect">
								The correct answer is {correctAnswers.q1}
							</span>
						)}
					</li>
					<li>
						Q2: {userAnswer2}{' '}
						{userAnswer2 == correctAnswers.q2 ? (
							<span className="correct">Correct</span>
						) : (
							<span className="incorrect">
								The correct answer is {correctAnswers.q2}
							</span>
						)}
					</li>
					<li>
						Q3: {userAnswer3.join(', ')}{' '}
						{userAnswer3 == correctAnswers.q3 ? (
							<span className="correct">Correct</span>
						) : userAnswer3.includes(correctAnswers.q3) ? (
							<>
								<span className="correct">
									{correctAnswers.q3} is correct
									<span className="incorrect">Rest is wrong</span>
								</span>
							</>
						) : (
							<span className="incorrect">
								The correct answer is {correctAnswers.q3}
							</span>
						)}
					</li>
					<li>
						Q4: {userAnswer4}{' '}
						{userAnswer4 == correctAnswers.q4 ? (
							<span className="correct">Correct</span>
						) : (
							<span className="incorrect">
								The correct answer is {correctAnswers.q4}
							</span>
						)}
					</li>
					<li>
						Q5: {userAnswer5}{' '}
						{userAnswer5 == correctAnswers.q5 ? (
							<span className="correct">Correct</span>
						) : (
							<span className="incorrect">
								The correct answer is {correctAnswers.q5}
							</span>
						)}
					</li>
				</ul>
			</h3>
		</div>
	);
};
