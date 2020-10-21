import React from 'react';
import './ProgressBar.css';

export const ProgressBar = ({ progressText, progress, maxProgress }) => {
	return (
		<section className="progress-bar">
			{/* <label htmlFor="ProgressBar">{progressText}</label> */}
			<progress id="ProgressBar" value={progress} max={maxProgress}></progress>
			<output name="progress-output">{progress}</output> {/*added */}
		</section>
	);
};
