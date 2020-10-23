import React from 'react';
import '../Styles/ProgressBar.css';

const ProgressBar = ({ progress, maxProgress, minProgress }) => {
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
		</>
	);
};

export default ProgressBar;
