import React from 'react';

const FifthQuestion = ({moodInput, onMoodInputChange, onStepChange, onPreviousQuestionChange }) => {

	return (
		<section className="content-container">
			<form className="form">
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
					className="slider"
					/>
				</div>
				<p className="input-text">{moodInput}</p>


				<div className="button-container">
					<button onClick={onPreviousQuestionChange}>&larr; Back</button>
					<button type="button" onClick={onStepChange}>Next &rarr;</button>				
				</div>
			</form>

		</section>

	);
};

export default FifthQuestion;