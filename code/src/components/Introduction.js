import React from 'react';

const Introduction = ({
	introductionInput,
	onIntroductionInputChange,
	onStepChange,
}) => {
	return (
		<section className="containerInfo">
			<label htmlFor="IntroductionInput">
				<h2>Hello friend!</h2>
				<p>A positive suggestion form for you to feel better!</p>
			</label>
			<button onClick={onStepChange}>Start here!</button>
		</section>
	);
};

export default Introduction;
