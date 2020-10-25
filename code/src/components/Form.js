import React, { useState } from 'react';
import InputSelect from './InputSelect';
import InputText from './InputText';
import InputRadio from './InputRadio';
import InputCheckbox from './InputCheckbox';
import InputRange from './InputRange';
import InputEmail from './InputEmail';
import Button from './Button';
import Summary from './Summary';
import ProgressBar from './ProgressBar';
import '../Styles/Form.css';

export const Form = () => {
	const [question, setQuestion] = useState(-1);
	const [name, setName] = useState('');
	const [season, setSeason] = useState('');
	const [months, setMonths] = useState([]);
	const [value, setValue] = useState(0);
	const [age, setAge] = useState(false);
	const [email, setEmail] = useState('');
	const [submit, setSubmit] = useState(false);

	const nextQuestion = () => setQuestion(question + 1);
	const previousQuestion = () => setQuestion(question - 1);

	const handleSubmit = event => {
		event.preventDefault();
		setSubmit(true);
	};

	const handleMonthsChange = monthValue => {
		months.includes(monthValue)
			? setMonths(months.filter(item => item !== monthValue))
			: setMonths([...months, monthValue]);
	};

	//array for radio btn
	const ageGroups = ['0-18 times', '19-40 times', '41-60 times', '61 + times'];

	//array for checkbox
	const seasonArray = [
		{
			season: 'Winter',
			months: ['December', 'January', 'February'],
		},
		{
			season: 'Spring',
			months: ['March', 'April', 'May'],
		},
		{
			season: 'Summer',
			months: ['June', 'July', 'August'],
		},
		{
			season: 'Fall',
			months: ['September', 'October', 'November'],
		},
	];

	return (
		<section className="form-wrapper">
			{!submit ? (
				<form onSubmit={handleSubmit}>
					{question === -1 && (
						<section className="introduction">
							<h1 tabIndex="0">
								Welcome, please take a few minutes to answer this survey!
							</h1>
							<div
								className="navigation-start"
								aria-label="Click Tab and Enter to Start survey"
								tabIndex="0"
							>
								<Button
									button="button"
									click={nextQuestion}
									text="Start survey"
								/>
							</div>
						</section>
					)}
					{question === 0 && (
						<section className="question-container">
							<InputText
								question="What is your name?"
								value={name}
								setName={setName}
							/>
							<div className="navigation">
								<Button button="button" click={previousQuestion} text="Back" />
								<Button
									button="button"
									disabled={!name}
									click={nextQuestion}
									text={name ? 'Next' : 'Type name'}
								/>
							</div>
						</section>
					)}

					{question === 1 && (
						<section className="question-container">
							<InputSelect
								question="What's your favourit season?"
								setSeason={setSeason}
								value={season}
							/>
							<div className="navigation">
								<Button button="button" click={previousQuestion} text="Back" />
								<Button
									button="button"
									disabled={!season}
									click={nextQuestion}
									text={season ? 'Next' : 'Select season'}
								/>
							</div>
						</section>
					)}
					{question === 2 && (
						<section className="question-container">
							<InputCheckbox
								question="Select which months you prefer"
								selectedMonths={months}
								onMonthsChange={handleMonthsChange}
								array={
									seasonArray[
										seasonArray.findIndex(item => item.season === season)
									].months
								}
							/>
							<div className="navigation">
								<Button button="button" click={previousQuestion} text="Back" />
								<Button
									button="button"
									disabled={!months}
									click={nextQuestion}
									text="Next"
								/>
							</div>
						</section>
					)}
					{question === 3 && (
						<section className="question-container">
							<InputRange
								question={`How much do you like ${season}? (scale 1-10)`}
								value={value}
								setValue={setValue}
								step={1}
							/>
							<div className="navigation">
								<Button button="button" click={previousQuestion} text="Back" />
								<Button
									button="button"
									disabled={value <= 0}
									click={nextQuestion}
									text={value ? 'Next' : 'Slide range'}
								/>
							</div>
						</section>
					)}

					{question === 4 && (
						<section className="question-container">
							<InputRadio
								question={`${season} what a great season, how many have you experienced?`}
								array={ageGroups}
								setAge={setAge}
								age={age}
							/>
							<div className="navigation">
								<Button button="button" click={previousQuestion} text="Back" />
								<Button
									button="button"
									disabled={!age}
									click={nextQuestion}
									text={age ? 'Next' : 'Select age'}
								/>
							</div>
						</section>
					)}
					{question === 5 && (
						<section className="question-container-summary">
							<Summary
								name={name}
								season={season}
								months={months}
								selected={age}
								value={value}
							/>
							<div className="email-container">
								<InputEmail
									question="Type your email for a summary!"
									value={email}
									setEmail={setEmail}
								/>
								<div className="navigation">
									<Button
										button="button"
										click={previousQuestion}
										text="Back"
									/>
									<Button
										type="submit"
										disabled={!email}
										text={email ? 'Submit' : 'Enter email'}
									/>
								</div>
							</div>
						</section>
					)}

					{question >= 0 && (
						<section className="progress-bar-wrapper">
							<ProgressBar
								progress={`${question}`}
								maxProgress="5"
								minProgress="0"
							/>
						</section>
					)}
				</form>
			) : (
				<section className="reset-wrapper">
					<section className="reset">
						<h4 tabIndex="0">Thank you!</h4>
						<div className="navigation-reset">
							<Button
								button="button"
								click={() => window.location.reload()}
								text="Reset survey"
							/>
						</div>
					</section>
				</section>
			)}
		</section>
	);
};
