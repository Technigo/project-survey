import React from 'react';

const Introduction = ({
	introductionInput,
	onIntroductionInputChange,
	onStepChange,
}) => {
	return (
		<>
			<label htmlFor="IntroductionInput">
				<h1>Hello friend!</h1>
				<h2>A positive suggestion form for you to feel better!</h2>
			</label>
			<button onClick={onStepChange}>Start here!</button>
		</>
	);
};

export default Introduction;
