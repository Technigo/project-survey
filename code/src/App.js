import React from "react";

import { Form } from './Form'


export const App = () => {
	return (
		<div className="App">
			<div className="header-section">
				<h1 className="title">HÖRLÜRAR</h1>
				<p className="title-line-one"> What is music to your ears !!</p>
				<p className="title-line-two">Tell us more about your headphones...</p>
			</div>
			<div className="headphone-image">
				<img src="./img/headphone.svg"></img>
			</div>
			<div>
				<Form />
			</div>
		</div>
	);
};
