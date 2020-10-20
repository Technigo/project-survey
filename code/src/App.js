import React from "react";
import { NameQuestion } from './components/NameQuestion';
import { EmailQuestion } from './components/EmailQuestion';
import { BrandQuestion } from './components/BrandQuestion';
import { DropDown } from './components/DropDown';
import { RadioButton } from './components/RadioButton';
import { SubmitButton } from './components/SubmitButton';


export const App = () => {
	return (
		<div className="App">
			<div className="header-section">
				<h1 className="title">HÖRLÜRAR</h1>
				<p className="title-line-one"> What is music to your ears !!</p>
				<p className="title-line-two">Tell us more about your headphones...</p>
			</div>
			<div className="image-banner">
				<img src="/img/headphone.svg" alt="Headphone" />
			</div>
			<hr />
			<div className="questions-entry">
				<NameQuestion />
				<EmailQuestion />
				<BrandQuestion />
			</div>
			<div className="clickers">
				<DropDown />
				<RadioButton />
			</div>
			<div className="button">
				<SubmitButton name="Click Me!" />
			</div>





		</div>
	);
};
