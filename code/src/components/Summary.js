import React from 'react';

const Summary = ({ nameInput, experience, chosenPastry, date,  }) => {
	return (
		<section className="summary">
		<h2 className="summary-header">Welcome on a morning baking course {nameInput}!</h2>
		<p className="summary-text">We will bake <strong>{chosenPastry}</strong> on <strong>{experience}</strong> level. </p>
		<p className="summary-text">See you <strong>{date.toDateString()}</strong> at 9 o'clock! </p>	
		<h2 className="summary-subheader">Have Bunderful day!</h2> 
		<div> <img
			src="../img/emoji-icon-bun.png"
			alt="cinnamon roll emoji"
		 	className="reset-button" tabIndex="0" type="button" onClick={() => window.location.reload()}></img></div>
		
	
		</section>
	);
};

export default Summary;
