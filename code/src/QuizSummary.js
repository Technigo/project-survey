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

	const answerScore1 = () => {
		if (userAnswer1 === correctAnswers.q1) {
			return 1;
		} else {
			return null;
		}
	};

	const answerScore2 = () => {
		if (userAnswer2 === correctAnswers.q2) {
			return 1;
		} else {
			return null;
		}
	};

	const answerScore3 = () => {
		if (userAnswer3 === correctAnswers.q3) {
			return 1;
		} else if (userAnswer3.includes(correctAnswers.q3)) {
			return 0.5;
		} else {
			return null;
		}
	};

	const answerScore4 = () => {
		if (userAnswer4 === correctAnswers.q4) {
			return 1;
		} else {
			return null;
		}
	};

	let answerScore5 = () => {
		if (userAnswer5 === correctAnswers.q5) {
			return 1;
		} else if (userAnswer5 >= 216 && userAnswer5 <= 218) {
			return 0.5;
		} else {
			return null;
		}
	};

	const totalScore = () => {
		return (
			answerScore1() +
			answerScore2() +
			answerScore3() +
			answerScore4() +
			answerScore5()
		);
	};

	return (
		<div className="quiz-box">
			<h3>
				Answers:
				<ul>
					<li>
						Q1: {userAnswer1}{' '}
						{userAnswer1 === correctAnswers.q1 ? (
							<span className="correct">Correct, you get 1 point!</span>
						) : (
							<span className="incorrect">
								The correct answer is {correctAnswers.q1}
							</span>
						)}
					</li>
					<li>
						Q2: {userAnswer2}{' '}
						{userAnswer2 === correctAnswers.q2 ? (
							<span className="correct">Correct, you get 1 point!</span>
						) : (
							<span className="incorrect">
								The correct answer is {correctAnswers.q2}
							</span>
						)}
					</li>
					<li>
						Q3: {userAnswer3.join(', ')}{' '}
						{userAnswer3 === correctAnswers.q3 ? (
							<span className="correct">Correct, you get 1 point!</span>
						) : userAnswer3.includes(correctAnswers.q3) ? (
							<>
								<span className="correct">
									{correctAnswers.q3} is correct, you get 0.5 points,
									<span className="incorrect"> the rest is wrong</span>
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
						{userAnswer4 === correctAnswers.q4 ? (
							<span className="correct">Correct, you get 1 point!</span>
						) : (
							<span className="incorrect">
								The correct answer is {correctAnswers.q4}
							</span>
						)}
					</li>
					<li>
						Q5: {userAnswer5}{' '}
						{userAnswer5 === correctAnswers.q5 ? (
							<span className="correct">Correct, you get 1 point!</span>
						) : userAnswer5 >= 216 && userAnswer5 <= 218 ? (
							<span className="incorrect">
								Not quite.
								<span className="correct">
									217 is correct. You get 0.5 points for being close.
								</span>
							</span>
						) : (
							<span className="incorrect">
								The correct answer is {correctAnswers.q5}
							</span>
						)}
					</li>
					<li>Total score: {totalScore()} points!</li>
				</ul>
			</h3>
		</div>
	);
};
