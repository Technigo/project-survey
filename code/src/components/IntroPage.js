import React from 'react';

const IntroPage = ({ onStepChange }) => {
	return (
		<div className="welcome-message-container" tabIndex="0" id="first-question">
			<h1 className="welcome-message">
				Want to watch a horror movie?....................{' '}
			</h1>

			<button className="button" type="button" onClick={onStepChange}>
				YES
			</button>
		</div>
	);
};

export default IntroPage;
