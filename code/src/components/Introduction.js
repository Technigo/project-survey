import React from 'react';

const Introduction = ({
	introductionInput,
	onIntroductionInputChange,
	onStepChange,
}) => {
	return (
		<section className="containerInfo">
			<label htmlFor="IntroductionInput">
				<h1>Hello friend!</h1>
				<h2>A positive suggestion form for you to feel better!</h2>
			</label>
			<button onClick={onStepChange}>Start here!</button>
		</section>
	);
};

export default Introduction;
