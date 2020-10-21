import React from 'react';

export const Question3 = ({ userAnswer3, onAnswerChange }) => {
	return (
		<div className="quiz-box">
			<h2>Question number 3</h2>
			<p>
				The unsettling Netflix-series Ratched starring Sarah Paulson is inspired
				by one or more of these classic movies starring Jack Nicholson?
			</p>
			<div className="checkbox-container">
				<input
					id="cuckoo"
					type="checkbox"
					checked={userAnswer3.includes('One flew over the cuckoos nest')}
					onChange={() => onAnswerChange('One flew over the cuckoos nest')}
				/>
				<label htmlFor="cuckoo">One flew over the cuckoos nest</label>

				<input
					id="shining"
					type="checkbox"
					checked={userAnswer3.includes('The Shining')}
					onChange={() => onAnswerChange('The Shining')}
				/>
				<label htmlFor="shining">The shining</label>

				<input
					id="witches"
					type="checkbox"
					checked={userAnswer3.includes('The witches of Eastwick')}
					onChange={() => onAnswerChange('The witches of Eastwick')}
				/>
				<label htmlFor="witches">The witches of Eastwick</label>
			</div>
		</div>
	);
};
