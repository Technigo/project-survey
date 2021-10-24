import React from 'react';

import { ReactComponent as MyDecorline } from "../assets/decorline.svg";

const Overview = ({ nameInput, experience, mood, gratitudeOne, gratitudeTwo, gratitudeThree }) => {
	return (
		<>
			<p>Summary of<br/>todays reflections</p>
			<div className="summaryQuote">
				<MyDecorline />
				<p>This day was {experience}.<br/>Right now I feel {mood}.<br/>I'm grateful for {gratitudeOne}, {gratitudeTwo} and {gratitudeThree}.</p>
				<MyDecorline />
			</div>
			<p className="goodbye">{nameInput}, thank you<br/>for practicing gratitude here today.</p>
			<p>See you tomorrow.</p>
		</>
	);
};

export default Overview;
