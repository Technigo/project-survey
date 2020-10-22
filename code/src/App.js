import React from "react";

import { Form } from './Form'


export const App = () => {
	return (
		<div className="App">
			<div className="header-section" >
				<h1 className="title" tabIndex="0">HÖRLÜRAR</h1>
				<p className="title-line-one" tabIndex="0"> What is music to your ears !!</p>
				<p className="title-line-two" tabIndex="0">Tell us more about your headphones...</p>
			</div>
			<div className="headphone-image" tabIndex="0">
				<img src="./img/headphone.svg" alt="Headphone Image"></img>
			</div>
			<div>
				<Form />
			</div>
		</div>
	);
};
