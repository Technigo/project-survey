import React from "react";
import { SubmitButton } from './components/SubmitButton';
import { NameQuestions } from './components/NameQuestion';
import { RadioButton } from './components/RadioButton';

export const App = () => {
	return (
		<div className="App">
			<div className="header-section">
				<h1 className="title">HÖRLÜRAR</h1>
				<p className="title-line-one"> What is music to your ears !!</p>
				<p className="title-line-two">Tell us more about your headphones...</p>
			</div>
			<img src="/img/headphone.svg" alt="Headphone" />
			<NameQuestions className="name-questions" />
			<RadioButton className="radio-buttons" />
			<SubmitButton className="submit-button" name="Click Me!" />
		</div>
	);
};
