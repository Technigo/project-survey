import React from 'react';
import './ProgressBar.css';

export const ProgressBar = ({ progress, maxProgress, minProgress }) => {
	return (
		<>
			<label className="progress-bar-label" htmlFor="ProgressBar">
				{progress} / {maxProgress}
			</label>
			<progress
				id="ProgressBar"
				className="progress-bar"
				name="progress-bar"
				value={progress}
				max={maxProgress}
				min={minProgress}
			></progress>
			{/* <output name="progress-output">{progress}</output> */}
		</>
	);
};
