import React from 'react';

const FifthQuestion = ({moodInput, onMoodInputChange, onStepChange, onPreviousQuestionChange }) => {

	return (
		<section className="content-container">
			<div className="form">
				<label 
					className="label-title" >
						How excited are you for this game?
				</label>
				<div>
					<div className="emojies-container">
						<span role="img" className="emoji" aria-label="img">🥱</span>
						<span role="img" className="emoji" aria-label="img">😀</span>
					</div>
					<input 
					type="range" 
					min="1" 
					max="10" 
					value={moodInput} 
					onInput={onMoodInputChange}
					onChange={onMoodInputChange}
					className="slider"
					/>
				</div>
				<p className="input-text">{moodInput}</p>


				<div className="button-container">
					<button onClick={onPreviousQuestionChange}>&larr; Back</button>
					<button type="submit" onClick={onStepChange}>Submit &rarr;</button>				
				</div>
			</div>

		</section>

	);
};

export default FifthQuestion;