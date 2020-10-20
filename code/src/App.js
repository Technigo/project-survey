import React from "react";
import { SubmitButton } from './components/SubmitButton'
import { Questions } from './components/Questions'
import { RadioButton } from './components/RadioButton'

export const App = () => {
	return (
		<div className="App">
			<div className="header-section">
				<h1 className="title"> " HÖRLÜRAR " </h1>
				<p className="title-line-one"> What is music to your ears !!</p>
				<p className="title-line-two">Tell us more about your headphones...</p>
				<img className="headphone-image" src="/img/headphone.svg" alt="Headphone" />
			</div>
			<Questions />
			<RadioButton />
			<SubmitButton name="Click Me!" />
		</div>
	)
}
