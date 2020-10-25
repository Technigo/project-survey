import React from 'react';

export const Question4 = ({ userAnswer4, onAnswerChange }) => {
	return (
		<div className="quiz-box">
			<fieldset>
				<legend>
					<h2>Question number 4</h2>
					<p>
						The next season of the antology series American Horror Story is
						delayed into 2021 due to the Covid-situation. How many seasons are
						available right now?
					</p>
				</legend>

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
			</fieldset>
		</div>
	);
};
