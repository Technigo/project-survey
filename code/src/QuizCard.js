import React, { useState } from 'react';
import { Question1 } from './Question1';
import { Question2 } from './Question2';
import { Question3 } from './Question3';
import { Question4 } from './Question4';
import { QuizSummary } from './QuizSummary';

export const QuizCard = () => {
	const [hideQuiz, setHideQuiz] = useState(false);
	const [answer1, setAnswer1] = useState('');
	const [answer2, setAnswer2] = useState({});
	const [answer3, setAnswer3] = useState([]);
	const [answer4, setAnswer4] = useState('');

	const handleAnswer1 = (newAnswer1) => {
		setAnswer1(newAnswer1);
	};

	const handleAnswer2 = (newAnswer2) => {
		setAnswer2(newAnswer2);
	};

	const handleAnswer3 = (answerValue) => {
		answer3.includes(answerValue)
			? setAnswer3(answer3.filter((item) => item !== answerValue))
			: setAnswer3([...answer3, answerValue]);
	};

	const handleAnswer4 = (answerValue) => {
		setAnswer4(answerValue);
	};

	const onSubmit = (event) => {
		setHideQuiz(true);
	};

	if (hideQuiz === true) {
		return (
			<QuizSummary
				userAnswer1={answer1}
				userAnswer2={answer2}
				userAnswer3={answer3}
				userAnswer4={answer4}
			/>
		);
	}

	return (
		<>
			<form onSubmit={onSubmit}>
				{!hideQuiz && (
					<div className="show">
						<Question1 userAnswer1={answer1} onAnswerChange={handleAnswer1} />

						<Question2 userAnswer2={answer2} onAnswerChange={handleAnswer2} />

						<Question3 userAnswer3={answer3} onAnswerChange={handleAnswer3} />

						<Question4 userAnswer4={answer4} onAnswerChange={handleAnswer4} />
					</div>
				)}
				<button type="submit" onClick={(event) => onSubmit()}>
					Submit answers
				</button>
			</form>
		</>
	);
};
